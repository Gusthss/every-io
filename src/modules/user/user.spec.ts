import mongoose from 'mongoose';

import {inMemoryDB} from "../../config/db";
import * as userService from "./user.service";
import {IUser} from "./user.model";

const { ObjectId } = mongoose.Types

describe('Task Test Suite', () => {
    const inMem = inMemoryDB()

    beforeAll(async () => {
        await inMem.create()
    })

    afterAll(async () => {
        await inMem.stop()
    })

    it('should register and login', async () => {
        const username = 'username'
        const password = 'password'

        await expect(userService.register({}, {username, password} as IUser)).resolves.toEqual(expect.any(String))

        await expect(userService.login({}, {username, password} as IUser)).resolves.toEqual(expect.any(String))
    });
})
