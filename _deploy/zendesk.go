package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"mime/multipart"
	"net/http"
	"os"
	"path/filepath"
	"time"
)

type Zendesk struct {
	Client *http.Client
}

type Article struct {
	ID                int64         `json:"id,omitempty"`
	URL               string        `json:"url,omitempty"`
	HTMLURL           string        `json:"html_url,omitempty"`
	AuthorID          int64         `json:"author_id,omitempty"`
	CommentsDisabled  bool          `json:"comments_disabled,omitempty"`
	Draft             bool          `json:"draft,omitempty"`
	Promoted          bool          `json:"promoted,omitempty"`
	Position          int           `json:"position,omitempty"`
	VoteSum           int           `json:"vote_sum,omitempty"`
	VoteCount         int           `json:"vote_count,omitempty"`
	SectionID         int64         `json:"section_id,omitempty"`
	CreatedAt         time.Time     `json:"created_at,omitempty"`
	UpdatedAt         time.Time     `json:"updated_at,omitempty"`
	Name              string        `json:"name,omitempty"`
	Title             string        `json:"title,omitempty"`
	SourceLocale      string        `json:"source_locale,omitempty"`
	Locale            string        `json:"locale,omitempty"`
	Outdated          bool          `json:"outdated,omitempty"`
	OutdatedLocales   []interface{} `json:"outdated_locales,omitempty"`
	EditedAt          time.Time     `json:"edited_at,omitempty"`
	UserSegmentID     *int          `json:"user_segment_id"`
	PermissionGroupID int           `json:"permission_group_id,omitempty"`
	LabelNames        []string      `json:"label_names,omitempty"`
	Body              string        `json:"body,omitempty"`
}

type Articles struct {
	Count        int         `json:"count"`
	NextPage     string      `json:"next_page"`
	Page         int         `json:"page"`
	PageCount    int         `json:"page_count"`
	PerPage      int         `json:"per_page"`
	PreviousPage interface{} `json:"previous_page"`
	Articles     []Article   `json:"articles"`
	SortBy       string      `json:"sort_by"`
	SortOrder    string      `json:"sort_order"`
}

func (z *Zendesk) ListArticles() (articles []Article, err error) {
	data := Articles{
		NextPage: "https://arduino.zendesk.com/api/v2/help_center/articles.json",
	}

	for data.NextPage != "" {
		req, _ := http.NewRequest("GET", data.NextPage, nil)

		res, err := z.Client.Do(req)
		if err != nil {
			return nil, fmt.Errorf("call list articles api: %w", err)
		}

		body, err := ioutil.ReadAll(res.Body)
		if err != nil {
			return nil, fmt.Errorf("read body for list articles: %w", err)
		}

		if res.StatusCode > 299 {
			return nil, fmt.Errorf("GET '%s': %s, %s", data.NextPage, res.Status, string(body))
		}

		data = Articles{}

		err = json.Unmarshal(body, &data)
		if err != nil {
			return nil, fmt.Errorf("unmarshal json: %w", err)
		}

		articles = append(articles, data.Articles...)
	}

	return articles, nil
}

type UpdateArticlePayload struct {
	LabelNames []string `json:"label_names"`

	Translation UpdateArticleTranslationPayload `json:"translation"`
}

type UpdateArticleTranslationPayload struct {
	Author int    `json:"author_id"`
	Title  string `json:"title"`
	Body   string `json:"body"`
}

func (z *Zendesk) UpdateArticle(article Article, body string, labelNames []string) error {
	Log.Infof("Update article in section %d: %s", article.SectionID, article.Title)

	payload := struct {
		Article Article `json:"article"`
	}{
		Article: Article{
			LabelNames: labelNames,
		},
	}

	data := bytes.NewBuffer(nil)
	enc := json.NewEncoder(data)

	err := enc.Encode(payload)
	if err != nil {
		return fmt.Errorf("encode payload %+v to json: %w", payload, err)
	}

	req, _ := http.NewRequest("PUT", article.URL, data)
	req.Header.Add("Content-Type", "application/json")

	res, err := z.Client.Do(req)
	if err != nil {
		return fmt.Errorf("call update article api: %w", err)
	}

	if res.StatusCode != 200 {
		resbody, err := ioutil.ReadAll(res.Body)
		if err != nil {
			return fmt.Errorf("read response: %w", err)
		}

		jsonPayload, _ := json.Marshal(payload)

		return fmt.Errorf("PUT '%s' '%s': %s, %s", article.URL, jsonPayload, res.Status, string(resbody))
	}

	otherPayload := UpdateArticlePayload{
		LabelNames: labelNames,

		Translation: UpdateArticleTranslationPayload{
			Author: int(article.AuthorID),
			Title:  article.Title,
			Body:   body,
		},
	}

	url := fmt.Sprintf("https://arduino.zendesk.com/api/v2/help_center/articles/%d/translations/en-us.json", article.ID)

	data = bytes.NewBuffer(nil)
	enc = json.NewEncoder(data)

	err = enc.Encode(otherPayload)
	if err != nil {
		return fmt.Errorf("encode otherPayload %+v to json: %w", otherPayload, err)
	}

	req, _ = http.NewRequest("PUT", url, data)
	req.Header.Add("Content-Type", "application/json")

	res, err = z.Client.Do(req)
	if err != nil {
		return fmt.Errorf("call update article api: %w", err)
	}

	if res.StatusCode != 200 {
		resbody, err := ioutil.ReadAll(res.Body)
		if err != nil {
			return fmt.Errorf("read response: %w", err)
		}

		return fmt.Errorf("PUT '%s': %s, %s", url, res.Status, string(resbody))
	}

	return nil
}

