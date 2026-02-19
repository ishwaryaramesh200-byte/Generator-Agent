# Generator Agent for GitHub Copilot

## Installation

### Option 1: Quick Install (Pre-built)

1. Clone the repository:
   ```bash
   git clone https://github.com/ishwaryaramesh200-byte/Generator-Agent.git
   cd Generator-Agent
   ```

2. Install in VS Code from pre-built .vsix:
   ```bash
   code --install-extension conditional-generator-agent-1.0.0.vsix
   ```

3. Reload VS Code:
   - Press `Ctrl+Shift+P`
   - Type "Reload Window" and press Enter

### Option 2: Build from Source

1. Clone the repository:
   ```bash
   git clone https://github.com/ishwaryaramesh200-byte/Generator-Agent.git
   cd Generator-Agent
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the extension:
   ```bash
   npx vsce package
   ```

4. Install in VS Code:
   ```bash
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
