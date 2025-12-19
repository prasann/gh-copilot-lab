# 🎯 GitHub Copilot Customization Labs

## Overview

Learn how to customize GitHub Copilot from solo productivity to team workflows.

**What You'll Learn**: Instructions → Prompts → Custom Agents

**Time**: 30-40 minutes

**Prerequisites**: VS Code with GitHub Copilot installed

---

## 🧪 Lab 1: Instructions (10 min)

**Concept**: Instructions automatically enforce standards on ALL code generation.

### Exercise: See It In Action

**Step 1**: Open chat (Cmd+I), type:
```
Create a function to calculate user age
```

**✅ Look for**:
- 🦄 unicorn comment in JSDoc
- Explicit return type (`: number`)

**Step 2**: Now type:
```
Create a JSON object for a user
```

**✅ Look for**:
- `created_at` and `createdAt` timestamps (you didn't ask for them!)

**Step 3**: Open `.github/instructions/` folder and explore the files.

**💡 The Secret**: Instructions apply automatically to EVERY generation. You set them once, they work forever.

**Try**: Generate any TypeScript function or JSON. Notice the patterns repeat!

**When to use**: Team standards that should ALWAYS apply.

---

## 🧪 Lab 2: Prompts (10 min)

**Concept**: Prompts are templates you run manually for specific tasks.

### Exercise: Use a Prompt

**Step 1**: Open `.github/prompts/create-component.prompt.md` - read it

**Step 2**: In chat, try:
```
Create a UserCard component with name and email props
```

**✅ Look for**: Complete React component with TypeScript types

**Step 3**: Explore `.github/prompts/generate-tests.prompt.md`

**💡 The Key**: Prompts are **explicit** (you run them). Instructions are **implicit** (always on).

**Try Creating One**:
1. Create `.github/prompts/my-prompt.prompt.md`
2. Add frontmatter: `description: Your task description`
3. Write what you want Copilot to do
4. Test it!

**When to use**: Repeatable tasks like scaffolding, conversions, documentation.

---

---

## 🧪 Lab 3: Custom Agents (15 min)

**Concept**: Specialized agents with different capabilities for different workflow phases.

### Exercise: The Full Workflow

**Step 1**: Switch to @Planner, ask:
```
Plan adding a contact form feature
```

**✅ Notice**: Planner generates a plan but doesn't edit files (read-only!)

**Step 2**: Click the "📋 Create Tasks" button

**✅ Notice**: @Tasker breaks the plan into phased tasks

**Step 3**: Click the "🚀 Start Implementation" button

**✅ Notice**: @Implementer starts building (full power + instructions still apply!)

**💡 The Magic**:
- **@Planner**: Read-only (can't accidentally edit)
- **@Tasker**: Creates structured tasks
- **@Implementer**: Full power but follows instructions
- **Handoffs**: You approve each phase

**Try**: Build any small feature using this flow. Notice the guardrails!

**Explore**: Open `.github/agents/*.agent.md` files to see how agents are configured.

**When to use**: Multi-step workflows where you want control and separation of concerns.

---

## � Summary

| Feature | When | Purpose | Example |
|---------|------|---------|---------|
| **Instructions** | Always | Standards | TypeScript rules, JSON timestamps |
| **Prompts** | Manual | Tasks | Component scaffolding, tests |
| **Agents** | Selected | Workflows | Plan → Task → Implement |

---

## 🏆 Final Challenge

Build a complete feature using all three:

1. **@Planner**: `Plan a simple todo list feature`
2. Click handoff → **@Tasker** breaks it into tasks
3. Click handoff → **@Implementer** builds it
4. Notice: Instructions still apply (🦄 comments!)

**✅ Success**: You used the full workflow and got working code!

---

## 🔧 Troubleshooting

**Instructions not working?** → Reload VS Code window

**Agents not showing?** → Check `.github/agents/*.agent.md` files exist

**Handoffs not working?** → Check agent names match exactly (case-sensitive)

---

## 📚 Learn More

- [VS Code Copilot Docs](https://code.visualstudio.com/docs/copilot/customization/overview)
- [Awesome Copilot](https://github.com/github/awesome-copilot)

---

## ✅ You're Done!

You now know how to:
- ✅ Auto-enforce standards with Instructions
- ✅ Automate tasks with Prompts
- ✅ Build controlled workflows with Agents

**Start small**: One instruction file, one prompt, try the agents!

Happy coding! 🚀
