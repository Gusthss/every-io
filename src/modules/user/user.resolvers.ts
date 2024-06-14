import { login, register } from './user.service';

export const userResolvers = {
  Mutation: {
    register,
    login,
  },
};
