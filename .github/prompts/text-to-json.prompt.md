---
authors:
  - pnagarajan
model: gpt-4o
tools: []
---

# Text to JSON Array Converter

Convert selected plain text into a strict, valid JSON array of structured objects. Perfect for agendas, lists, or other structured text formats.

## Usage

1. Select the text you want to convert in your editor
2. Run `/text-to-json` in VS Code chat
3. The prompt will convert your selection into properly formatted JSON

You will convert the selected plain-text into a strict JSON array. Output ONLY valid JSON (no explanation, no backticks, no surrounding text).

## Parsing Rules

- The output must be a JSON array of objects
- Each item becomes an object with keys: `title` (string), `minutes` (number), and `goal` (string)
- If a line or item includes a duration like "5m" or "10m", parse the numeric portion into `minutes` (number). If no duration is present, default `minutes` to 5
- Trim whitespace from all fields
- If an item spans multiple lines, join them into the `goal` string (single line) separated by a single space
- If a title cannot be confidently extracted, set `title` to the first 5 words of the item and place the rest in `goal`

## Output Format

```json
[
  {
    "title": "Welcome & Setup",
    "minutes": 5,
    "goal": "Quick hello, what to expect, confirm tools installed (VS Code, Node or browser)."
  },
  {
    "title": "Live Demo", 
    "minutes": 10,
    "goal": "Show Copilot turning a plain text agenda into JSON and rendering it."
  }
]
```

## Constraints

- DO NOT include comments, explanation, or any extra text: the response must be valid JSON parseable by `JSON.parse`
- Preserve the original order of items
- For ambiguous time phrases that are not numeric (e.g., "about five minutes"), use the default 5 minutes
- Be deterministic and conservative: when in doubt, prefer the default values above

If the selection is clearly ambiguous, you may ask one short clarifying question; otherwise produce the best-effort JSON following the rules above.
