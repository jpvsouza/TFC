import { JwtPayload } from 'jsonwebtoken';

export default interface IJWTPayload extends JwtPayload {
  id: number;
}
