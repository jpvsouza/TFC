import { ObjectSchema } from 'joi';
import ValidationError from '../errors/ValitationError';

export default abstract class DTO<T> {
  private _attributes: T;
  private _validationSchema: ObjectSchema;

  constructor(attributes: T, validationSchema: ObjectSchema) {
    this._attributes = attributes;
    this._validationSchema = validationSchema;

    this.validate();
  }

  private validate(): void {
    const { error } = this._validationSchema.validate(this._attributes);
    if (error) throw ValidationError.fromJoiError(error);
  }

  public getData(): T {
    return { ...this._attributes };
  }
}
