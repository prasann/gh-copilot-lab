# 🚀 GitHub Copilot Customization Quick Reference

## 📚 The Four Pillars

### 1️⃣ Instructions (Implicit, Always Active)
**Location**: `.github/instructions/*.instructions.md`

**What**: Rules that apply to ALL code generation automatically

**Use for**: 
- Coding standards
- Best practices
- Consistent patterns

**Example**: TypeScript rules, JSON timestamp requirements

---

### 2️⃣ Prompts (Explicit, On-Demand)
**Location**: `.github/prompts/*.prompt.md`

**What**: Reusable templates for specific tasks

**Use for**:
- Data transformation
- Component scaffolding  
- Documentation generation

**Example**: Text to JSON converter

---

### 3️⃣ Agents (Role-Based Specialists)
**Location**: `.github/agents/*.agent.md`

**What**: Specialized assistants with specific tools and capabilities

**Use for**:
- Multi-step workflows
- Phase separation (plan vs implement)
- Tool restrictions (read-only vs full access)

**Example**: Planner → Tasker → Implementer

---

### 4️⃣ Agent Skills (Portable Workflows)
**Location**: `.github/skills/*/SKILL.md`

**What**: Complete workflows with scripts and resources

**Use for**:
- Complex multi-tool workflows
- Cross-platform portability
- Community sharing

**Example**: Feature testing workflow

---

## 🎯 When to Use What

| Need | Solution | File |
|------|----------|------|
| TypeScript always has explicit types | Instructions | `.instructions.md` |
| Convert agenda text to JSON | Prompt | `.prompt.md` |
| Plan before implementing | Agent | `.agent.md` |
| Complete testing workflow | Skill | `SKILL.md` |

---

## 🔄 Professional Workflow Pattern

```
@planner
   ↓ (Read-only research)
   ↓ Handoff: "Create Tasks"
   
@tasker
   ↓ (Break into phases)
   ↓ Handoff: "Start Implementation"
   
@implementer
   ↓ (Full editing power)
   ↓ Handoff: "Review Code"
   
@reviewer (optional)
   ↓ (Quality check)
```

---

## 💡 Demo Flow

### Individual Workflow (10 min)
1. Show code generation with automatic standards
2. Reveal instructions files
3. Demo prompt for text-to-JSON
4. Explain Instructions vs Prompts

### Professional Workflow (15 min)
1. @planner - Research and design
2. @tasker - Break into tasks
3. @implementer - Build the feature
4. Show handoffs between agents

---

## 🎤 Key Talking Points

> "Instructions are your silent partner - always enforcing standards"

> "Prompts are your team's runbook - use when needed"

> "Agents are specialists - each with the right tools"

> "Handoffs create checkpoints - you stay in control"

---

## 📁 Files in This Demo

### Instructions
- ✅ `typescript-preference.instructions.md` - TS standards + 🦄 comments
- ✅ `json-creation.instructions.md` - Automatic timestamps

### Prompts
- ✅ `text-to-json.prompt.md` - Convert text to structured JSON

### Agents
- ✅ `planner.agent.md` - Read-only research & planning
- ✅ `tasker.agent.md` - Break plans into tasks
- ✅ `implementer.agent.md` - Full implementation power
- ✅ `reviewer.agent.md` - Code review specialist
- ✅ `gilfoyle.agent.md` - Sarcastic reviewer (for fun!)

### Skills
- ✅ `feature-testing/SKILL.md` - Complete testing workflow

---

## 🚀 Getting Started Guide

### For Individuals
1. Create `.github/instructions/` folder
2. Add your coding standards
3. Watch them apply automatically

### For Teams
1. Start with instructions
2. Add prompts for common tasks
3. Create agents for workflows
4. Use handoffs to connect agents

---

## 📖 Learn More

- [VS Code Copilot Docs](https://code.visualstudio.com/docs/copilot/customization/overview)
- [Awesome Copilot](https://github.com/github/awesome-copilot)
- [Agent Skills Standard](https://agentskills.io/)
