import { NextFunction, Request, Response } from 'express';
import User from '../database/models/UsersModel';

const model = User;

export default async function loginValido(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  const REGEX = /\S+@\S+\.\S+/;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const user = await model.findOne({ where: { email } });

  if (!user || !REGEX.test(email)) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
}
