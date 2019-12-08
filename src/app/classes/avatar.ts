import { AvatarPartDefinition } from './avatar-part-definition';
import { AvatarPartType } from '../enums/avatar-part-type.enum';
import { AvatarPartModel } from './avatar-part-model';

export class Avatar {
  public name: string = 'unnamed';
  public parts: Array<AvatarPartDefinition> = [];

  constructor() {
    //Todo: get from configuration ??
    this.parts[AvatarPartType.accessories] = { x: 0, y: 0, name: "Bobbys accessories", type: AvatarPartType.accessories, data: new AvatarPartModel() };
    this.parts[AvatarPartType.arm] = { x: 0, y: 0, name: "Bobbys arm", type: AvatarPartType.arm, data: new AvatarPartModel() };
    this.parts[AvatarPartType.body] = { x: 0, y: 0, name: "Bobbys body", type: AvatarPartType.body, data: new AvatarPartModel() };
    this.parts[AvatarPartType.eyes] = { x: 0, y: -76, name: "Bobbys eyes", type: AvatarPartType.eyes, data: new AvatarPartModel() };
    this.parts[AvatarPartType.foot] = { x: 0, y: 108, name: "Bobbys foot", type: AvatarPartType.foot, data: new AvatarPartModel() };
    this.parts[AvatarPartType.glasses] = { x: 0, y: -76, name: "Bobbys glasses", type: AvatarPartType.glasses, data: new AvatarPartModel() };
    this.parts[AvatarPartType.hair] = { x: 0, y: -93, name: "Bobbys hair", type: AvatarPartType.hair, data: new AvatarPartModel() };
    this.parts[AvatarPartType.hat] = { x: 0, y: 0, name: "Bobbys hat", type: AvatarPartType.hat, data: new AvatarPartModel() };
    this.parts[AvatarPartType.lowerBody] = { x: 0, y: 30, name: "Bobbys lower", type: AvatarPartType.lowerBody, data: new AvatarPartModel() };
    this.parts[AvatarPartType.mouth] = { x: 0, y: 0, name: "Bobbys mouth", type: AvatarPartType.mouth, data: new AvatarPartModel() };
    this.parts[AvatarPartType.nose] = { x: 0, y: 0, name: "Bobbys nose", type: AvatarPartType.nose, data: new AvatarPartModel() };
    this.parts[AvatarPartType.upperBody] = { x: 0, y: -13, name: "Bobbys upper", type: AvatarPartType.upperBody, data: new AvatarPartModel() };
  }
}
