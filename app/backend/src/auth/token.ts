import * as jwt from 'jsonwebtoken';
import ITokenPayload from '../interfaces/ITokenPayload';

const newToken = (payload: ITokenPayload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET || 'jwt_secret', { expiresIn: '7d' });
  return token;
};

export default newToken;
