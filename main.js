const vscode = require('vscode');

/**
 * Called when your agent is activated
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log("Conditional Generator Agent Activated!");

    // Register command
    let disposable = vscode.commands.registerCommand('conditional-generator.start', () => {
        vscode.window.showInformationMessage('Conditional Generator Agent is running!');
    });

    context.subscriptions.push(disposable);
}

/**
 * Called when your agent is deactivated
 */
function deactivate() {
    console.log("Conditional Generator Agent Deactivated!");
}

module.exports = {
    activate,
    deactivate
};
