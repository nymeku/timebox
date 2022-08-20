import React from 'react';
import { DataType } from 'types';
import './top-prio.scss';

type TopPrioProps = {
  topPriorities: DataType['topPriorities'];
  update: (index: number, value: string) => void;
};

const TopPrio: React.FC<TopPrioProps> = ({ topPriorities, update }) => {
  function onChange(index: number) {
    return (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      update(index, event.target.value);
    };
  }
  return (
    <div className="PrioContainer">
      <p>Top Priorities</p>
      <div className="InputsContainer">
        {Array.from({ length: 3 }, (_, i) => (
          <textarea
            key={i}
            className="PrioInput"
            onChange={onChange(i)}
            value={topPriorities[i]}
          />
        ))}
      </div>
    </div>
  );
};

export default TopPrio;
