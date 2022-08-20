import { IpcMain } from 'electron';
import fs from 'fs/promises';
import type { DataType, SaveFile } from 'types';
import { defaultSheet } from '../constantes';

// eslint-disable-next-line no-console
fs.mkdir('data', { recursive: true }).catch(console.error);

export const defaultSave = (): DataType => ({
  date: new Date().toISOString().split('T')[0],
  topPriorities: ['', '', ''],
  brainDump: '',
  tasks: [],
});

export const saveData = async (file: SaveFile, data: DataType) => {
  const json = JSON.stringify(data);
  await fs.writeFile(`data/${file}.tbx`, json);
};

export const loadData = async (file: SaveFile): Promise<DataType> => {
  try {
    const json = await fs.readFile(`data/${file}.tbx`, 'utf8');
    return JSON.parse(json) as DataType;
  } catch (e) {
    saveData(file, defaultSheet[file]);
    return loadData(file);
  }
};

export default (ipc: IpcMain) => {
  ipc.handle('save-data', async (_event, file: SaveFile, data: DataType) => {
    await saveData(file, data);
  });
  ipc.handle('load-data', async (_event, file: SaveFile) => {
    const data = await loadData(file);
    return data;
  });
};
