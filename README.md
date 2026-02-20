# Generator Agent for GitHub Copilot

## Installation

### Option 1: Quick Install (Pre-built)

1. Clone the repository:
   
   ```
   bash :

   git clone https://github.com/ishwaryaramesh200-byte/Generator-Agent.git
   
   cd Generator-Agent
   
   ```

2. Install in VS Code from pre-built .vsix:
   
   ```
   bash :

   code --install-extension conditional-generator-agent-1.0.0.vsix
   
   ```

3. Reload VS Code:
   
   - Press `Ctrl+Shift+P`
   - Type "Reload Window" and press Enter

### Option 2: Build from Source

1. Clone the repository:
   
   ```
   bash :

   git clone https://github.com/ishwaryaramesh200-byte/Generator-Agent.git
   
   cd Generator-Agent
   
   ```

2. Install dependencies:
   
   ```
   bash :

   npm install
   
   ```

3. Build the extension:
   
   ```
   bash :

   npx vsce package
   
   ```

4. Install in VS Code:
   
   ```
   bash :

   code --install-extension conditional-generator-agent-1.0.0.vsix
   
   ```

5. Reload VS Code:
   
   - Press `Ctrl+Shift+P`
   - Type "Reload Window" and press Enter

## Usage

1. Copy the `.github/agents` folder into your project root.
2. Open GitHub Copilot Chat.
3. Select the "Conditional Generator" or "Generators" agent.
4. Start prompting.

## Features

- Static generator
- Dynamic generator
- Conditional generator
- Reference generator
- Remote generator

## Instructions

### Getting Started

| Step | Action | Details                                              |
|------|--------|------------------------------------------------------|
| 1    | Install| Follow Option 1 (Quick) or Option 2 (From Source)    |
| 2    | Setup  | Copy `.github/agents` folder to your project root    |
| 3    | Open   | Launch GitHub Copilot Chat in VS Code                |
| 4    | Select | Choose "Conditional Generator" or "Generators" agent |
| 5    | Prompt | Start using the agent with your requests             |

### Key Commands

- **Start Agent**: `Ctrl+Shift+P` → "Start Conditional Generator Agent"
- **Reload Window**: `Ctrl+Shift+P` → "Reload Window"
- **Copilot Chat**: `Ctrl+Shift+I` (Open Copilot Chat panel)

### Best Practices

1. Always ensure the `.github/agents` folder is in your project root
2. Use the appropriate agent (Conditional Generator for rules, Generators for configuration)
3. Provide clear prompts for better generation results
4. Test generated output before using in production