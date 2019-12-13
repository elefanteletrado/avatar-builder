import { AvatarPartType } from '../enums/avatar-part-type.enum';
import { AvatarPartModel } from './avatar-part-model';

export class AvatarPartDefinition {
  public name: string;
  public type: AvatarPartType;
  public data: AvatarPartModel;
  public _prevData: AvatarPartModel;
}
