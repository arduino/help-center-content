# Rules

This document contains a description of all rules, what they are checking for,
as well as examples of documents that break the rule and corrected
versions of the examples. Any rule whose heading is ~~struck through~~ is
deprecated, but still provided for backward-compatibility.

<a name="hc001"></a>

## MD001 - Heading levels should only increment by one level at a time

Tags: headings, headers

Aliases: heading-increment, header-increment

This rule is triggered when you skip heading levels in a markdown document, for
example:

```markdown
# Heading 1

### Heading 3

We skipped out a 2nd level heading in this document
```

When using multiple heading levels, nested headings should increase by only one
level at a time:

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

## Another Heading 2

### Another Heading 3
```

Rationale: Headings represent the structure of a document and can be confusing
when skipped - especially for accessibility scenarios. More information:
<https://www.w3.org/WAI/tutorials/page-structure/headings/>.
