# Exercise 5: Chat Modes - Custom Copilot Behaviors

## 🎯 Objective
Learn how Custom Chat Modes define specialized Copilot behaviors — different from Custom Agents, which are personas with handoffs.

## 📝 What You'll Do
Explore a custom chat mode and understand how it differs from agents.

---

## Step 1: Understand the Difference

Before diving in, let's clarify two features that look similar but serve different purposes:

| Feature | Custom Agents (Exercise 3) | Custom Chat Modes |
|---------|---------------------------|-------------------|
| **Location** | `.github/agents/*.agent.md` | `.chat/modes/*.chatmode.md` |
| **What it is** | A named persona (e.g., @Planner) | A behavior preset for Copilot chat |
| **Has handoffs?** | ✅ Yes — buttons to chain agents | ❌ No — standalone behavior |
| **Tool restrictions?** | ✅ Per-agent tools list | ✅ Per-mode tools list |
| **How to activate** | Select `@AgentName` in chat | Select from mode dropdown in chat |
| **Best for** | Multi-phase workflows | Focused single-purpose behaviors |

**Think of it this way:** Agents are *characters* in a play. Chat Modes are *stage directions* for how the play should be performed.

## Step 2: Explore the Chat Mode

Open [`.chat/modes/docs-writer.chatmode.md`](../.chat/modes/docs-writer.chatmode.md)

Read the mode definition. Notice:
- `tools` in frontmatter — limits what Copilot can do
- Rules that restrict editing to `.md` files only
- Tone and style guidelines

## Step 3: Activate the Chat Mode

1. Open Copilot Chat (`Cmd+Shift+I`)
2. Look for the **mode dropdown** at the top of the chat panel (where it might say "Agent" or "Ask")
3. Select **"Documentation Writer"** from the list
4. Try a prompt:

```
Write a getting started section for a Node.js API project
```

**Notice:**
- Copilot follows the documentation-specific rules
- It won't try to create code files — only markdown
- The tone matches the mode's instructions

## Step 4: Compare with an Agent

Now switch to the **@Planner** agent (from Exercise 3) and ask the same question:

```
Write a getting started section for a Node.js API project
```

**Notice the difference:**
- @Planner approaches it as a planning task and might refuse (it's read-only!)
- The Docs Writer mode just writes documentation — no persona, no handoffs
- Different tool, different purpose

---

## 🔍 When to Use Which

| Need | Use |
|------|-----|
| Multi-step workflow with handoffs | **Custom Agent** |
| Focused behavior for a type of task | **Chat Mode** |
| Always-on coding standards | **Instructions** |
| Repeatable task template | **Prompt** |

---

## ✅ Success Criteria

You understand:
- ✅ Chat Modes control built-in chat behavior
- ✅ They're different from Custom Agents (no handoffs, no persona)
- ✅ Modes restrict tools and set behavioral rules
- ✅ They're best for focused, single-purpose tasks

## 💡 When to Use

Use Chat Modes for:
- Documentation-only writing
- Frontend-only or backend-only coding
- Review-focused sessions
- Teaching or learning modes (e.g., "Explain everything simply")

---

**Previous:** [← Exercise 4: MCP Servers](04-mcp-servers.md) | **Next:** [Exercise 6: Everyday Copilot →](06-everyday-copilot.md)
