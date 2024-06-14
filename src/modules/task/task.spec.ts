import mongoose from 'mongoose';

import {inMemoryDB} from "../../config/db";
import * as taskService from "./task.service";
import {TaskStatus} from "./task.model";

const { ObjectId } = mongoose.Types

describe('Task Test Suite', () => {
    const inMem = inMemoryDB()


    beforeAll(async () => {
        await inMem.create()
    })

    afterAll(async () => {
        await inMem.stop()
    })

    it('should addTask, getTasks, updateTask, archiveTask', async () => {
        const title = 'title'
        const description = 'description'
        const id = new ObjectId()

        const task = await taskService.addTask({}, {title, description}, {user: {id}})

        expect(task).toMatchObject({description, title, user: id})

        await expect(taskService.getTasks({}, {},{user: {id}})).resolves.toMatchObject([{id: task?.id, description, title, user: id}])

        await expect(taskService.updateTask({},{id: task?.id, status: TaskStatus.InProgress},{user: {id}})).resolves.toMatchObject({id: task?.id, description, title, user: id, status: TaskStatus.InProgress})

        await expect(taskService.archiveTask({},{id: task?.id},{user: {id}})).resolves.toMatchObject({id: task?.id, description, title, user: id, status: TaskStatus.Archived})
    });
})
