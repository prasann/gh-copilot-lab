# Exercise 7: Tips & Tricks - Power User Features

## 🎯 Objective
Discover additional Copilot features that round out your toolkit — code review, model selection, terminal integration, and more.

## 📝 What You'll Do
Quick-fire demos of features that make you faster every day.

---

## Trick 1: Built-in Code Review

Copilot can review your code directly in VS Code — separate from the @Reviewer agent in Exercise 3.

### Try It

1. Make some changes to any file (or create a file with intentional issues)
2. Open the **Source Control** sidebar (`Cmd+Shift+G`)
3. Click the **✨ sparkle icon** next to "Changes" → **"Review with Copilot"**
4. Copilot adds inline comments with suggestions directly in your files

**How it's different from @Reviewer:**

| Feature | @Reviewer Agent (Exercise 3) | Built-in Code Review |
|---------|------------------------------|---------------------|
| Trigger | Select `@Reviewer` in chat | Sparkle icon in Source Control |
| Output | Structured report in chat | Inline comments in files |
| Handoffs | Can hand off to @Implementer | Standalone |
| Customization | Your custom review rules | Uses `copilot-instructions.md` |

> Both are useful — @Reviewer for thorough reviews with handoffs, built-in review for quick checks.

---

## Trick 2: Multi-Model Selection

Copilot isn't locked to one AI model. You can switch models per conversation.

### Try It

1. Open Copilot Chat
2. Look for the **model name** in the chat header (e.g., "GPT-4o")
3. Click it to see available models:
   - **GPT-4o** — Fast, balanced
   - **Claude Sonnet** — Strong reasoning
   - **Gemini Flash** — Google's model
   - **o1/o3** — Advanced reasoning (may be slower)
4. Try the same prompt with two different models and compare results

```
Explain the agent handoff pattern in this repository
```

**When to switch models:**
- Stuck on a complex problem? Try a reasoning model (o1/o3)
- Need fast iteration? Use GPT-4o or Gemini Flash
- Want detailed explanations? Try Claude

---

## Trick 3: Ask / Edit / Agent Modes

The chat panel has three built-in modes — these are different from your Custom Agents.

### Try It

Look at the **mode toggle** at the top of Copilot Chat:

| Mode | What It Does | When to Use |
|------|-------------|-------------|
| **Ask** | Answers questions, no file changes | Learning, exploring, debugging |
| **Edit** | Makes targeted edits to specific files | Quick focused changes |
| **Agent** | Autonomous multi-step work, runs commands | Building features, complex tasks |

Try the same request in each mode:

```
Add a dark mode toggle to an HTML page
```

- **Ask** → Explains how to do it with code snippets
- **Edit** → Makes changes to a file you specify
- **Agent** → Creates files, writes CSS, runs commands, iterates until done

---

## Trick 4: Copilot in the Terminal

Copilot works inside the VS Code terminal too.

### Try It

1. Open the VS Code terminal
2. Press **Cmd+I** (Mac) / **Ctrl+I** (Windows) in the terminal
3. Type a natural language request:

```
Find all files containing the word "security" in this project
```

```
Show the git log for the last 5 commits in one line each
```

Copilot suggests the terminal command — press Enter to run it.

---

## Trick 5: Commit Message Generation

Never write a commit message from scratch again.

### Try It

1. Make some changes to any file
2. Stage the changes (`git add`)
3. Open the **Source Control** sidebar
4. Click the **✨ sparkle icon** in the commit message input
5. Copilot generates a message based on your staged diff

> **Tip:** The generated message follows conventional commit patterns. You can edit it before committing.

---

## Trick 6: `@workspace` Questions

Ask Copilot about the entire repository without specifying files.

### Try It

In Copilot Chat, try:

```
@workspace What customization features does this repository demonstrate?
```

```
@workspace How are the agents connected to each other?
```

```
@workspace Where is the security scanning logic?
```

Copilot searches across all files to answer — great for onboarding to a new codebase.

---

## ✅ Success Criteria

You've seen:
- ✅ Built-in code review with inline comments
- ✅ Model switching for different strengths
- ✅ Ask / Edit / Agent modes and when to use each
- ✅ Terminal integration for command suggestions
- ✅ Automatic commit message generation
- ✅ `@workspace` for codebase-wide questions

---

## 🎓 Complete!

You've now explored the full range of GitHub Copilot in VS Code:

| Exercise | Feature | Type |
|----------|---------|------|
| 1 | Instructions | Customization |
| 2 | Prompts | Customization |
| 3 | Custom Agents & Skills | Customization |
| 4 | MCP Servers | Extensibility |
| 5 | Chat Modes | Customization |
| 6 | Everyday Copilot | Productivity |
| **7** | **Tips & Tricks** | **Power User** |

**Reference:** See [QUICK_REFERENCE.md](../QUICK_REFERENCE.md) for a complete comparison of all features.

---

**Previous:** [← Exercise 6: Everyday Copilot](06-everyday-copilot.md)
