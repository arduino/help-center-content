# Rules

This document contains a description of all HC rules.

<a name="hc001"></a>

## HC001 - Heading length limit

Tags: line_length

Aliases: heading-increment, header-length-x

This rule is triggered when a heading is longer than the set limit.

Rationale: Overely long headings are hard to read and display (especially in lists and other navigation).

<a name="hc002"></a>

## HC002 - Missing image

Tags: images

Aliases: no-missing-images

This rule is triggered when a linked image does not exist.

Check if the image has been removed or renamed.

<a name="hc003"></a>

## HC003 - Articles must have valid front matter

Tags: front-matter

Aliases: valid-front-matter

This rule is triggered when a valid [front matter](https://jekyllrb.com/docs/front-matter/) couldn't be found.

A front matter with the `title` variable only should look exactly like this:

```
---
title: "Some article title"
---
```

[Read more about front matter here](https://jekyllrb.com/docs/front-matter/).

<a name="hc004"></a>

## HC004 - Missing front matter variables

Tags: front-matter

Aliases: front-matter-variables-required

The front matter must specify all **required variables**.

Fix it by adding the missing variable to the front matter.

Note that the error can also be triggered by a mispelling, such as

```
---
tile "Article title"
---
```

instead of

```
---
title "Article title"
---
```

<a name="hc005"></a>

## HC005 - Unrecognized front matter variables

Tags:

Aliases: front-matter-variables-unrecognized

This rule is triggered if a variable in the front matter is not allowed for in the rule configuration.

Fix it by removing the specified variable from the front matter.

Note that the error can also be triggered by a mispelling, such as

```
---
tile "Article title"
---
```

instead of

```
---
title "Article title"
---
```

<a name="hc006"></a>

## HC006 - Title length limit

Tags: line_length

Aliases: title-length-x

This rule is triggered when a title is longer than the set limit.

Rationale: Overely long titles are hard to read and display (especially in lists and other navigation).

<a name="hc007"></a>

## HC007 - Heading levels should only increment by one level at a time

Tags: headings, headers

Aliases: heading-increment-x, header-increment-x

Improves on [MD001](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md001---heading-levels-should-only-increment-by-one-level-at-a-time) by:

* Printing the offending heading for context
* Catches skipped heading levels after front matter, for example:

```markdown
---
title: "Example title"
---

### Level 3 heading
```

<a name="hc008"></a>

## HC008 - Filename should match title

Tags: filenames

Aliases: filename-match

Enforces a filename standard based on the article title.

Starting with the article title, the filename is determined by following these steps:

1. Remove all single quotes `'` and double quotes `"`
2. Convert all sequences (1 or more) of non-alphanumeric characters to a single dash `-`
3. Remove any leading or trailing dash `-`
4. Append the `.md` extension

Resolve the error by renaming the file to the expected filename.
