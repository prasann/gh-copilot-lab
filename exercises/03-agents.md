# Exercise 3: Custom Agents - Workflow Orchestration

## 🎯 Objective
Learn how to use Custom Agents with specialized capabilities for controlled workflows.

## 📝 What You'll Do
Experience a complete Plan → Task → Implement workflow with agent handoffs.

---

## Step 1: Use the Planner Agent

In VS Code chat, switch to **@Planner** (use the agent dropdown).

Request a plan:
```
Plan adding a contact form feature with validation
```

**Notice:**
- Planner researches and creates a comprehensive plan
- It does NOT create or edit files (read-only!)
- You see a "📋 Create Tasks" button

## Step 2: Break Into Tasks

Click the **"📋 Create Tasks"** handoff button.

**Notice:**
- @Tasker automatically takes over
- Tasks are organized in phases
- Each task has clear acceptance criteria
- You see a "🚀 Start Implementation" button

## Step 3: Implement

Click the **"🚀 Start Implementation"** handoff button.

**Notice:**
- @Implementer starts building the feature
- Files are created/edited
- Instructions still apply (🦄 comments, timestamps!)
- Implementation is incremental

---

## 🔍 The Workflow Pattern

```
@Planner (Read-only)
    ↓ Research & Plan
    ↓ [📋 Create Tasks]
    
@Tasker (Limited)
    ↓ Break into phases
    ↓ [🚀 Start Implementation]
    
@Implementer (Full power)
    ↓ Build feature
    ✅ Complete
```

---

## Step 4: Explore Agent Configuration

Open these files to see how agents are configured:
- [`.github/agents/planner.agent.md`](../.github/agents/planner.agent.md)
- [`.github/agents/tasker.agent.md`](../.github/agents/tasker.agent.md)
- [`.github/agents/implementer.agent.md`](../.github/agents/implementer.agent.md)

**Notice:**
- Different `tools` for each agent
- Handoff buttons defined in frontmatter
- Specialized instructions per role

---

## ✅ Success Criteria

You understand:
- ✅ Agents have specialized tools/capabilities
- ✅ Handoffs create controlled phase transitions
- ✅ Read-only vs full-access creates guardrails
- ✅ You review/approve at each checkpoint

## 💡 When to Use

Use Custom Agents for:
- Multi-phase workflows
- When you need guardrails (prevent accidental edits)
- Team collaboration patterns
- Complex feature development

---

## � Bonus: Agent Skills

Agents can also use **Agent Skills** - complete workflows bundled with resources.

### What Are Skills?

Skills are folders containing:
- `SKILL.md` file with instructions
- Scripts, templates, or other resources
- Located in `.github/skills/`

### Key Difference

**Skills are auto-detected** - Copilot decides when to use them based on your prompt (you don't manually select them).

### Try It

Open [`.github/skills/feature-testing/SKILL.md`](../.github/skills/feature-testing/SKILL.md)

Notice:
- It includes instructions for testing workflows
- The `templates/` folder has reusable test templates
- Copilot will use this automatically when you ask about testing

### When to Create Skills

Create skills for:
- Complex workflows needing multiple resources
- Workflows you want portable across projects
- Specialized tasks that need context (scripts, examples, templates)

---

## 🎓 Complete!

You've learned GitHub Copilot customization:

1. **Instructions** → Automatic standards
2. **Prompts** → On-demand tasks
3. **Agents** → Workflow orchestration
4. **Skills** → Auto-detected workflows (bonus!)

**Reference:** See [QUICK_REFERENCE.md](../QUICK_REFERENCE.md) for a complete comparison.

---

**Previous:** [← Exercise 2: Prompts](02-prompts.md)
