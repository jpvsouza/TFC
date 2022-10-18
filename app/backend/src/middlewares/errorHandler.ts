import { ErrorRequestHandler } from 'express';
import ExpressError from '../errors/ExpressError';

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  const { statusCode, message } = error as ExpressError;
  if (statusCode) return res.status(statusCode).json({ message });

  return res.status(500).json({ error });
};

export default errorHandler;
