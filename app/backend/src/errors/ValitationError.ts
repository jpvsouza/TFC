import ExpressError from './ExpressError';

export default class ValidationError extends ExpressError {
  public static readonly tokenNotFound = new ValidationError(401, 'Token not found');
  public static readonly invalidToken = new ValidationError(401, 'Token must be a valid token');

  constructor(statusCode: number, message: string) {
    super(statusCode, message, 'Validation Error');
  }
}
