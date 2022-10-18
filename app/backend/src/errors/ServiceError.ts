import ExpressError from './ExpressError';

export default class ServiceError extends ExpressError {
  public static readonly incorrectLogin = new ServiceError(401, 'Incorrect email or password');

  public static readonly userNotFound = new ServiceError(404, 'User not found');

  public static readonly teamNotFound = new ServiceError(404, 'There is no team with such id');

  public static readonly matchNotFound = new ServiceError(404, 'Match not found');

  public static readonly repeatedTeams = new ServiceError(
    401,
    'It is not possible to create a match with two equal teams',
  );

  constructor(statusCode: number, message: string) {
    super(statusCode, message, 'Service Error');
  }
}
