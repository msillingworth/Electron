const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: 'file',
        slashes: true
    }));

    // Open up chrome dev tools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    })
}

// Run createWindow function
app.on('ready', createWindow);

// Quit when all windows are closed

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})