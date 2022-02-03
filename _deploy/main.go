// Is this a hastily written Go script for production deployment? Yes it is
// If you have time to spare in order to improve it, thanks

package main

import (
	"bytes"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	chromahtml "github.com/alecthomas/chroma/formatters/html"
	"github.com/algolia/algoliasearch-client-go/v3/algolia/search"
	"github.com/caarlos0/env"
	"github.com/gohugoio/hugo/parser/pageparser"
	"github.com/microcosm-cc/bluemonday"
	"github.com/sirupsen/logrus"
	"github.com/yuin/goldmark"
	highlighting "github.com/yuin/goldmark-highlighting"
	"github.com/yuin/goldmark/ast"
	"github.com/yuin/goldmark/extension"
	"github.com/yuin/goldmark/renderer"
	"github.com/yuin/goldmark/renderer/html"
	"github.com/yuin/goldmark/util"
)

var Config = struct {
	ZendeskUser   string `env:"ZENDESK_USER,required"`
	ZendeskToken  string `env:"ZENDESK_TOKEN,required"`
	AlgoliaID     string `env:"ALGOLIA_APPLICATION_ID"`
	AlgoliaSecret string `env:"ALGOLIA_INDEXER_KEY"`
	AlgoliaIndex  string `env:"ALGOLIA_INDEX"`
}{}

var Log = logrus.New()

var stripHTMLpolicy = bluemonday.StripTagsPolicy()

func main() {
	Log.SetLevel(logrus.InfoLevel)
	err := env.Parse(&Config)
	must(err)

	// Connect to zendesk
	transport := BasicAuthTransport{
		Username: Config.ZendeskUser + "/token",
		Password: Config.ZendeskToken,
	}

	zendesk := &Zendesk{
		transport.Client(),
	}

	client := search.NewClient(Config.AlgoliaID, Config.AlgoliaSecret)
	algoliaIndex := client.InitIndex(Config.AlgoliaIndex)

	// Read all articles online
	Log.Info("Read all articles")
	articles, err := zendesk.ListArticles()
	must(err)

	// Read all categories online
	Log.Info("Read all categories")
	categories, err := zendesk.ListCategories()
	must(err)

	// Read all sections online
	Log.Info("Read all sections")
	sections, err := zendesk.ListSections()
	must(err)

	Log.Info("Create section graph")
	graph, err := CreateSectionGraph(categories, sections)
	must(err)

	// Walk through every article in '../content'
	Log.Info("Process markdown")
	must(filepath.Walk("../content", func(path string, info os.FileInfo, err error) error {
		if filepath.Ext(path) != ".md" {
			return nil
		}

		if err != nil {
			return err
		}

		err = process(zendesk, algoliaIndex, articles, graph, path)
		if err != nil {
			return err
		}

		return nil
	}))
}

func process(zendesk *Zendesk, algoliaIndex *search.Index, articles []Article, graph Graph, path string) error {
	// Read article
	file, err := os.Open(path)
	if err != nil {
		return fmt.Errorf("read article %s: %w", path, err)
	}

	// Extract frontmatter and content
	content, err := pageparser.ParseFrontMatterAndContent(file)
	if err != nil {
		return fmt.Errorf("extract frontmatter from article %s: %w", path, err)
	}

	if content.FrontMatter["title"] == nil {
		return fmt.Errorf("extract metadata from article %s: no title", path)
	}

	// Find out if the article already exists
	title := content.FrontMatter["title"].(string)
	folder := strings.TrimPrefix(filepath.Dir(path), "../content/")
	if filepath.Base(folder) == "templates" {
		return nil
	}

	section, err := graph.ByPath(folder)
	if err != nil {
		return fmt.Errorf("couldn't process article %s: %w", path, err)
	}

	labelNames := []string{}

	labels, _ := content.FrontMatter["labels"].([]interface{})

	for _, label := range labels {
		labelNames = append(labelNames, label.(string))
	}

	article, err := searchArticle(articles, title, section.ID)
	if err != nil {
		Log.Infof("article not found, creating: %s in section %s", title, section.Name)
		article, err = zendesk.CreateArticle(section.ID, title, "", labelNames)
		if err != nil {
			Log.Errorf("unable to create the article: %w", err)
		}
		return nil
	}

	currentAttachments, err := zendesk.ListAttachments(article)
	if err != nil {
		return err
	}
	// attachment list
	var attachments []Attachment
	md := goldmark.New(
		goldmark.WithExtensions(extension.GFM, highlighting.NewHighlighting(
			highlighting.WithFormatOptions(
				chromahtml.WithClasses(true),
			),
		)),
		goldmark.WithRenderer(renderer.NewRenderer(html.WithUnsafe(), renderer.WithNodeRenderers(util.Prioritized(&MDRenderer{
			Renderer: html.Renderer{
				Config: html.NewConfig(),
			},
			OnImage: func(n *ast.Image) {
				imagePath := filepath.Join(filepath.Dir(path), string(n.Destination))
				info, err := os.Stat(imagePath)
				if errors.Is(err, os.ErrNotExist) {
					Log.Errorf("attachment not found: %s\n", imagePath)
					return
				}

				// check if attachment already exists
				for _, attachment := range currentAttachments {
					if attachment.FileName == filepath.Base(imagePath) && info.Size() == attachment.Size {
						Log.Infof("attachment already exists, not uploading: %s\n", imagePath)
						n.Destination = []byte(attachment.URL)
						attachments = append(attachments, attachment)
						return
					}
				}

				Log.Infof("uploading attachment: %s\n", imagePath)

				res, err := zendesk.CreateAttachment(article, imagePath)
				if err != nil {
					Log.Errorf("CreateAttachment failed: %s\n", err.Error())
					return
				}
				n.Destination = []byte(res.URL)
				attachments = append(attachments, res)
			},
		}, 1000)))))

	// Convert content to md
	var buf bytes.Buffer
	err = md.Convert(content.Content, &buf)
	if err != nil {
		return fmt.Errorf("convert article %s to md: %w", path, err)
	}

	if article.Body != buf.String() {
		Log.WithField("article", article.Title).Info("update content")
		err := zendesk.UpdateArticle(article, buf.String(), labelNames)
		if err != nil {
			return fmt.Errorf("update article '%s': %w", title, err)
		}
	} else {
		Log.WithField("article", article.Title).Info("skip content update")
	}

	err = cleanupAttachments(zendesk, article, attachments)
	if err != nil {
		return fmt.Errorf("cleanup attachments for article %s: %w", path, err)
	}

	_, err = algoliaIndex.SaveObject(map[string]interface{}{
		"objectID":               article.URL,
		"title":                  article.Title,
		"documentation_type":     "Help Center",
		"category_of_helpcenter": section.Name,
		"environment":            "support.arduino.cc",
		"language":               "en",
		"language_pretty":        "English",
		"content":                stripHTMLpolicy.Sanitize(article.Body),
		"url":                    article.HTMLURL,
	})
	if err != nil {
		Log.Errorf("unable to save the object in Algolia: %w", err)
	}

	return nil
}

