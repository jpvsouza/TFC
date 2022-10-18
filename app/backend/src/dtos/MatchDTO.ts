import { MatchAttributes } from '../@types';
import DTO from './DTO';
import { matchSchema } from './JoiSchemas';

export default class MatchDTO extends DTO<MatchAttributes> {
  constructor(attributes: MatchAttributes) {
    super(attributes, matchSchema);
  }
}
