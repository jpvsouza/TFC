import { sign, verify, SignOptions } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';
import IUserJWT from './IUserJWT';

export default class Token {
  private static secret = process.env.JWT_SECRET as string;

  private static option: SignOptions = { algorithm: 'HS256', expiresIn: '7d' };

  public static create(userId: number) {
    return sign({ userId }, this.secret, this.option);
  }

  public static validate(token: string) {
    return verify(token, this.secret);
  }

  public static decodeUser = (token: string) => {
    const { user } = jwt.verify(token, this.secret) as IUserJWT;
    return user;
  };
}
