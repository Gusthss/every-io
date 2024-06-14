import { addTask, getTasks, updateTask, archiveTask } from './task.service.js';

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
