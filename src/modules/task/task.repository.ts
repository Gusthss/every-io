import Task, { ITask, TaskStatus } from './task.model.js';

export async function findTasks(userId: string) {
  return Task.find({ user: userId });
}

export async function addTask(task: Pick<ITask, 'title' | 'description' | 'user'>) {
  const taskDocument = new Task(task);
  return taskDocument.save();
}

export async function updateTask({ id, status, user }: Pick<ITask, 'id' | 'status' | 'user'>)  {
  return Task.findOneAndUpdate(
    { _id: id, user, status: { $ne: TaskStatus.Archived } },
    { status },
    { new: true },
  );
}

export async function archiveTask(taskId: string, userId: string)  {
  return Task.findOneAndUpdate(
    { _id: taskId, user: userId },
    { status: TaskStatus.Archived },
    { new: true },
  );
}
