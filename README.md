# DevDay Helper — Demo scaffold

A tiny demo to show GitHub Copilot capabilities in VS Code:

- Start from a plain-text agenda (`AGENDA.txt`).
- Use Copilot (Edit mode or Agent mode) to convert it into structured JSON (`agenda.json`).
- Render the JSON in a minimal webpage (`index.html`) using `src/agenda.js`.

How to run
1. Open this folder in VS Code.
2. Open `AGENDA.txt` and show the plain-text agenda.
3. Use Copilot (edit or agent) to convert into JSON (examples below).
4. Start a simple server and open the page:

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000/index.html in your browser
```

What's included
- `AGENDA.txt` — the human-readable agenda you'll convert.
- `agenda.json` — an example JSON representation (result of the conversion).
- `index.html` — a tiny page that fetches `agenda.json` and renders it.
- `src/agenda.js` — small JS helper that formats the agenda into HTML.

Demo flow (10–12 minutes suggested)
1. Show `AGENDA.txt` (plain text).
2. Show Edit mode: highlight text and ask Copilot to convert selection to JSON and create `agenda.json`.
3. Show Agent mode: ask Copilot agent to produce improved JSON (e.g., add presenters or durations).
4. Open `index.html` and point out how `src/agenda.js` renders the data.
5. Edit a session title in `AGENDA.txt` and ask Copilot to update `agenda.json` (demonstrates conversational follow-up / context).

Copilot prompts — Edit mode (selection -> convert)

1) Convert selection to JSON:

```
Convert the selected agenda text into a JSON array where each item has keys: title, minutes, goal. Keep minutes as a number.
```

2) Shorten titles to 3 words max:

```
Edit the selection to shorten each title to at most three words.
```

Copilot prompts — Agent mode (conversational)

1) Improve JSON with presenters and easing of missing fields:

```
Please convert the agenda into JSON and add a `presenter` field with an empty string. If a session doesn't list minutes, set minutes to 5 by default.
```

2) Add total minutes calculation and insert at top of JSON as an object `{"totalMinutes": <number>, "sessions": [...]}`:

```
Convert the agenda into a JSON object with keys `totalMinutes` and `sessions`. `sessions` is an array of session objects (title, minutes, goal). Compute totalMinutes from the sessions.
```

Presenter script (short)

- Intro (15–20s): "I'll show how Copilot helps a new dev create a tiny artifact from idea to page in minutes. We'll build a tiny 'DevDay Helper' and save the prompts into a reusable collection."
- Stage 1: Show `AGENDA.txt` and run Edit-mode prompt to convert selection to JSON.
- Stage 2: Use Agent mode to enrich the JSON (add presenters, totalMinutes).
- Stage 3: Open `index.html` and show rendered schedule. Make a small text change in `AGENDA.txt` and ask Copilot to update `agenda.json`.
- Wrap: Save prompts into a collection and explain reuse.
