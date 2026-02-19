const vscode = require('vscode');

function activate(context) {
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
