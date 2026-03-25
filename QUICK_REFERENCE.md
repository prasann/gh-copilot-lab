# 🚀 GitHub Copilot Quick Reference

A quick overview of all GitHub Copilot features covered in this lab.

## 📚 Customization Features

### 1️⃣ Instructions
**Location**: `.github/instructions/*.instructions.md`

**How it works**: Rules apply automatically to ALL code generation

**Use for**: 
- Coding standards (TypeScript types, naming conventions)
- Best practices that should always apply
- Consistent patterns across your codebase

**Example**: Enforce explicit return types, add timestamps to JSON

---

### 2️⃣ Prompts
**Location**: `.github/prompts/*.prompt.md`

**How it works**: Reusable templates you run manually when needed

**Use for**:
- Component scaffolding
- Test generation
- Data transformations
- Repetitive tasks

**Example**: Generate React component with TypeScript

---

### 3️⃣ Custom Agents
**Location**: `.github/agents/*.agent.md`

**How it works**: Specialized assistants with specific tools and capabilities

**Use for**:
- Multi-phase workflows
- Role separation (planning vs implementing)
- Controlled access (read-only vs full editing)
- Team collaboration patterns

**Example**: @Planner (read-only) → @Tasker → @Implementer (full access)

---

### 4️⃣ Agent Skills
**Location**: `.github/skills/*/SKILL.md`

**How it works**: Complete workflows with multiple resources bundled together

**Use for**:
- Complex workflows needing templates/scripts
- Portable workflows across projects
- Sharing capabilities with community

**Example**: Complete testing workflow with templates

---

## 🔌 Extensibility Features

### 5️⃣ MCP Servers
**Location**: `.vscode/mcp.json`

**How it works**: Connect Copilot to external tools and APIs via the Model Context Protocol

**Use for**:
- Interacting with GitHub (issues, PRs, commits)
- Querying databases during development
- Browser automation (Playwright)
- Any external API integration

**Example**: Ask Copilot to "list open issues in this repo" — it calls the GitHub API through MCP

---

### 6️⃣ Custom Chat Modes
**Location**: `.chat/modes/*.chatmode.md`

**How it works**: Define specialized behavior presets for the built-in Copilot chat

**Use for**:
- Restricting Copilot to specific file types (docs-only, frontend-only)
- Focused review or writing sessions
- Teaching or learning modes

**Example**: A "Docs Writer" mode that only edits markdown files

**Key difference from Agents**: Chat Modes control built-in chat behavior. Agents are named personas with handoffs.

---

## ⚡ Productivity Features

### 7️⃣ Inline Completions (Ghost Text)
**How it works**: Grey text suggestions appear as you type — press Tab to accept

**Key insight**: Instructions (Exercise 1) influence inline completions too, not just chat

---

### 8️⃣ Next Edit Suggestions (NES)
**How it works**: After making one edit, Copilot predicts where your next edit should be

**Use for**: Renaming, refactoring, applying patterns across multiple locations

**Workflow**: Make one change → Tab → Tab → Tab through suggested edits

---

### 9️⃣ Vision (Image Understanding)
**How it works**: Drag images into Copilot chat — screenshots, wireframes, diagrams

**Use for**: Generating code from mockups, interpreting error screenshots, understanding diagrams

---

### 🔟 Context References
**How it works**: Use `#file`, `#codebase`, `#selection` in chat to control what Copilot knows

| Reference | What It Does |
|-----------|-------------|
| `#file:path` | Include a specific file |
| `#selection` | Include selected code |
| `#codebase` | Search entire project |
| `#changes` | Include uncommitted changes |

---

## 🎯 Quick Decision Guide

| Need | Solution | When to Use |
|------|----------|-------------|
| TypeScript always has explicit types | **Instructions** | Standards that should ALWAYS apply |
| Generate React component | **Prompt** | Repeatable task you run on-demand |
| Plan before implementing | **Custom Agent** | Multi-phase workflow with handoffs |
| Complete testing workflow | **Agent Skill** | Bundle templates + workflows |
| Query GitHub issues from chat | **MCP Server** | Connect to external tools/APIs |
| Docs-only editing mode | **Chat Mode** | Focused single-purpose behavior |
| Rename variable everywhere | **NES** | Ripple edits with Tab-Tab-Tab |
| Build UI from a screenshot | **Vision** | Image-to-code generation |

---

## 🔄 Agent Workflow Pattern

Custom agents can be chained together with handoffs:

```
@Planner (read-only)
    ↓ Research & Plan
    ↓ [📋 Create Tasks]
    
@Tasker
    ↓ Break into Phases
    ↓ [🚀 Start Implementation]
    
@Implementer (full access)
    ↓ Build Feature
    ↓ [🔍 Review Code]
    
@Reviewer (optional)
    ↓ Quality Check
```

**Key benefit**: Each agent has appropriate access level - Planner can't accidentally edit code!

---

## 📁 What's in This Repo

### Instructions (`.github/instructions/`)
- `typescript-preference.instructions.md` - TypeScript standards + 🦄 comments
- `json-creation.instructions.md` - Auto-add timestamps to JSON

### Prompts (`.github/prompts/`)
- `create-component.prompt.md` - Generate React components
- `generate-tests.prompt.md` - Generate test suites
- `text-to-json.prompt.md` - Convert text to JSON

### Agents (`.github/agents/`)
- `planner.agent.md` - Read-only planning (no file edits)
- `tasker.agent.md` - Task breakdown
- `implementer.agent.md` - Full implementation access
- `reviewer.agent.md` - Code review
- `gilfoyle.agent.md` - Sarcastic reviewer (bonus!)

### Skills (`.github/skills/`)
- `security-audit/SKILL.md` - Security audit workflow with scripts and rules

### MCP Servers (`.vscode/`)
- `mcp.json` - GitHub MCP server configuration

### Chat Modes (`.chat/modes/`)
- `docs-writer.chatmode.md` - Documentation-only writing mode

---

## 🆚 Key Differences

| Feature | Instructions | Prompts | Agents | Skills | MCP | Chat Modes |
|---------|-------------|---------|--------|--------|-----|------------|
| **Trigger** | Automatic | Manual | Selected | Auto-detected | Always on | Selected |
| **Scope** | All code | Specific task | Workflow phase | Complete workflow | External tools | Chat behavior |
| **Control** | Implicit | Explicit | Controlled | Bundled | Configured | Preset |
| **Best for** | Standards | Scaffolding | Multi-phase work | Complex workflows | Tool access | Focused tasks |

---

## 🚀 Getting Started

**Start Simple:**
1. Add one `.instructions.md` file for your coding standards
2. Create a `.prompt.md` for a common task
3. Try the agent workflow for planning

**Scale Up:**
1. Add more instructions as needed
2. Build prompt library for your team
3. Create custom agents for your workflow
4. Package complex workflows as skills
5. Connect external tools with MCP servers
6. Define chat modes for focused tasks

---

## 📖 Learn More

- [VS Code Copilot Customization Docs](https://code.visualstudio.com/docs/copilot/customization/overview)
- [Awesome Copilot Examples](https://github.com/github/awesome-copilot)

---

**Complete the exercises:** Start with [Exercise 1: Instructions](exercises/01-instructions.md)
