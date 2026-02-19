const vscode = require('vscode');

function activate(context) {
    console.log('Conditional Generator Agent is now active!');

    // Register the Copilot agent
    if (vscode.experimental && typeof vscode.experimental.createCopilotAgent === 'function') {
        try {
            const agent = vscode.experimental.createCopilotAgent('conditional-generator', {
                name: 'Conditional Generator',
                description: 'Generates text based on conditions',
                onInvoke: async (prompt, context, token) => {
                    return "Conditional Generator Agent processing...";
                }
            });
            context.subscriptions.push(agent);
        } catch (error) {
            console.log('Agent registration error:', error);
        }
    }

    // Register generators agent
    if (vscode.experimental && typeof vscode.experimental.createCopilotAgent === 'function') {
        try {
            const generatorAgent = vscode.experimental.createCopilotAgent('generators', {
                name: 'Generators',
                description: 'Generator Configuration Agent responsible for generating generators',
                onInvoke: async (prompt, context, token) => {
                    return "Generators Agent processing...";
                }
            });
            context.subscriptions.push(generatorAgent);
        } catch (error) {
            console.log('Generators agent registration error:', error);
        }
    }

    let disposable = vscode.commands.registerCommand(
        'conditional-generator.start',
        function () {
            vscode.window.showInformationMessage('Conditional Generator Agent started!');
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};
