import { AuthenticationError } from 'apollo-server';
import * as taskRepository from './task.repository';
import { ITask } from './task.model';

export async function getTasks(_: any, __: any, { user }: any) {
  if (!user) throw new AuthenticationError('You must be logged in');
  return taskRepository.findTasks(user.id);
}

export async function addTask(_: any, { title, description }: Pick<ITask, 'title' | 'description'>, { user }: any) {
  if (!user) throw new AuthenticationError('You must be logged in');
  return taskRepository.addTask({ title, description, user: user.id });
}

export async function updateTask(_: any, { id, status }: Pick<ITask, 'id' | 'status'>, { user }: any)  {
  if (!user) throw new AuthenticationError('You must be logged in');
  return taskRepository.updateTask({ id, status, user: user.id });
}

export async function archiveTask(_: any, { id }: { id: string }, { user }: any) {
  if (!user) throw new AuthenticationError('You must be logged in');
  return taskRepository.archiveTask( id, user.id );
}
