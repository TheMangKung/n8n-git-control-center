const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  isElectron: true,
  // Projects
  getProjects: () => ipcRenderer.invoke('projects:get'),
  addProject: () => ipcRenderer.invoke('projects:add'),
  removeProject: (projectPath) => ipcRenderer.invoke('projects:remove', projectPath),
  switchProject: (projectPath) => ipcRenderer.invoke('projects:switch', projectPath),
  
  // Git Actions
  getRemoteInfo: () => ipcRenderer.invoke('git:getRemoteInfo'),
  saveCheckpoint: (message) => ipcRenderer.invoke('git:saveCheckpoint', message),
  syncOverwrite: () => ipcRenderer.invoke('git:syncOverwrite'),
  rollback: (commitHash) => ipcRenderer.invoke('git:rollback', commitHash),
  refreshDag: () => ipcRenderer.invoke('git:refreshDag'),
  publishToGitHub: (isPrivate) => ipcRenderer.invoke('git:publishToGitHub', isPrivate),
  getFileDiff: (commitHash, filePath) => ipcRenderer.invoke('git:getFileDiff', commitHash, filePath),

  // Events from Main Process
  onDagUpdated: (callback) => {
    const handler = (_event, data) => callback(data);
    ipcRenderer.on('dag:updated', handler);
    return () => ipcRenderer.removeListener('dag:updated', handler);
  },
  onStatusNotification: (callback) => {
    const handler = (_event, data) => callback(data);
    ipcRenderer.on('status:notification', handler);
    return () => ipcRenderer.removeListener('status:notification', handler);
  }
});
