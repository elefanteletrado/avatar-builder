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

  // isso deve vir de um repositório, seja um json ou um banco de dados
  private availableParts: Array<AvatarPartModel> = [
    { id: 0, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_01A.svg', x: 0, y: 0, z: 0 },
    { id: 1, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_01B.svg', x: 0, y: 0, z: 0 },
    { id: 2, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_01C.svg', x: 0, y: 0, z: 0 },
    { id: 3, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_02A.svg', x: 0, y: 0, z: 0 },
    { id: 4, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_02B.svg', x: 0, y: 0, z: 0 },
    { id: 5, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_02C.svg', x: 0, y: 0, z: 0 },
    { id: 6, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_03A.svg', x: 0, y: 0, z: 0 },
    { id: 7, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_03B.svg', x: 0, y: 0, z: 0 },
    { id: 8, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_03C.svg', x: 0, y: 0, z: 0 },
    { id: 9, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_04A.svg', x: 0, y: 0, z: 0 },
    { id: 10, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_04B.svg', x: 0, y: 0, z: 0 },
    { id: 11, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_04C.svg', x: 0, y: 0, z: 0 },
    { id: 12, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_01A.svg', x: 0, y: 0, z: 0 },
    { id: 13, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_01B.svg', x: 0, y: 0, z: 0 },
    { id: 14, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_01C.svg', x: 0, y: 0, z: 0 },
    { id: 15, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_02A.svg', x: 0, y: 0, z: 0 },
    { id: 16, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_02B.svg', x: 0, y: 0, z: 0 },
    { id: 17, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_02C.svg', x: 0, y: 0, z: 0 },
    { id: 18, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_03A.svg', x: 0, y: 0, z: 0 },
    { id: 19, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_03B.svg', x: 0, y: 0, z: 0 },
    { id: 20, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_03C.svg', x: 0, y: 0, z: 0 },
    { id: 21, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_04A.svg', x: 0, y: 0, z: 0 },
    { id: 22, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_04B.svg', x: 0, y: 0, z: 0 },
    { id: 23, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_04C.svg', x: 0, y: 0, z: 0 },
    { id: 24, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_01A.svg', x: 0, y: 0, z: 0 },
    { id: 25, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_01B.svg', x: 0, y: 0, z: 0 },
    { id: 26, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_01C.svg', x: 0, y: 0, z: 0 },
    { id: 27, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_01D.svg', x: 0, y: 0, z: 0 },
    { id: 28, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_02A.svg', x: 0, y: 0, z: 0 },
    { id: 29, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_02B.svg', x: 0, y: 0, z: 0 },
    { id: 30, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_02C.svg', x: 0, y: 0, z: 0 },
    { id: 31, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_02D.svg', x: 0, y: 0, z: 0 },
    { id: 32, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_03A.svg', x: 0, y: 0, z: 0 },
    { id: 33, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_03B.svg', x: 0, y: 0, z: 0 },
    { id: 34, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_03C.svg', x: 0, y: 0, z: 0 },
    { id: 35, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_03D.svg', x: 0, y: 0, z: 0 },
    { id: 36, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_04A.svg', x: 0, y: 0, z: 0 },
    { id: 37, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_04B.svg', x: 0, y: 0, z: 0 },
    { id: 38, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_04C.svg', x: 0, y: 0, z: 0 },
    { id: 39, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_04D.svg', x: 0, y: 0, z: 0 },
    { id: 40, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Chinelos_01.svg', x: 0, y: 0, z: 0 },
    { id: 41, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Rasteirinhas_01.svg', x: 0, y: 0, z: 0 },
    { id: 42, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Sandalias_01.svg', x: 0, y: 0, z: 0 },
    { id: 43, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Sapatenis_01.svg', x: 0, y: 0, z: 0 },
    { id: 44, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Tenis_01.svg', x: 0, y: 0, z: 0 },
    { id: 45, enabled: true, name: '', type: AvatarPartType.glasses, imageFile: 'Elefante_Avatar_Oculos_01.svg', x: 0, y: 0, z: 0 },
    { id: 46, enabled: true, name: '', type: AvatarPartType.glasses, imageFile: 'Elefante_Avatar_Oculos_02.svg', x: 0, y: 0, z: 0 },
    { id: 47, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_01A.svg', x: 0, y: 0, z: 0 },
    { id: 48, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_01B.svg', x: 0, y: 0, z: 0 },
    { id: 49, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_01C.svg', x: 0, y: 0, z: 0 },
    { id: 50, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_01D.svg', x: 0, y: 0, z: 0 },
    { id: 51, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_01E.svg', x: 0, y: 0, z: 0 },
    { id: 52, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_02A.svg', x: 0, y: 0, z: 0 },
    { id: 53, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_02B.svg', x: 0, y: 0, z: 0 },
    { id: 54, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_02C.svg', x: 0, y: 0, z: 0 },
    { id: 55, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_02D.svg', x: 0, y: 0, z: 0 },
    { id: 56, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_02E.svg', x: 0, y: 0, z: 0 },
    { id: 57, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_03A.svg', x: 0, y: 0, z: 0 },
    { id: 58, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_03B.svg', x: 0, y: 0, z: 0 },
    { id: 59, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_03C.svg', x: 0, y: 0, z: 0 },
    { id: 60, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_03D.svg', x: 0, y: 0, z: 0 },
    { id: 61, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_03E.svg', x: 0, y: 0, z: 0 },
    { id: 62, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_04A.svg', x: 0, y: 0, z: 0 },
    { id: 63, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_04B.svg', x: 0, y: 0, z: 0 },
    { id: 64, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_04C.svg', x: 0, y: 0, z: 0 },
    { id: 65, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_04D.svg', x: 0, y: 0, z: 0 },
    { id: 66, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_04E.svg', x: 0, y: 0, z: 0 },
    { id: 67, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_05A.svg', x: 0, y: 0, z: 0 },
    { id: 68, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_05B.svg', x: 0, y: 0, z: 0 },
    { id: 69, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_05C.svg', x: 0, y: 0, z: 0 },
    { id: 70, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_05D.svg', x: 0, y: 0, z: 0 },
    { id: 71, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_05E.svg', x: 0, y: 0, z: 0 },
    { id: 72, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_06A.svg', x: 0, y: 0, z: 0 },
    { id: 73, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_06B.svg', x: 0, y: 0, z: 0 },
    { id: 74, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_06C.svg', x: 0, y: 0, z: 0 },
    { id: 75, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_06D.svg', x: 0, y: 0, z: 0 },
    { id: 76, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_06E.svg', x: 0, y: 0, z: 0 },
    { id: 77, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_07A.svg', x: 0, y: 0, z: 0 },
    { id: 78, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_07B.svg', x: 0, y: 0, z: 0 },
    { id: 79, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_07C.svg', x: 0, y: 0, z: 0 },
    { id: 80, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_07D.svg', x: 0, y: 0, z: 0 },
    { id: 81, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_07E.svg', x: 0, y: 0, z: 0 },
    { id: 82, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_08A.svg', x: 0, y: 0, z: 0 },
    { id: 83, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_08B.svg', x: 0, y: 0, z: 0 },
    { id: 84, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_08C.svg', x: 0, y: 0, z: 0 },
    { id: 85, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_08D.svg', x: 0, y: 0, z: 0 },
    { id: 86, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_08E.svg', x: 0, y: 0, z: 0 },
    { id: 87, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_09A.svg', x: 0, y: 0, z: 0 },
    { id: 88, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_09B.svg', x: 0, y: 0, z: 0 },
    { id: 89, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_09C.svg', x: 0, y: 0, z: 0 },
    { id: 90, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_09D.svg', x: 0, y: 0, z: 0 },
    { id: 91, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_09E.svg', x: 0, y: 0, z: 0 },
    { id: 92, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_10A.svg', x: 0, y: 0, z: 0 },
    { id: 93, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_10B.svg', x: 0, y: 0, z: 0 },
    { id: 94, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_10C.svg', x: 0, y: 0, z: 0 },
    { id: 95, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_10D.svg', x: 0, y: 0, z: 0 },
    { id: 96, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_10E.svg', x: 0, y: 0, z: 0 },
    { id: 97, enabled: true, name: '', type: AvatarPartType.lowerBody, imageFile: 'Elefante_Avatar_Bermuda_01.svg', x: 0, y: 0, z: 0 },
    { id: 98, enabled: true, name: '', type: AvatarPartType.lowerBody, imageFile: 'Elefante_Avatar_Calca_01.svg', x: 0, y: 0, z: 0 },
    { id: 99, enabled: true, name: '', type: AvatarPartType.lowerBody, imageFile: 'Elefante_Avatar_Calca_02.svg', x: 0, y: 0, z: 0 },
    { id: 100, enabled: true, name: '', type: AvatarPartType.lowerBody, imageFile: 'Elefante_Avatar_Saia_01.svg', x: 0, y: 0, z: 0 },
    { id: 101, enabled: true, name: '', type: AvatarPartType.mouth, imageFile: 'Elefante_Avatar_Boca_01.svg', x: 0, y: 0, z: 0 },
    { id: 102, enabled: true, name: '', type: AvatarPartType.mouth, imageFile: 'Elefante_Avatar_Boca_02.svg', x: 0, y: 0, z: 0 },
    { id: 103, enabled: true, name: '', type: AvatarPartType.mouth, imageFile: 'Elefante_Avatar_Boca_03.svg', x: 0, y: 0, z: 0 },
    { id: 104, enabled: true, name: '', type: AvatarPartType.mouth, imageFile: 'Elefante_Avatar_Boca_04.svg', x: 0, y: 0, z: 0 },
    { id: 105, enabled: true, name: '', type: AvatarPartType.nose, imageFile: 'Elefante_Avatar_Nariz_01.svg', x: 0, y: 0, z: 0 },
    { id: 106, enabled: true, name: '', type: AvatarPartType.nose, imageFile: 'Elefante_Avatar_Nariz_02.svg', x: 0, y: 0, z: 0 },
    { id: 107, enabled: true, name: '', type: AvatarPartType.upperBody, imageFile: 'Elefante_Avatar_Blusa_01.svg', x: 0, y: 0, z: 0 },
    { id: 108, enabled: true, name: '', type: AvatarPartType.upperBody, imageFile: 'Elefante_Avatar_Camiseta_01.svg', x: 0, y: 0, z: 0 },
    { id: 109, enabled: true, name: '', type: AvatarPartType.upperBody, imageFile: 'Elefante_Avatar_Vestido_01.svg', x: 0, y: 0, z: 0 }
  ];

  private avatarPartConfig: Array<any> = [];

  initializeAvatar() {
    // todo: montar dinamicamente conforme this.availableParts (cada currentIndex vem do objeto salvo para o aluno)
    this.avatarPartConfig[AvatarPartType.body] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.body).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.eyes] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.eyes).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.foot] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.foot).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.glasses] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.glasses).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.hair] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.hair).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.lowerBody] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.lowerBody).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.mouth] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.mouth).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.nose] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.nose).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.upperBody] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.upperBody).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.arm] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.arm).length, currentIndex: 0 };

    console.log('this.avatarPartConfig', this.avatarPartConfig);
    this.avatar = new Avatar();
    this.avatar.parts.forEach(p => {
      p.data = this.getPartModelForType(p.type);
    });
    console.log('this.avatar', this.avatar);
  }

  setAvatarPartModelToCurrentConfigIndex(type: AvatarPartType) {
    this.avatar.parts[type].data = this.getPartModelForType(type);
    console.log('this.avatar.parts[type].data', type, this.avatar.parts[type].data);
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
