import React from 'react';
import BrainDump from 'renderer/components/brain-dump/brain-dump';
import TopPrio from 'renderer/components/top-prio/top-prio';
import { SheetContext } from 'renderer/contexts/SheetContext';
import Logo from '../../components/logo/logo';
import './sheet.scss';

export default function Sheet() {
  const { sheet, setSheet } = React.useContext(SheetContext);

  const updateTopPrio = React.useCallback(
    (index: number, value: string) => {
      const newSheet = { ...sheet };
      newSheet.topPriorities[index] = value;
      setSheet(newSheet);
    },
    [sheet, setSheet]
  );

  const updateBrainDump = React.useCallback(
    (value: string) => {
      const newSheet = { ...sheet };
      newSheet.brainDump = value;
      setSheet(newSheet);
    },
    [sheet, setSheet]
  );

  console.log(sheet);
  return (
    <div className="Layout">
      <div className="LeftContainer">
        <div style={{ marginBottom: '35px' }}>
          <Logo />
        </div>
        <div style={{ marginBottom: '35px' }}>
          <TopPrio update={updateTopPrio} topPriorities={sheet.topPriorities} />
        </div>
        <BrainDump brainDump={sheet.brainDump} update={updateBrainDump} />
      </div>

      <div className="RightContainer" />
    </div>
  );
}
