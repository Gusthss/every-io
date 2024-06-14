import { gql } from 'apollo-server';

export const userTypeDefs = gql`
    type User {
        id: ID!
        username: String!
    }

    extend type Mutation {
        register(username: String!, password: String!): String
        login(username: String!, password: String!): String
    }
`;

