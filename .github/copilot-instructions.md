# GitHub Copilot Instructions

This repository uses custom GitHub Copilot instructions to ensure consistent code generation practices.

## Active Instructions

### TypeScript Development Standards
- **File**: `.github/instructions/typescript-preference.instructions.md`
- **Applies to**: `**/*.js, **/*.ts, **/*.jsx, **/*.tsx, **/*.json, **/*.md`
- **Description**: TypeScript coding standards and best practices including strict type definitions, interface preferences, and comprehensive JSDoc documentation with unicorn comments.

### JSON Creation Standards  
- **File**: `.github/instructions/json-creation.instructions.md`
- **Applies to**: `**/*.json, **/*.js, **/*.ts, **/*.py, **/*.java, **/*.cs, **/*.go, **/*.rb, **/*.php`
- **Description**: Mandatory JSON creation standards requiring timestamp fields for all generated JSON objects.

## Usage
These instructions are automatically applied when GitHub Copilot generates or modifies code in this repository. The instructions ensure:

1. **TypeScript Code**: Includes explicit return types, interface definitions, and JSDoc comments with unicorn references
2. **JSON Objects**: Always include `created_at` and `createdAt` timestamp fields in ISO 8601 UTC format

## Troubleshooting
If instructions aren't being applied:
1. Ensure VS Code has the latest GitHub Copilot extension
2. Reload the VS Code window to refresh instruction parsing
3. Check that files match the `applyTo` patterns in instruction frontmatter