import { ApolloServer } from 'apollo-server';

import { connectDB } from './config/db';
import { typeDefs, resolvers } from './modules';
import { authMiddleware } from './utils/auth';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return authMiddleware(req);
  },
});

connectDB().then(_ => {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});

