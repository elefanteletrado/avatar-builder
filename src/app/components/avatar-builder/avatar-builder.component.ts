import { Component, OnInit } from '@angular/core';
import { AvatarPartModel } from '../../classes/avatar-part-model';
import { AvatarPartType } from 'src/app/enums/avatar-part-type.enum';
import { Avatar } from '../../classes/avatar';

@Component({
  selector: 'app-avatar-builder',
  templateUrl: './avatar-builder.component.html',
  styleUrls: ['./avatar-builder.component.sass']
})
export class AvatarBuilderComponent implements OnInit {

  private avatar: Avatar;

  constructor() { }

  ngOnInit() {
    this.initializeAvatar();
  }

  private availableParts: Array<AvatarPartModel> = [
    { id: 1, name: 'Dummy', type: AvatarPartType.body, imageFile: '01.png' },
    { id: 2, name: 'Guy', type: AvatarPartType.body, imageFile: '02.png' },

    { id: 11, name: 'Elegant', type: AvatarPartType.hat, imageFile: 'elegant.png' },
    { id: 12, name: 'Cap', type: AvatarPartType.hat, imageFile: 'cap.png' },
    { id: 13, name: 'Cowboy', type: AvatarPartType.hat, imageFile: 'cowboy.png' },

    { id: 24, name: 'Short', type: AvatarPartType.hair, imageFile: 'short-hair-01.png' },
    { id: 25, name: 'Long', type: AvatarPartType.hair, imageFile: 'long-01.png' },
    { id: 26, name: 'Punk', type: AvatarPartType.hair, imageFile: 'punk-01.png' },

    { id: 37, name: 'Shirt', type: AvatarPartType.upperBody, imageFile: 'shirt-01.png' },
    { id: 38, name: 'Long Sleeve', type: AvatarPartType.upperBody, imageFile: 'shirt-02.png' },
    { id: 39, name: 'Dress', type: AvatarPartType.upperBody, imageFile: 'dress-01.png' },

    { id: 40, name: 'Shorts', type: AvatarPartType.lowerBody, imageFile: 'shorts-01.png' },
    { id: 41, name: 'Pants', type: AvatarPartType.lowerBody, imageFile: 'pants-01.png' },
    { id: 42, name: 'Skirt', type: AvatarPartType.lowerBody, imageFile: 'skirt-01.png' },

  ];


  private avatarPartConfig: Array<any> = [];

  initializeAvatar() {
    // todo: montar dinamicamente conforme this.availableParts
    this.avatarPartConfig[AvatarPartType.body] = { totalParts: 2, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.hat] = { totalParts: 3, currentIndex: 1 };
    this.avatarPartConfig[AvatarPartType.hair] = { totalParts: 3, currentIndex: 2 };
    this.avatarPartConfig[AvatarPartType.upperBody] = { totalParts: 3, currentIndex: 1 };
    this.avatarPartConfig[AvatarPartType.lowerBody] = { totalParts: 3, currentIndex: 0 };

    console.log('this.avatarPartConfig', this.avatarPartConfig);
    this.avatar = new Avatar();
    this.avatar.parts.forEach(p => {
      p.data = this.getPartModelForType(p.type);
    });
    console.log('this.avatar', this.avatar);
  }

  setAvatarPartModelToCurrentConfigIndex(type: AvatarPartType) {
    console.log('this.avatar.parts', this.avatar.parts);
    this.avatar.parts[type].data = this.getPartModelForType(type);
  }

  getPartModelForType(type: AvatarPartType) {
    // busca na lista de available parts
    // a parte do tipo conforme o índice no
    // avatarPartConfig do mesmo tipo
    let selectedPartIndex = this.getPartConfigByType(type).currentIndex;
    return this.availableParts.filter(a => a.type == type)[selectedPartIndex];
  }

  getPartConfigByType(type: AvatarPartType) {
    return this.avatarPartConfig[type];
  }

  changePart(_type: string, direction: number) {
    let type: number = +_type; // plus sign converts string to number
    let config = this.getPartConfigByType(type);
    config.currentIndex = config.currentIndex + direction;
    if (config.currentIndex >= config.totalParts) {
      config.currentIndex = 0;
    } else {
      if (config.currentIndex < 0) {
        config.currentIndex = config.totalParts - 1;
      }
    }
    this.setAvatarPartModelToCurrentConfigIndex(type);
  }
}
