import { AvatarPartType } from '../enums/avatar-part-type.enum';

export class AvatarPartModel {
  public id: number;
  public enabled: boolean;
  public type: AvatarPartType;
  public imageFile: string;
  public name: string;
  public x: number;
  public y: number;
  public z: number;
}
