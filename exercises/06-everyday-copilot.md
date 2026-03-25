# Exercise 6: Everyday Copilot - Your Daily Workflow

## 🎯 Objective
Learn the Copilot features you'll use every single day — inline completions, Next Edit Suggestions, context references, and vision.

## 📝 What You'll Do
Experience the core productivity features that make Copilot useful beyond chat.

---

## Part A: Inline Completions (Ghost Text)

The original Copilot experience — grey text suggestions as you type.

### Step 1: Start Typing Code

Create a new file called `demo.ts` and start typing:

```typescript
function calculateDiscount(price: number, percentage: number)
```

**Stop typing after the closing parenthesis.** Wait a moment.

**Look for:**
- Grey "ghost text" appears suggesting the return type and function body
- Press **Tab** to accept the suggestion
- Press **Esc** to dismiss it

### Step 2: See Instructions in Action

Now start typing a new function:

```typescript
function getUserAge(
```

**Look for:**
- The inline suggestion should include a 🦄 JSDoc comment (from Exercise 1's instructions!)
- Explicit return type annotation
- Instructions apply to inline completions too — not just chat

### Step 3: Cycle Through Suggestions

If you don't like the first suggestion:
- **Option+]** (Mac) / **Alt+]** (Windows) — next suggestion
- **Option+[** (Mac) / **Alt+[** (Windows) — previous suggestion

---

## Part B: Next Edit Suggestions (NES)

Copilot predicts *where* your next edit should be and suggests it.

### Step 4: Trigger NES

In `demo.ts`, write a function with a typo in multiple places:

```typescript
function getUsrName(usrId: string): string {
  const usr = findUser(usrId);
  return usr.name;
}
```

Now fix `usr` to `user` on the **first line only**:

```typescript
function getUserName(userId: string): string {
```

**Look for:**
- A dimmed suggestion appears on the next line, offering to rename `usr` → `user` there too
- Press **Tab** to accept and jump to the next suggestion
- Keep pressing **Tab** — Copilot walks you through all the related edits

**Key Insight:** NES is the "tab-tab-tab" workflow. Make one change, and Copilot ripples it through.

---

## Part C: Context References

Control what Copilot knows about when answering questions.

### Step 5: Use Context References in Chat

Open Copilot Chat and try these prompts:

**Without context:**
```
What testing framework does this project use?
```

**With context:**
```
#codebase What testing framework does this project use?
```

**Notice:** `#codebase` tells Copilot to search the entire project for the answer, not just guess.

### Step 6: Reference Specific Files

Try targeting specific files:

```
Explain what #file:.github/agents/planner.agent.md does
```

```
What rules are defined in #file:.github/instructions/typescript-preference.instructions.md ?
```

### Common Context References

| Reference | What It Does |
|-----------|-------------|
| `#file:path` | Include a specific file as context |
| `#selection` | Include your currently selected code |
| `#codebase` | Search the entire project |
| `#terminalLastCommand` | Include the last terminal output |
| `#changes` | Include uncommitted changes |

---

## Part D: Vision (Image Understanding)

Copilot can interpret images — screenshots, wireframes, diagrams.

### Step 7: Try Image-to-Code

1. Take a screenshot of any simple UI (a form, a button, a card)
2. Open Copilot Chat
3. **Drag and drop** the image into the chat input
4. Type:

```
Generate the HTML and CSS for this UI
```

**Notice:**
- Copilot analyzes the visual layout
- It generates code that matches the screenshot
- Works with wireframes, mockups, and even whiteboard photos

> **Tip:** This also works with architecture diagrams, flowcharts, and error screenshots.

---

## 🧹 Clean Up

Delete `demo.ts` when you're done — it was just for practice.

---

## ✅ Success Criteria

You understand:
- ✅ Inline completions suggest code as you type (Tab to accept)
- ✅ Instructions influence inline suggestions, not just chat
- ✅ NES predicts your next edit location (tab-tab-tab)
- ✅ Context references (`#file`, `#codebase`) improve answer quality
- ✅ Vision lets Copilot interpret images and generate code

## 💡 Daily Workflow Tips

| Situation | Feature to Use |
|-----------|---------------|
| Writing new code | Inline completions (Tab) |
| Renaming or refactoring | Next Edit Suggestions (Tab-Tab-Tab) |
| Asking about the project | `#codebase` in chat |
| Debugging a specific file | `#file:path` in chat |
| Reproducing a UI from a design | Vision (drag image into chat) |

---

**Previous:** [← Exercise 5: Chat Modes](05-chat-modes.md) | **Next:** [Exercise 7: Tips & Tricks →](07-tips-and-tricks.md)
