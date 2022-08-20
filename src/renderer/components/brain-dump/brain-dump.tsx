import React from 'react';
import type { DataType } from '../../../types';
import './brain-dump.scss';

type BrainDumpProps = {
  brainDump: DataType['brainDump'];
  update: (value: DataType['brainDump']) => void;
};

const BrainDump: React.FC<BrainDumpProps> = ({ brainDump, update }) => {
  function onChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    update(event.target.value);
  }
  return (
    <div className="DumpContainer">
      <p>Brain dump</p>
      <textarea className="DumpBox" value={brainDump} onChange={onChange} />
    </div>
  );
};

export default BrainDump;
