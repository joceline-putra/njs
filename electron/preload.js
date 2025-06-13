// Only for karaoke.js

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    volumeUp: () => ipcRenderer.invoke('volume-up'),
    volumeDown: () => ipcRenderer.invoke('volume-down'),
    getVolume: () => ipcRenderer.invoke('get-volume'),
    setFullscreen: (isFullscreen) => ipcRenderer.invoke('set-fullscreen', isFullscreen),
    isFullscreen: () => ipcRenderer.invoke('is-fullscreen')
});
