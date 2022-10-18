import { LoginAttributes } from '../@types';
import DTO from './DTO';
import { loginSchema } from './JoiSchemas';

export default class LoginDTO extends DTO<LoginAttributes> {
  constructor(attributos: LoginAttributes) {
    super(attributos, loginSchema);
  }
}
