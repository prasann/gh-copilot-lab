# 🚀 GitHub Copilot in VS Code

## 🎯 Agenda Overview

We'll explore 4 core concepts that make GitHub Copilot powerful:

1. **Prompts** - Explicit instructions for code generation
2. **Instructions** - Implicit behavioral configuration  
3. **Chat Modes** - Different interaction patterns
4. **Collections** - Organized knowledge bases

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

### Pro Configuration
**Settings Highlight**: `GitHub › Copilot › Chat › Agent: Auto Fix`
- Automatic error detection and fixes
- Continuous improvement suggestions

---