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
  public disableTypes: Array<number>; // List of types that are disabled when this part is selected;
  public disableParts: Array<number>; // List of individual parts (by id) that are disabled when this part is selected;

  constructor();
  constructor(_id: number, _type: AvatarPartType, _imageFile: string);
  constructor(_id: number, _type: AvatarPartType, _imageFile: string, _disableTypes: Array<number>);
  constructor(_id: number, _type: AvatarPartType, _imageFile: string, _disableTypes: Array<number>, _disableParts: Array<number>);

  constructor(_id?: number, _type?: AvatarPartType, _imageFile?: string, _disableTypes?: Array<number>, _disableParts?: Array<number>) {
    this.id = _id ? _id : 0;
    this.type = _type ? _type : AvatarPartType.none;
    this.imageFile = _imageFile ? _imageFile : 'null.svg';

    this.enabled = true;
    this.name = '';
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.disableTypes = _disableTypes ? _disableTypes : [];
    this.disableParts = _disableParts ? _disableParts : [];
  }

  hasDisableTypeRules(): boolean {
    return this.disableTypes.length > 0;
  }
}
