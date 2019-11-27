import { AvatarPartType } from '../enums/avatar-part-type.enum';
import { AvatarPartModel } from './avatar-part-model';

export class AvatarPartDefinition {
  public x: number;
  public y: number;
  public name: string;
  public type: AvatarPartType;
  public data: AvatarPartModel;
}
