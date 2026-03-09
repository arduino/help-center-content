# Markdown Linter

This directory contains the custom markdown linter used for the Arduino Help Center repository.

The linter is built on top of [`markdownlint`](https://github.com/DavidAnson/markdownlint).

## Installation

To install the dependencies, navigate to this directory and run:

```bash
npm install
```

## Usage

You can run the linter using the provided npm script:

```bash
npm run lint
```

Alternatively, you can run the script directly with Node.js:

```bash
node markdownlint.js
```

The linter will scan all `.md` files in the `content/` directory (excluding `content/Custom/Hubs/**`) and report any violations.

## Configuration

The linter is configured using the following files:

- **`markdownlint.js`**: The main execution script that sets up the linting process.
- **`markdownlint.yml`**: Contains the configuration for both standard and custom rules (e.g., enabling/disabling rules, setting limits).
- **`markdownlint/rules/`**: Contains the implementation of custom "HC" (Help Center) rules.

## Rules

The linter enforces two sets of rules:

1.  **Standard Rules (MDxxx)**: General Markdown best practices. Documentation for these rules can be found [here](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md).
2.  **Custom Rules (HCxxx)**: Arduino-specific rules for headings, front matter, image paths, and filenames. A detailed description of these rules can be found in [markdownlint/Rules.md](./markdownlint/Rules.md).
