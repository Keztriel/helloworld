// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { win32 } from 'path';
import * as vscode from 'vscode';


let myStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {


	console.log('Congratulations, your extension "battery-notification" is now active!');
	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	
	let disposable = vscode.commands.registerCommand('battery-notification.batteryNotification', async () => {
		// The code you place here will be executed every time your command is executed
	
		// Display a message box to the user
		vscode.window.showInformationMessage('Battery Level : ' + await getBatteryLevel() * 100 + '%');
	  });
	
}

async function getBatteryLevel() : Promise<number> {
	const batteryLevel = require('battery-level');

	return await batteryLevel();
}

// This method is called when your extension is deactivated
export function deactivate() {}
