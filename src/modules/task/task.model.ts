import { Schema, model, Document, Types } from 'mongoose';

export enum TaskStatus {
  Todo = 'todo',
  InProgress = 'inProgress',
  Done = 'done',
  Archived = 'archived',
}

export interface ITask extends Document {
  _id: Types.ObjectId,
  title: string;
  description: string;
  status: TaskStatus;
  user: Schema.Types.ObjectId | string;
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, required: true, enum: TaskStatus, default: TaskStatus.Todo },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

taskSchema.virtual('id').get(function (value, virtual, doc) {
  return this._id.toHexString();
});

taskSchema.set('toJSON', { virtuals: true });
taskSchema.set('toObject', { virtuals: true });

const Task = model<ITask>('Task', taskSchema);

export default Task;
