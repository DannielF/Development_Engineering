const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', createWindow);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
  });

  mainWindow.loadFile('index.html');
}