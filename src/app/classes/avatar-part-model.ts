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
  public visible: boolean;
  public fullImagePath: string;

  private props: Array<string> = [];
  public wheelChair: boolean;

  constructor();
  constructor(_id: number, _type: AvatarPartType, _imageFile: string);
  constructor(_id: number, _type: AvatarPartType, _imageFile: string, _props: string);

  constructor(_id?: number, _type?: AvatarPartType, _imageFile?: string, _props?: string) {
    this.visible = true;
    this.id = _id ? _id : 0;
    this.type = _type ? _type : AvatarPartType.none;
    this.imageFile = _imageFile ? _imageFile : 'null.svg';
    this.enabled = true;
    this.name = '';
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.fullImagePath = 'assets/parts/' + AvatarPartType[this.type] + '/' + this.imageFile
    this.setProps(_props);
  }

  setProps(newProps?: string) {
    this.props = newProps ? newProps.split(';') : [];
    this.wheelChair = this.props.includes('wheelchair');
  }

  hasProps(prop: string) {
    return this.props.includes(prop);
  }
}
