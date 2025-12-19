# 🚀 GitHub Copilot Customization Quick Reference

A quick overview of GitHub Copilot's customization features.

## 📚 Four Key Concepts

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

## 🎯 Quick Decision Guide

| Need | Solution | When to Use |
|------|----------|-------------|
| TypeScript always has explicit types | **Instructions** | Standards that should ALWAYS apply |
| Generate React component | **Prompt** | Repeatable task you run on-demand |
| Plan before implementing | **Custom Agent** | Multi-phase workflow with handoffs |
| Complete testing workflow | **Agent Skill** | Bundle templates + workflows |

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
- `feature-testing/SKILL.md` - Complete testing workflow with templates

---

## 🆚 Key Differences

| Feature | Instructions | Prompts | Agents | Skills |
|---------|-------------|---------|--------|--------|
| **Trigger** | Automatic | Manual | Selected | Auto-detected |
| **Scope** | All code | Specific task | Workflow phase | Complete workflow |
| **Control** | Implicit | Explicit | Controlled | Bundled |
| **Best for** | Standards | Scaffolding | Multi-phase work | Complex workflows |

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

---

## 📖 Learn More

- [VS Code Copilot Customization Docs](https://code.visualstudio.com/docs/copilot/customization/overview)
- [Awesome Copilot Examples](https://github.com/github/awesome-copilot)

---

**Complete the exercises:** Start with [Exercise 1: Instructions](exercises/01-instructions.md)
