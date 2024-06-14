import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET_KEY: string = process.env.SECRET_KEY || 'SECRET_KEY';

export const getUser = (token: string) => {
  try {
    if (token) {
      return jwt.verify(token, SECRET_KEY);
    }
    return null;
  } catch (err) {
    return null;
  }
};

export const authMiddleware = (req: any) => {
  const token = req.headers.authorization || '';
  const user = getUser(token);
  return { user };
};

export function sign(value: any): string {
  return jwt.sign(value, SECRET_KEY);
}

export function compare(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