func (z *Zendesk) CreateArticle(sectionID int64, title, body string, labelNames []string) (Article, error) {
	url := fmt.Sprintf("https://arduino.zendesk.com/api/v2/help_center/sections/%d/articles", sectionID)

	Log.Infof("Create article in section %d: %s", sectionID, title)

	payload := struct {
		Article Article `json:"article"`
	}{
		Article: Article{
			AuthorID:          383520710014,
			Title:             title,
			Body:              body,
			Locale:            "en-us",
			PermissionGroupID: 1127974,
			UserSegmentID:     nil,
			CommentsDisabled:  true,
			LabelNames:        labelNames,
		},
	}

	data := bytes.NewBuffer(nil)
	enc := json.NewEncoder(data)

	err := enc.Encode(payload)
	if err != nil {
		return Article{}, fmt.Errorf("encode payload %+v to json: %w", payload, err)
	}

	req, _ := http.NewRequest("POST", url, data)
	req.Header.Add("Content-Type", "application/json")

	res, err := z.Client.Do(req)
	if err != nil {
		return Article{}, fmt.Errorf("call create article api: %w", err)
	}

	if res.StatusCode > 299 {
		resbody, err := ioutil.ReadAll(res.Body)
		if err != nil {
			return Article{}, fmt.Errorf("read response: %w", err)
		}

		return Article{}, fmt.Errorf("POST '%s': %s, %s", url, res.Status, string(resbody))
	}

	resbody, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return Article{}, fmt.Errorf("read response: %w", err)
	}

	newArticle := &struct {
		Article Article `json:"article"`
	}{}
	err = json.Unmarshal(resbody, &data)
	if err != nil {
		return Article{}, fmt.Errorf("unmarshal json: %w", err)
	}

	return newArticle.Article, nil
}

type Section struct {
	Name       string `json:"name"`
	ID         int64  `json:"id"`
	CategoryID int64  `json:"category_id"`
}

type Sections struct {
	Sections []Section `json:"sections"`
	NextPage string    `json:"next_page"`
}

type Category struct {
	Name string `json:"name"`
	ID   int64  `json:"id"`
}

type Categories struct {
	Categories []Category `json:"categories"`
	NextPage   string     `json:"next_page"`
}

func (z *Zendesk) ListCategories() (categories []Category, err error) {
	data := Categories{
		NextPage: "https://arduino.zendesk.com/api/v2/help_center/categories",
	}
	for data.NextPage != "" {
		req, _ := http.NewRequest("GET", data.NextPage, nil)
		req.Header.Add("Accept", "application/json")

		res, err := z.Client.Do(req)
		if err != nil {
			return categories, fmt.Errorf("call list categories api: %w", err)
		}

		resbody, err := ioutil.ReadAll(res.Body)
		if err != nil {
			return categories, fmt.Errorf("read response: %w", err)
		}

		if res.StatusCode > 299 {
			return nil, fmt.Errorf("GET '%s': %s, %s", data.NextPage, res.Status, string(resbody))
		}

		data = Categories{}
		err = json.Unmarshal(resbody, &data)
		if err != nil {
			return categories, fmt.Errorf("unmarshal json: %w", err)
		}
		categories = append(categories, data.Categories...)
	}
	return categories, nil
}

