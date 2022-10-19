import { RequestHandler } from 'express';
import ValidationError from '../errors/ValitationError';
import Token from '../utils/Token';
import { JwtPayload } from '../@types';

const authenticate: RequestHandler = async (req, _res, next) => {
  const { headers: { authorization } } = req;

  // Checa se foi enviado um token no header da requisição
  if (!authorization) return next(ValidationError.tokenNotFound);

  // Caso tenha sido enviado, testa se o token é um token válido
  try {
    const { id } = Token.validate(authorization) as JwtPayload;
    req.headers.userId = id;
    return next();

  // Dispara um erro caso o token seja inválido
  } catch (err) {
    return next(ValidationError.invalidToken);
  }
};

export default authenticate;
