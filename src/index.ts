import { ApolloServer } from 'apollo-server';

import { connectDB } from './config/db.js';
import { typeDefs, resolvers } from './modules/index.js';
import { authMiddleware } from './utils/auth.js';

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

