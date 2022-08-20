export type TaskType = {
  from: string;
  to: string;
  content: string;
};

export type DataType = {
  date: string;
  topPriorities: [string, string, string];
  brainDump: string;
  tasks: TaskType[];
};

export type SaveFile = 'today' | 'tomorrow';
