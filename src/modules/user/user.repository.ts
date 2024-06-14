import User, { IUser } from './user.model';

export async function createUser(user: IUser) {
  const userModel = new User(user);
  return userModel.save();
}

export async function findUser(username: string) {
  return User.findOne({ username });
}
