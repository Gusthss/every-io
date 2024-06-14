import { IUser } from './user.model.js';
import { AuthenticationError } from 'apollo-server';
import * as userRepository from './user.repository.js';
import * as auth from '../../utils/auth.js';

export async function register(_: any, user: IUser) {
  const newUser = await userRepository.createUser(user);
  return auth.sign({ id: newUser._id });
}

export async function login(_: any, { username, password }: IUser) {
  const user = await userRepository.findUser(username);
  if (!user) throw new AuthenticationError('Invalid credentials');
  const valid = await auth.compare(password, user.password);
  if (!valid) throw new AuthenticationError('Invalid credentials');
  return auth.sign({ id: user._id });
}
