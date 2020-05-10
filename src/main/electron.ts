import * as path from 'path'
import { app, BrowserWindow }  from 'electron'
import * as isDev from 'electron-is-dev'

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    backgroundColor: '#21262c',
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, 'index.html')}`
  )
}

app.on('ready', createWindow)
