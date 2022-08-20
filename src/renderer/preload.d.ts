import { Channels } from 'main/preload';
import { SaveFile, DataType } from 'types';

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
      };
      SaveService: {
        save(file: SaveFile, data: DataType): Promise<void>;
        load(file: SaveFile): Promise<DataType>;
      };
    };
  }
}

export {};
