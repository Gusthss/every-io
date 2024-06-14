import { addTask, getTasks, updateTask, archiveTask } from './task.service';

export const taskResolvers = {
  Query: {
    getTasks,
  },
  Mutation: {
    addTask,
    updateTask,
    archiveTask,
  },
};