func (z *Zendesk) ListSections() (sections []Section, err error) {
	data := Sections{
		NextPage: "https://arduino.zendesk.com/api/v2/help_center/sections",
	}
	for data.NextPage != "" {
		req, _ := http.NewRequest("GET", data.NextPage, nil)
		req.Header.Add("Accept", "application/json")

		res, err := z.Client.Do(req)
		if err != nil {
			return sections, fmt.Errorf("call list sections api: %w", err)
		}

		resbody, err := ioutil.ReadAll(res.Body)
		if err != nil {
			return sections, fmt.Errorf("read response: %w", err)
		}

		if res.StatusCode > 299 {
			return nil, fmt.Errorf("GET '%s': %s, %s", data.NextPage, res.Status, string(resbody))
		}

		data = Sections{}
		err = json.Unmarshal(resbody, &data)
		if err != nil {
			return sections, fmt.Errorf("unmarshal json: %w", err)
		}
		sections = append(sections, data.Sections...)
	}
	return sections, nil
}

type Attachment struct {
	ID       int    `json:"id"`
	URL      string `json:"content_url"`
	Name     string `json:"display_file_name"`
	FileName string `json:"file_name"`
	Size     int64  `json:"size"`
}

func (z *Zendesk) CreateAttachment(article Article, path string) (attachment Attachment, err error) {
	file, err := os.Open(path)
	if err != nil {
		return attachment, fmt.Errorf("open file %s: %w", path, err)
	}
	defer file.Close()

	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)

	part, err := writer.CreateFormFile("file", filepath.Base(path))
	if err != nil {
		return attachment, fmt.Errorf("create formfile %s: %w", filepath.Base(path), err)
	}
	_, err = io.Copy(part, file)
	if err != nil {
		return attachment, fmt.Errorf("copy file to formfile: %w", err)
	}
	_ = writer.WriteField("inline", "true")

	err = writer.Close()
	if err != nil {
		return attachment, fmt.Errorf("close form writer: %w", err)
	}

	url := fmt.Sprintf("https://arduino.zendesk.com/api/v2/help_center/articles/%d/attachments", article.ID)

	req, _ := http.NewRequest("POST", url, body)
	req.Header.Set("Content-Type", writer.FormDataContentType())
	req.Header.Add("Accept", "application/json")

	res, err := z.Client.Do(req)
	if err != nil {
		return attachment, fmt.Errorf("call create attachment api: %w", err)
	}

	resbody, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return attachment, fmt.Errorf("read response: %w", err)
	}

	if res.StatusCode > 299 {
		return attachment, fmt.Errorf("POST '%s': %s, %s", url, res.Status, string(resbody))
	}

	resp := &struct {
		Attachment Attachment `json:"article_attachment"`
	}{}
	err = json.Unmarshal(resbody, resp)
	if err != nil {
		return attachment, fmt.Errorf("unmarshal json: %w", err)
	}

	return resp.Attachment, nil
}

func (z *Zendesk) ListAttachments(article Article) (attachments []Attachment, err error) {
	url := fmt.Sprintf("https://arduino.zendesk.com/api/v2/help_center/articles/%d/attachments", article.ID)

	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Add("Accept", "application/json")

	res, err := z.Client.Do(req)
	if err != nil {
		return attachments, fmt.Errorf("call list attachments api: %w", err)
	}

	resbody, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return attachments, fmt.Errorf("read response: %w", err)
	}

	if res.StatusCode > 299 {
		return nil, fmt.Errorf("GET '%s': %s, %s", url, res.Status, string(resbody))
	}

	resp := &struct {
		Attachments []Attachment `json:"article_attachments"`
	}{}
	err = json.Unmarshal(resbody, resp)
	if err != nil {
		return attachments, fmt.Errorf("unmarshal json: %w", err)
	}
	return resp.Attachments, nil
}

func (z *Zendesk) DeleteAttachment(attachmentID int) (err error) {
	url := fmt.Sprintf("https://arduino.zendesk.com/api/v2/help_center/articles/attachments/%d", attachmentID)
	req, _ := http.NewRequest("DELETE", url, nil)
	req.Header.Add("Accept", "application/json")

	res, err := z.Client.Do(req)
	if err != nil {
		return fmt.Errorf("call delete attachments api: %w", err)
	}
	if res.StatusCode > 299 {
		resbody, err := ioutil.ReadAll(res.Body)
		if err != nil {
			return fmt.Errorf("read response: %w", err)
		}
		return fmt.Errorf("DELETE '%s': %s, %s", url, res.Status, string(resbody))
	}
	return nil
}

type BasicAuthTransport struct {
	Username string
	Password string
}

func (bat BasicAuthTransport) RoundTrip(req *http.Request) (*http.Response, error) {
	req.SetBasicAuth(bat.Username, bat.Password)

	return http.DefaultTransport.RoundTrip(req)
}

func (bat *BasicAuthTransport) Client() *http.Client {
	return &http.Client{Transport: bat}
}
