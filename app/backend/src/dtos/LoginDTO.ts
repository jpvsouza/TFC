import { LoginAttributes } from '../@types';
import DTO from './DTO';
import { loginSchema } from './JoiSchemas';

class LoginDTO extends DTO<LoginAttributes> {
  constructor(attributes: LoginAttributes) {
    super(attributes, loginSchema);
  }
}

export default LoginDTO;
