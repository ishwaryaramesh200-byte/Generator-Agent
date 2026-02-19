const vscode = require('vscode');

function activate(context) {
    console.log('Conditional Generator Agent is now active!');

    // Command to trigger the agent
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
