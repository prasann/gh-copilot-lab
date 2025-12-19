# 🚀 Advanced GitHub Copilot Collaboration Demo

## Overview

This repository demonstrates advanced GitHub Copilot customization techniques, showing how to scale from individual developer productivity to sophisticated team workflows.

## 🎯 What You'll Learn

1. **Instructions** - Implicit, always-active coding standards
2. **Prompts** - Explicit, on-demand task automation
3. **Custom Agents** - Role-based specialists with handoffs
4. **Agent Skills** - Portable workflows with scripts and resources

## 📁 Repository Structure

```
.github/
├── instructions/          # Always-active coding standards
│   ├── typescript-preference.instructions.md
│   └── json-creation.instructions.md
├── prompts/              # On-demand task templates
│   ├── text-to-json.prompt.md
│   ├── create-component.prompt.md
│   └── generate-tests.prompt.md
├── agents/               # Specialized workflow agents
│   ├── planner.agent.md       # Read-only planning
│   ├── tasker.agent.md        # Task breakdown
│   ├── implementer.agent.md   # Full implementation
│   ├── reviewer.agent.md      # Code review
│   └── gilfoyle.agent.md      # Sarcastic reviewer
└── skills/               # Complete workflows
    └── feature-testing/
        ├── SKILL.md
        └── templates/

presentation/
├── AGENDA.txt            # Sample data for demos
└── generate_app_prompt.md

DEMO_SCRIPT.md           # Complete demo walkthrough
QUICK_REFERENCE.md       # Cheat sheet
NARRATIVE.md             # Full narrative and use cases
```

## 🚀 Quick Start

### Individual Workflow (Simple)

1. **See Instructions in Action**
   - Generate any TypeScript code
   - Notice: Explicit return types, JSDoc with 🦄 comments
   - Create any JSON object
   - Notice: Automatic `created_at` timestamps

2. **Try Prompts**
   - Select text in `presentation/AGENDA.txt`
   - Run `.github/prompts/text-to-json.prompt.md`
   - Watch it transform to structured JSON

### Professional Workflow (Advanced)

1. **Planning Phase**
   ```
   Switch to: @planner
   "Plan user authentication for this app"
   ```
   - Agent researches codebase (read-only)
   - Generates comprehensive plan
   - Click "📋 Create Tasks" button

2. **Task Breakdown Phase**
   ```
   (Automatically switched to @tasker)
   ```
   - Breaks plan into phased tasks
   - Creates actionable checklist
   - Click "🚀 Start Implementation" button

3. **Implementation Phase**
   ```
   (Automatically switched to @implementer)
   ```
   - Implements tasks incrementally
   - Follows all instructions automatically
   - Runs tests
   - Click "🔍 Review Code" button (optional)

## 💡 Key Concepts

### Instructions vs Prompts vs Agents vs Skills

| Feature | When | Purpose | Example |
|---------|------|---------|---------|
| **Instructions** | Always active | Enforce standards | TypeScript rules |
| **Prompts** | On-demand | Automate tasks | Text to JSON |
| **Agents** | When selected | Specialized workflows | Planner → Implementer |
| **Skills** | Auto-detected | Complete capabilities | Testing workflow |

## 🎬 Demo Files

### For Individual Workflow Demo
- ✅ Instructions demonstrate automatic enforcement
- ✅ Prompt shows on-demand transformation
- ✅ Results show consistent standards

### For Professional Workflow Demo
- ✅ @planner: Research and design (read-only)
- ✅ @tasker: Break into phases
- ✅ @implementer: Build with full power
- ✅ Handoffs create review checkpoints

## 📚 Documentation

- [DEMO_SCRIPT.md](DEMO_SCRIPT.md) - Complete demo walkthrough with timings
- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - Quick cheat sheet
- [NARRATIVE.md](NARRATIVE.md) - Full narrative and use cases

## 🎓 Learning Resources

- [VS Code Copilot Customization](https://code.visualstudio.com/docs/copilot/customization/overview)
- [Awesome Copilot](https://github.com/github/awesome-copilot)
- [Agent Skills Standard](https://agentskills.io/)

## 🎯 Success Criteria

After this demo, you should understand:
- ✅ When to use instructions vs prompts vs agents
- ✅ How agents create workflow guardrails
- ✅ How handoffs enable controlled transitions
- ✅ How to start customizing Copilot for your team

## 🚀 Next Steps

1. **Start Simple**: Add one instruction file for your coding standards
2. **Add Automation**: Create a prompt for a common task
3. **Scale Up**: Build an agent for planning or review workflows
4. **Share**: Commit customizations to your team repo

---

## 1. 📝 Prompts - Explicit Code Generation

### Demo: Agenda Generation

**Setup**: Select `agenda.txt` → `Cmd+P` → "Run prompt"

**What happens**:

- Generates `agenda.json` in chat window
- Ask Copilot to create the actual file
- **🎩 Magic moment**: Notice `created_at` field appears automatically

**Key Points**:

- Prompts are explicit, user-initiated requests
- Direct control over what gets generated
- Perfect for specific, targeted code generation

---

## 2. ⚙️ Instructions - Implicit Behavioral Configuration

### The Magic Behind `created_at`

**Reveal**: The timestamp appears due to **Instructions**, not the prompt!

**Key Distinction**:

- **Prompts**: Explicit user requests ("Generate this code")
- **Instructions**: Implicit behavioral rules ("Always add timestamps")

### Demo: Agent Mode in Action

**Setup**: Copy-paste `generate_app_prompt.md` in Agent mode

**Showcase**:

1. Agent automatically creates TODO application
2. Show TODO config and how it operates
3. Explore agent settings and context management
4. **🦄 Easter Egg**: TypeScript code includes unicorn comments (from instructions!)

**Why Agent Mode Rocks**:

- Autonomous code generation
- Context-aware decisions
- Configurable behavior through instructions

---

## 3. 🔄 Exploring Chat Modes

### Edit Mode - Surgical Precision

**Demo**: Remove docstrings from TypeScript file

**Key Points**:

- Works only within limited scope
- Extremely powerful for focused edits
- Perfect when you know exactly what needs changing
- Maintains code structure and context

### Ask Mode - Your Brainstorming Partner

**Use Cases**:

- Architecture discussions
- Code reviews and suggestions
- Symbol exploration and understanding
- Quick questions without code changes

**Demo Tip**: Show how you can reference any symbols/types in questions

---

## 4. 🛠️ Custom Chat Modes

### Reviewer Mode

**Demo**: Show custom reviewer configuration

- Tailored feedback patterns
- Specific review criteria
- Consistent review quality

---

## 5. 💪 Power User Features

### Slash Commands

Quick reference: [GitHub Copilot Cheat Sheet](https://docs.github.com/en/copilot/reference/cheat-sheet)

**Essential Commands**:

- `/explain` - Code explanation
- `/fix` - Bug fixes
- `/tests` - Test generation
- `/doc` - Documentation

### Vision Capabilities

Some models support image analysis for UI mockups and diagrams
[Model Comparison Guide](https://docs.github.com/en/copilot/reference/ai-models/model-comparison)

### Cool Configs

- Open up settings and do a quick show and tell of things.
