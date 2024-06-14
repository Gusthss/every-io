import { login, register } from './user.service.js';

export const userResolvers = {
  Mutation: {
    register,
    login,
  },
};
