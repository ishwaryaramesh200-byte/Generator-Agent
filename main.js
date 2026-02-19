const vscode = require('vscode');

// Agent objects that will be discovered by Copilot
const agents = [
    {
        id: 'conditional-generator',
        name: 'Conditional Generator',
        description: 'Generates text based on conditional rules',
    },
    {
        id: 'generators',
        name: 'Generators',
        description: 'Generator Configuration Agent responsible for generating generators',
    }
];

function activate(context) {
    console.log('Conditional Generator Agent is now active!');

    // Export agents for Copilot discovery
    if (vscode.window && vscode.window.registerChatAgents) {
        try {
            agents.forEach(agent => {
                vscode.window.registerChatAgents(agent.id, agent.name, agent.description);
            });
            console.log('Agents registered:', agents.length);
        } catch (e) {
            console.log('Note: registerChatAgents API not available, agents may still work via .agents folder');
        }
    }

    // Command to trigger the agent
    let disposable = vscode.commands.registerCommand(
        'conditional-generator.start',
        function () {
            vscode.window.showInformationMessage('Conditional Generator Agent started!');
        }
    );

    context.subscriptions.push(disposable);

    // Export agents for external access
    context.subscriptions.push({
        agentsProvided: agents
    });
}

function deactivate() { }

module.exports = {
    activate,
    deactivate,
    agents
};
