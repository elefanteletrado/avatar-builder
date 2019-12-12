import { AvatarPartDefinition } from './avatar-part-definition';
import { AvatarPartType } from '../enums/avatar-part-type.enum';
import { AvatarPartModel } from './avatar-part-model';

export class Avatar {
  public name: string = 'unnamed';
  public parts: Array<AvatarPartDefinition> = [];

  constructor() {
    //Todo: get from configuration ??
    this.parts[AvatarPartType.arm] = { name: "Bobbys arm", type: AvatarPartType.arm, data: new AvatarPartModel() };
    this.parts[AvatarPartType.body] = { name: "Bobbys body", type: AvatarPartType.body, data: new AvatarPartModel() };
    this.parts[AvatarPartType.eyes] = { name: "Bobbys eyes", type: AvatarPartType.eyes, data: new AvatarPartModel() };
    this.parts[AvatarPartType.foot] = { name: "Bobbys foot", type: AvatarPartType.foot, data: new AvatarPartModel() };
    this.parts[AvatarPartType.glasses] = { name: "Bobbys glasses", type: AvatarPartType.glasses, data: new AvatarPartModel() };
    this.parts[AvatarPartType.hair] = { name: "Bobbys hair", type: AvatarPartType.hair, data: new AvatarPartModel() };
    this.parts[AvatarPartType.lowerBody] = { name: "Bobbys lower", type: AvatarPartType.lowerBody, data: new AvatarPartModel() };
    this.parts[AvatarPartType.mouth] = { name: "Bobbys mouth", type: AvatarPartType.mouth, data: new AvatarPartModel() };
    this.parts[AvatarPartType.nose] = { name: "Bobbys nose", type: AvatarPartType.nose, data: new AvatarPartModel() };
    this.parts[AvatarPartType.upperBody] = { name: "Bobbys upper", type: AvatarPartType.upperBody, data: new AvatarPartModel() };
  }
}
