# Generator Agent for GitHub Copilot

## Installation

### Option 1: Build from Source (Recommended)

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
   - Open VS Code
   - Go to Extensions → Install from VSIX
   - Select the generated `conditional-generator-agent-1.0.0.vsix` file

### Option 2: From Marketplace (Coming Soon)
The extension will be available on the VS Code Marketplace.

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
