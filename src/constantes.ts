/* eslint-disable import/prefer-default-export */
import dayjs from 'dayjs';
import { SaveFile, DataType } from 'types';

export const defaultSheet: Record<SaveFile, DataType> = {
  today: {
    date: dayjs().format('YYYY-MM-DD'),
    topPriorities: ['', '', ''],
    brainDump: '',
    tasks: [],
  },
  tomorrow: {
    date: dayjs().add(1, 'day').format('YYYY-MM-DD'),
    topPriorities: ['', '', ''],
    brainDump: '',
    tasks: [],
  },
};
