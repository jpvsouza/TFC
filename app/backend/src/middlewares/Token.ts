import { sign, verify, SignOptions } from 'jsonwebtoken';

export default class Token {
  private static secret = process.env.JWT_SECRET as string;

  private static option: SignOptions = { algorithm: 'HS256', expiresIn: '7d' };

  public static create(id: number) {
    return sign({ id }, this.secret, this.option);
  }

  public static validate(token: string) {
    return verify(token, this.secret);
  }
}