func cleanupAttachments(zendesk *Zendesk, article Article, existing []Attachment) error {
	attachments, err := zendesk.ListAttachments(article)
	if err != nil {
		return fmt.Errorf("list attachments: %w", err)
	}
	for _, attachment := range attachments {
		_, err := searchAttachment(existing, attachment.ID)
		if err != nil {
			Log.Infof("deleting attachment: %s\n", attachment.URL)
			err := zendesk.DeleteAttachment(attachment.ID)
			if err != nil {
				return fmt.Errorf("delete attachment: %w", err)
			}
		}
	}

	return nil
}

func searchArticle(articles []Article, title string, sectionID int64) (article Article, err error) {
	for _, article := range articles {
		if title == article.Title && sectionID == article.SectionID {
			return article, nil
		}
	}

	return Article{}, errors.New("not found")
}

type Node struct {
	ID    int64
	Name  string
	Nodes Graph
}

type Graph []*Node

func (g Graph) ByID(id int64) (node *Node, err error) {
	for _, node := range g {
		if node.ID == id {
			return node, nil
		}
	}

	return nil, fmt.Errorf("not found with id %d", id)
}

func (g Graph) ByPath(path string) (node *Node, err error) {
	parts := strings.Split(path, string(filepath.Separator))
	for _, node := range g {
		if node.Name == parts[0] {
			if len(parts) == 1 {
				return node, nil
			}
			return node.Nodes.ByPath(filepath.Join(parts[1:]...))
		}
	}

	return nil, fmt.Errorf("not found with path %s", path)
}

func CreateSectionGraph(categories []Category, sections []Section) (nodes Graph, err error) {
	for _, category := range categories {
		nodes = append(nodes, &Node{
			ID:    category.ID,
			Name:  category.Name,
			Nodes: Graph{},
		})
	}

	for _, section := range sections {
		node, err := nodes.ByID(section.CategoryID)
		if err != nil {
			return nodes, fmt.Errorf("couldn't create graph: %w", err)
		}

		node.Nodes = append(node.Nodes, &Node{
			ID:    section.ID,
			Name:  section.Name,
			Nodes: Graph{},
		})
	}

	return nodes, nil
}

func searchAttachment(attachments []Attachment, id int) (attachment Attachment, err error) {
	for _, attachment := range attachments {
		if id == attachment.ID {
			return attachment, nil
		}
	}

	return Attachment{}, errors.New("not found")
}

type MDRenderer struct {
	html.Renderer
	OnImage func(*ast.Image)
}

// RegisterFuncs implements NodeRenderer.RegisterFuncs
func (r *MDRenderer) RegisterFuncs(reg renderer.NodeRendererFuncRegisterer) {
	r.Renderer.RegisterFuncs(reg)
	reg.Register(ast.KindImage, r.renderImage)
}

func (r *MDRenderer) renderImage(w util.BufWriter, source []byte, node ast.Node, entering bool) (ast.WalkStatus, error) {
	if !entering {
		return ast.WalkContinue, nil
	}
	n := node.(*ast.Image)
	r.OnImage(n)
	_, _ = w.WriteString("<img src=\"")
	if r.Unsafe || !html.IsDangerousURL(n.Destination) {
		_, _ = w.Write(util.EscapeHTML(util.URLEscape(n.Destination, true)))
	}
	_, _ = w.WriteString(`" alt="`)
	_, _ = w.Write(util.EscapeHTML(n.Text(source)))
	_ = w.WriteByte('"')
	if n.Title != nil {
		_, _ = w.WriteString(` title="`)
		r.Writer.Write(w, n.Title)
		_ = w.WriteByte('"')
	}
	if n.Attributes() != nil {
		html.RenderAttributes(w, n, html.ImageAttributeFilter)
	}
	if r.XHTML {
		_, _ = w.WriteString(" />")
	} else {
		_, _ = w.WriteString(">")
	}
	return ast.WalkSkipChildren, nil
}

type unwrapper interface {
	Unwrap() error
}

func logErrorStack(err error) {
	if err == nil {
		return
	}
	Log.Errorf("> %+v", err)
	if wrapped, ok := err.(unwrapper); ok {
		logErrorStack(wrapped.Unwrap())
	}
}

func must(err error) {
	if err != nil {
		logErrorStack(err)
		panic(err)
	}
}
