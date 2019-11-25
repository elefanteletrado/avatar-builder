import { AvatarPartType } from '../enums/avatar-part-type.enum';

export class AvatarPartModel {
  public id: number;
  public type: AvatarPartType;
  public imageFile: string;
  public name: string;
}
