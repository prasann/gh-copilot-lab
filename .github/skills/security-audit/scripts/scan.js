const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a file path to scan.");
  process.exit(1);
}

try {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // 1. Check for SQL Injection risks
  if (content.match(/query\s*\(\s*['"`].*\$\{.*\}['"`]\s*\)/)) {
     issues.push("❌ CRITICAL: Potential SQL Injection detected (template literal in query)");
  }

  // 2. Check for missing validation types
  if (!content.includes('interface') && !content.includes('type')) {
    issues.push("⚠️ WARNING: No type definitions found. Input validation might be weak.");
  }

  // 3. Check for dangerous functions
  const dangerous = ['eval(', 'innerHTML', 'dangerouslySetInnerHTML'];
  dangerous.forEach(term => {
    if (content.includes(term)) {
        issues.push(`❌ CRITICAL: Dangerous usage of '${term}' detected`);
    }
  });

  if (issues.length === 0) {
    console.log("✅ Security Scan Passed: No obvious vulnerabilities found.");
  } else {
    console.log(`Found ${issues.length} security issues:`);
    issues.forEach(i => console.log(i));
    console.log("\nRecommendation: Use the Security Audit skill to fix these issues.");
  }

} catch (err) {
  console.error("Error reading file:", err.message);
}
