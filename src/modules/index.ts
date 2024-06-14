import { userTypeDefs } from './user/user.typeDefs.js';
import { taskTypeDefs } from './task/task.typeDefs.js';
import { userResolvers } from './user/user.resolvers.js';
import { taskResolvers } from './task/task.resolvers.js';
import { gql } from 'apollo-server';

const rootTypeDefs = gql`
    type Query
    type Mutation
`;

export const typeDefs = [rootTypeDefs, userTypeDefs, taskTypeDefs];
export const resolvers = [userResolvers, taskResolvers];
