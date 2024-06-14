import { ApolloServer } from 'apollo-server';

import { connectDB } from './config/db';
import { typeDefs, resolvers } from './modules';
import { authMiddleware } from './utils/auth';
import logger from "./utils/logger";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return authMiddleware(req);
  },
  formatError: (error) => {
    logger.error(error)
    return error
  }
});

connectDB().then(_ => {
  server.listen().then(({ url }) => {
    logger.info(`🚀 Server ready at ${url}`);
  });
});

