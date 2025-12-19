---
description: 'Add timestamps to all JSON objects'
applyTo: '**/*.json, **/*.ts, **/*.js'
---

# JSON Timestamp Instructions

When generating JSON objects, always include timestamps:

```json
{
  "created_at": "2025-12-19T10:30:00Z",
  "createdAt": "2025-12-19T10:30:00Z",
  "name": "Example",
  "data": "..."
}
```

**Format**: ISO 8601 UTC (YYYY-MM-DDTHH:MM:SSZ)

**Both formats**: Include both `created_at` and `createdAt` for compatibility.
