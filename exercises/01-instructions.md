# Exercise 1: Instructions - Automatic Code Standards

## 🎯 Objective
Learn how Instructions automatically enforce coding standards on every code generation.

## 📝 What You'll Do
Experience how Copilot applies rules automatically without you asking.

---

## Step 1: Generate TypeScript Code

Open VS Code chat (Cmd+I) and type:
```
Create a function to calculate user age from birthdate
```

**Look for:**
- 🦄 unicorn comment in JSDoc
- Explicit return type (`: number`)
- Complete JSDoc documentation

## Step 2: Generate JSON

In VS Code chat, type:
```
Create a JSON object for a product
```

**Look for:**
- `created_at` and `createdAt` timestamp fields
- ISO 8601 UTC format
- You never asked for timestamps!

## Step 3: Discover the Secret

Open these files in your editor:
- [`.github/instructions/typescript-preference.instructions.md`](../.github/instructions/typescript-preference.instructions.md)
- [`.github/instructions/json-creation.instructions.md`](../.github/instructions/json-creation.instructions.md)

**Key Insight:** These files define rules that apply to EVERY code generation automatically.

---

## ✅ Success Criteria

You understand:
- ✅ Instructions work automatically (implicit)
- ✅ They enforce team standards consistently
- ✅ They apply to all matching file patterns

## 💡 When to Use

Use Instructions for:
- Team coding standards
- Language-specific conventions
- Patterns that should ALWAYS apply

---

**Next:** [Exercise 2: Prompts →](02-prompts.md)
