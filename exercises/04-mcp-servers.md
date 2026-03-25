# Exercise 4: MCP Servers - Extending Copilot's Reach

## 🎯 Objective
Learn how MCP (Model Context Protocol) servers connect Copilot to external tools and APIs — letting it interact with GitHub, databases, browsers, and more.

## 📝 What You'll Do
Configure an MCP server and use Copilot to interact with GitHub directly from chat.

---

## Step 1: Explore the MCP Config

Open [`.vscode/mcp.json`](../.vscode/mcp.json) in your editor.

This file tells VS Code which MCP servers to connect to. The included config connects to the **GitHub MCP Server**, which gives Copilot access to repositories, issues, pull requests, and more.

**Key parts:**
- `servers` — defines which MCP servers are available
- `type: "http"` — connects over HTTP (other options: `stdio` for local servers)
- `inputs` — prompts for secrets (like a GitHub token) so they aren't hardcoded

## Step 2: Start the MCP Server

1. Open the Command Palette (`Cmd+Shift+P`)
2. Search for **"MCP: List Servers"**
3. You should see `github` in the list
4. If it shows as stopped, click to start it — you'll be prompted for a GitHub token

> **Note:** If you're using GitHub Copilot's built-in MCP support, the GitHub server may already be available without a token.

## Step 3: Use Copilot with MCP Tools

Open Copilot Chat and try these prompts:

```
List the open issues in this repository
```

```
Show me the last 5 commits on main
```

```
Create a new issue titled "Test MCP integration" with a description
```

**Notice:**
- Copilot calls the GitHub API through the MCP server
- You see tool invocations in the chat (e.g., `list_issues`, `get_commits`)
- Copilot asks for confirmation before write operations (creating issues, etc.)

## Step 4: Toggle Tools On/Off

1. In the Copilot Chat input, click **"Configure Tools"** (wrench icon)
2. You can selectively enable or disable specific MCP tools
3. Try disabling write tools — now Copilot can read but not modify anything

**Key Insight:** MCP servers let you give Copilot controlled access to external systems, with granular permissions.

---

## 🔍 How MCP Fits In

| Feature | What It Does |
|---------|-------------|
| Instructions | Rules for code generation |
| Prompts | Templates for tasks |
| Agents | Specialized personas with handoffs |
| Skills | Bundled workflows with scripts |
| **MCP Servers** | **Connects Copilot to external tools/APIs** |

MCP is the bridge between Copilot and the outside world. Without it, Copilot only knows about your local files. With it, Copilot can query databases, manage GitHub, run browser tests, and more.

---

## 🚀 Other MCP Servers to Try

| Server | What It Does |
|--------|-------------|
| GitHub | Issues, PRs, commits, repos |
| Playwright | Browser automation and testing |
| PostgreSQL | Query databases directly |
| Filesystem | Extended file operations |
| Fetch | Make HTTP requests to any API |

Search for MCP servers in the Extensions view (`Cmd+Shift+X`, search `@mcp`).

---

## ✅ Success Criteria

You understand:
- ✅ MCP servers extend Copilot's capabilities beyond code
- ✅ Configuration lives in `.vscode/mcp.json`
- ✅ Tools can be toggled on/off for safety
- ✅ Copilot asks for confirmation before write operations

## 💡 When to Use

Use MCP Servers for:
- Interacting with GitHub (issues, PRs, reviews)
- Querying databases during development
- Running browser tests via Playwright
- Connecting to any API your workflow needs

---

**Previous:** [← Exercise 3: Agents](03-agents.md) | **Next:** [Exercise 5: Chat Modes →](05-chat-modes.md)
