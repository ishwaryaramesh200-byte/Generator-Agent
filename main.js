const vscode = require('vscode');

function activate(context) {
    // Register the command defined in package.json
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
