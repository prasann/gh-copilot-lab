# Security Review Checklist

## 1. Input Validation
- [ ] All inputs must be typed (TypeScript)
- [ ] Strings must have length limits checked
- [ ] Emails must be validated with regex
- [ ] Numbers must have range checks

## 2. SQL / Database
- [ ] NEVER use template literals in queries: `db.query(`SELECT * FROM users WHERE id = ${id}`)`
- [ ] ALWAYS use parameterized queries: `db.query('SELECT * FROM users WHERE id = ?', [id])`

## 3. Data Exposure
- [ ] Passwords should never be logged
- [ ] API keys should be loaded from env vars, not hardcoded

## 4. XSS Prevention
- [ ] Do not use `innerHTML` or `dangerouslySetInnerHTML`
- [ ] Sanitize user input before display
