import { gql } from 'apollo-server';

export const taskTypeDefs = gql`
    enum TaskStatus {
        todo
        inProgress
        done
        archived
    }
    
    type Task {
        id: ID!
        title: String!
        description: String!
        status: TaskStatus!
    }

    extend type Query {
        getTasks: [Task!]
    }

    extend type Mutation {
        addTask(title: String!, description: String!): Task
        updateTask(id: ID!, status: String!): Task
        archiveTask(id: ID!): Task
    }
`;
