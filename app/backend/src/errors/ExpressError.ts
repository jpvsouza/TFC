import { ValidationError } from 'joi';

export default class ExpressError extends Error {
  protected _statusCode: number;

  constructor(statusCode: number, message: string, name?: string) {
    super(message);
    this._statusCode = statusCode;
    this.name = name || 'Express Error';
  }

  public get statusCode() { return this._statusCode; }

  public static fromJoiError(error: ValidationError): ExpressError {
    const [code, message] = error.details[0].message.split('|');
    return new ExpressError(Number(code), message);
  }
}
