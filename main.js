const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    fullscreen: true,    // Включаем полноэкранный режим
    frame: false,        // Убираем рамку окна
    resizable: false,    // Отключаем изменение размера окна
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html'); // Загружаем ваш HTML файл

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});