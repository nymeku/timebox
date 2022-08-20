import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import type { DataType, SaveFile } from '../types';

export type Channels = 'ipc-example';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => ipcRenderer.removeListener(channel, subscription);
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
  SaveService: {
    async save(file: SaveFile, data: DataType) {
      await ipcRenderer.invoke('save-data', file, data);
    },
    load(file: SaveFile) {
      return ipcRenderer.invoke('load-data', file);
    },
  },
});
