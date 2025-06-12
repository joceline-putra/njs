
// Required Dependencies
const path = require('path');
const loudness = require('loudness');
const { app, BrowserWindow, ipcMain } = require('electron');
const reloader = require('electron-reloader');
// const { server } = require('./app.js'); // Menghubungkan Express.js
const { execSync } = require('child_process');

reloader(module); // Reload otomatis saat ada perubahan dalam pengembangan

const assetPath = path.join(__dirname, "public/assets/velzon/images/logo-sm.png");
console.log("Path ke logo:", assetPath);

// Handle Volume Control via IPC
ipcMain.handle('volume-up', async () => { 
    console.log('Volume Up Clicked');
    let vol = await loudness.getVolume();
    vol = Math.min(100, vol + 5); // Batasi maksimal 100
    await loudness.setVolume(vol);
    return vol;
});

ipcMain.handle('volume-down', async () => {
    console.log('Volume Down Clicked');
    let vol = await loudness.getVolume();
    vol = Math.max(0, vol - 5); // Batasi minimal 0
    await loudness.setVolume(vol);
    return vol;
});

ipcMain.handle('get-volume', async () => {
    return await loudness.getVolume();
});

require('electron-reload')(__dirname, {
	electron: require(`${__dirname}/node_modules/electron`)
});

app.whenReady().then(async () => {
	// Jalankan Express Server dulu
	// require('./app.js'); // Jalankan server Express

	await loudness.setVolume(50); 

	const win = new BrowserWindow({
        width: 440,
        height: 600,
        x: 0, // posisi kiri
        y: 0, // posisi atas
        fullscreen: false,
		// autoHideMenuBar: true,
		// frame: true,
		// resizable: true,
		// kiosk: true,
        webPreferences: {
            preload: path.join(__dirname, 'electron/preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    // Load halaman UI utama aplikasi
    win.loadFile('electron/karaoke.html');

    // Membuka Developer Tools secara otomatis
    win.webContents.openDevTools({ mode: 'bottom' });

    // Deteksi perubahan URL yang terjadi di Electron
    win.webContents.on('did-navigate', (event, newURL) => {
        console.log("Navigasi ke:", newURL);
    });

    // Menambahkan shortcut ESC untuk keluar dari aplikasi
    win.webContents.on('before-input-event', (event, input) => {
        if (input.key === 'Escape' && input.type === 'keyDown') {
            app.quit();
        }
    });

    // Jika semua jendela tertutup, buat ulang jika aplikasi masih aktif
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Menutup aplikasi dan server backend saat semua jendela ditutup
app.on('window-all-closed', () => {
    // if (server && server.close) {
        // server.close(); // Menutup Express Server saat Electron ditutup
        process.exit(0);
        // console.log('Express server closed.');
    // }
    app.quit();
});





