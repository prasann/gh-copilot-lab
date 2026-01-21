---
name: security-audit
description: Security expert workflow. Audits code for vulnerabilities (injection, XSS, validation) using static analysis and project-specific security rules.
---

# Security Audit Skill

This skill acts as a security gatekeeper for your code. It combines automated scanning with expert review patterns.

## When to Use
- Before committing any new features
- When reviewing legacy code
- If validaton logic seems missing

## Security Workflow

### Step 1: Automated Scan
First, run the project's security scanner script to catch low-hanging fruit.

```bash
node .github/skills/security-audit/scripts/scan.js <file-path>
```

### Step 2: Manual Review against Checklist
Analyze the code against the [Security Checklist](./rules/checklist.md).
Pay special attention to:
- **Input Validation**: Are inputs typed and sanitized?
- **Injection Risks**: Are queries parameterized?

### Step 3: Mitigation Plan
If issues are found, propose a fix that:
1.  **Stops the vulnerability** (e.g., use `?` params)
2.  **Adds Validation** (e.g., check string length)
3.  **Preserves Functionality**

## Example Fixes

### ❌ Insecure Pattern (SQL Injection)
```typescript
const query = `SELECT * FROM users WHERE email = '${email}'`; // BAD
```

### ✅ Secure Pattern
```typescript
const query = 'SELECT * FROM users WHERE email = ?'; // GOOD
const params = [email];
```

## Response Format
When reporting issues, use this format:

| Severity | Issue | Suggestion |
|----------|-------|------------|
| 🔴 High | SQL Injection | Use parameterized queries |
| 🟡 Med  | No input limit | Add `if (str.length > 500) throw...` |
