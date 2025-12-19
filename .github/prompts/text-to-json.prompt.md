---
description: Convert text to JSON array
---

# Text to JSON Converter

Convert selected text into a JSON array.

## Instructions

1. Select text in the editor
2. Run this prompt
3. Get structured JSON output

## Rules

- Parse each line/item as an object
- Extract fields: `title`, `minutes`, `goal`
- Default `minutes` to 5 if not specified
- Output only valid JSON (no explanations)

## Example

**Input:**
```
Setup (5m) - Install tools
Demo (10m) - Show features
```

**Output:**
```json
[
  {
    "title": "Setup",
    "minutes": 5,
    "goal": "Install tools"
  },
  {
    "title": "Demo",
    "minutes": 10,
    "goal": "Show features"
  }
]
```
