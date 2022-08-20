import React from 'react';
import type { DataType, SaveFile } from '../../types';
import { defaultSheet } from '../../constantes';

export type SheetContextType = {
  sheet: DataType;
  setSheet: React.Dispatch<React.SetStateAction<DataType>>;
  reload: () => void;
  changeDay: React.Dispatch<React.SetStateAction<SaveFile>>;
};

export const SheetContext = React.createContext<SheetContextType>({
  sheet: defaultSheet.today,
  setSheet: () => {},
  reload: () => {},
  changeDay: () => {},
});

export const SheetProvider: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  const [sheet, setSheet] = React.useState<DataType>();
  const [file, setFile] = React.useState<SaveFile>('today');
  const reload = React.useCallback(() => {
    (async () => {
      const loadedSheet = await window.electron.SaveService.load(file);
      setSheet(loadedSheet);
    })();
  }, [setSheet, file]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(reload, [file]);
  React.useEffect(() => {
    (async () => {
      if (!sheet) return;
      await window.electron.SaveService.save(file, sheet);
    })();
  }, [sheet, file]);

  return (
    <SheetContext.Provider
      value={{
        sheet: sheet || defaultSheet.today,
        setSheet: setSheet as React.Dispatch<React.SetStateAction<DataType>>,
        reload,
        changeDay: setFile,
      }}
    >
      {children}
    </SheetContext.Provider>
  );
};
