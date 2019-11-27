import { AvatarPartDefinition } from './avatar-part-definition';
import { AvatarPartType } from '../enums/avatar-part-type.enum';
import { AvatarPartModel } from './avatar-part-model';

export class Avatar {
  public parts: Array<AvatarPartDefinition>;

  constructor() {
    //Todo: get from configuration
    this.parts = new Array<AvatarPartDefinition>();
    this.parts = [
      { x:-14, y:0, name: "Bobbys body", type: AvatarPartType.body, data: new AvatarPartModel() },
      { x:-4, y:-20, name: "Bobbys hat", type: AvatarPartType.hat, data: new AvatarPartModel() },
      { x:2, y:-6, name: "Bobbys hair", type: AvatarPartType.hair, data: new AvatarPartModel() },
      { x:0, y:34, name: "Bobbys Up", type: AvatarPartType.upperBody, data: new AvatarPartModel() },
      { x:-2, y:106, name: "Bobbys Low", type: AvatarPartType.lowerBody, data: new AvatarPartModel() }
    ];
  }

}
