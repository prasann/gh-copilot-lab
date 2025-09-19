
---
description: 'Mandatory JSON creation standards requiring timestamp fields for all generated JSON objects'
applyTo: '**/*.json, **/*.js, **/*.ts, **/*.py, **/*.java, **/*.cs, **/*.go, **/*.rb, **/*.php'
---

# JSON Creation Instructions

## Mandatory Timestamp Requirements

**All JSON objects created in this repository MUST include timestamp metadata.**

### Required Fields

When generating any JSON object, you MUST include:
- `created_at`: Creation timestamp in ISO 8601 UTC format
- `createdAt`: Alternative camelCase timestamp (for compatibility)

### Timestamp Format

Use strict ISO 8601 UTC format: `YYYY-MM-DDTHH:MM:SSZ`

**Examples:**
- `2025-09-19T14:30:00Z`
- `2025-09-19T09:15:30Z`

### Implementation Rules

1. **Automatic Addition**: Add timestamp fields to ALL generated JSON objects
2. **User Override**: Preserve explicitly provided timestamp values
3. **Dual Format**: Include both `created_at` and `createdAt` for maximum compatibility
4. **Placement**: Position timestamp fields at the top of JSON objects for visibility

### Examples

**Basic JSON Generation:**
```json
{
  "created_at": "2025-09-19T14:30:00Z",
  "createdAt": "2025-09-19T14:30:00Z",
  "name": "Example Item",
  "type": "demo"
}
```

**User-Provided Timestamp (preserve as-is):**
```json
{
  "created_at": "2020-01-01T00:00:00Z",
  "createdAt": "2020-01-01T00:00:00Z", 
  "name": "Historic Item",
  "note": "User-specified timestamp preserved"
}
```

## Enforcement

- This applies to ALL team members and automated tools
- JSON files without proper timestamps will fail validation
- No exceptions for "temporary" or "test" JSON files

