import { userTypeDefs } from './user/user.typeDefs';
import { taskTypeDefs } from './task/task.typeDefs';
import { userResolvers } from './user/user.resolvers';
import { taskResolvers } from './task/task.resolvers';
import { gql } from 'apollo-server';

const rootTypeDefs = gql`
    type Query
    type Mutation
`;

export const typeDefs = [rootTypeDefs, userTypeDefs, taskTypeDefs];
export const resolvers = [userResolvers, taskResolvers];
