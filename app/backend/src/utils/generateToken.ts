import * as jwt from 'jsonwebtoken';
import { Secret, SignOptions } from 'jsonwebtoken';
import ValidationError from '../errors/ValitationError';
import IJWTPayload from './jwtPayload';

const SECRET: Secret = process.env.JWT_SECRET || 'regular_plant';

const generateToken = (id: number | undefined, email: string) => {
  const JWT_CONFIG: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ id, email }, SECRET, JWT_CONFIG);

  return token;
};

export const validateToken = (token: string): IJWTPayload => {
  try {
    const { id } = jwt.verify(token, SECRET) as IJWTPayload;

    return { id };
  } catch (err) {
    throw ValidationError.invalidToken;
  }
};

export default generateToken;
