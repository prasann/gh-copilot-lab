# DevDay Helper — Copilot Prompts

Copy-paste these prompts into GitHub Copilot (Chat or Edit modes) during the demo.

## Edit mode (selection -> edit)

1) Convert selection to JSON

```
Convert the selected agenda text into a JSON array where each item has keys: title, minutes, goal. Keep minutes as a number.
```

2) Shorten titles to 3 words max

```
Edit the selection to shorten each title to at most three words.
```

3) Add default minutes

```
If a session does not list minutes, insert "— 5m" after the title in the selection.
```

## Agent mode (conversational)

1) Enrich JSON with presenters

```
Please convert the agenda into JSON and add a `presenter` field with an empty string. If a session doesn't list minutes, set minutes to 5 by default.
```

2) Add total minutes at top

```
Convert the agenda into a JSON object with keys `totalMinutes` and `sessions`. `sessions` is an array of session objects (title, minutes, goal). Compute totalMinutes from the sessions.
```

3) Update JSON after a text change

```
I changed the session title in the text to "Welcome & Tools". Update `agenda.json` so that the corresponding session uses the new title. Keep other fields unchanged.
```
