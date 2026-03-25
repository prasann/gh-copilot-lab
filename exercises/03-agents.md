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
Plan adding a contact form feature with validation. Use HTML, JS and CSS only. Create it in `src` folder. Super simple app, but it should be production ready.
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

## Step 4: Use a Skill for Security Audit

The feature works, but is it safe? This workspace includes a **"security-audit" Skill** that functions as a security gatekeeper.

**The Power of Skills:**
Skills aren't just instructions—they can bundle **scripts, rules, and checklists**. This allows Copilot to run actual tools or follow strict compliance docs.

### 1. Create a Vulnerable File
Create a new file `src/user-service.ts` with this insecure code:
```typescript
/**
 * User data retrieval service
 */
// @ts-ignore
const db = require('./db');

export function getUser(id: any) {
    // ⚠️ Vulnerability: Direct string interpolation in SQL
    const query = `SELECT * FROM users WHERE id = '${id}'`;
    console.log("Executing:", query);
    return db.execute(query);
}
```

### 2. Trigger the Audit w/ Script
Ask Copilot in the Chat view:
```
Audit src/user-service.ts using the security skill
```

**Notice:**
- Copilot detects the `security-audit` skill.
- It accesses the resources in `.github/skills/security-audit/`.
- It may **run the included script** (`scripts/scan.js`) to detect the SQL injection pattern.
- It validates against the [Security Checklist](../.github/skills/security-audit/rules/checklist.md).
- The response prioritizes fixing the **Critical** vulnerability (SQL Injection) over everything else.

### 3. Apply the Fix
Copilot will suggest a parameterized query fix (e.g., using `?` or separate params). Apply it to secure the code.

---

## 🤔 Instructions vs. Skills

It's common to confuse **Instructions** (Exercise 1) with **Skills** (Exercise 3). Here is the difference:

| Feature | Custom Instructions | Agent Skills |
| :--- | :--- | :--- |
| **Trigger** | Always active (passive) | Auto-detected by prompt (active) |
| **Content** | Text rules only | Text, Scripts, Templates, Files |
| **Complexity** | Simple style guides | Complex multi-step workflows |
| **Cost** | Consumes context on every request | Zero context cost until activated |
| **Use Case** | "Format code like this..." | "Perform this specific task..." |

**Key Takeaway:** Use Instructions for *rules* ("Always use TypeScript"). Use Skills for *jobs* ("Audit for security").

---

## Step 5: Explore Agent Configuration

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
- ✅ Skills augment Agents with portable, reusable workflows

## 💡 When to Use

Use Custom Agents for:
- Multi-phase workflows
- When you need guardrails (prevent accidental edits)
- Team collaboration patterns
- Complex feature development

Use Skills for:
- Reusable workflows (like testing, debugging)
- Capabilities that need templates or scripts
- Sharing logic between Agents and Chat

---

## 🎓 Checkpoint!

You've learned GitHub Copilot **customization**:

1. **Instructions** → Automatic standards
2. **Prompts** → On-demand tasks
3. **Agents** → Workflow orchestration
4. **Skills** → Auto-detected workflows

**Up next:** Exercises 4-7 cover **extensibility and productivity** — MCP servers, chat modes, inline completions, and more.

**Reference:** See [QUICK_REFERENCE.md](../QUICK_REFERENCE.md) for a complete comparison.

---

**Previous:** [← Exercise 2: Prompts](02-prompts.md) | **Next:** [Exercise 4: MCP Servers →](04-mcp-servers.md)
