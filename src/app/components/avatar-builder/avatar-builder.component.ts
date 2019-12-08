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
    //{ id: 101, enabled: false, name: '', type: AvatarPartType.accessories, imageFile: 'Elefante_Avatar_Cadeira_de_Rodas_Inteira.svg' },
    //{ id: 102, enabled: false, name: '', type: AvatarPartType.accessories, imageFile: 'Elefante_Avatar_Cadeira_de_Rodas_ParteFrente.svg' },

    { id: 201, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_01A.svg' },
    //{ id: 202, enabled: false, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_01B.svg' },
    { id: 203, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_02A.svg' },
    //{ id: 204, enabled: false, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_02B.svg' },
    { id: 205, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_03A.svg' },
    //{ id: 206, enabled: false, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_03B.svg' },
    { id: 207, enabled: true, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_04A.svg' },
    //{ id: 208, enabled: false, name: '', type: AvatarPartType.body, imageFile: 'Elefante_Avatar_Corpo_04B.svg' },

    { id: 301, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_01A.svg' },
    { id: 302, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_01B.svg' },
    { id: 303, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_01C.svg' },
    { id: 304, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_02A.svg' },
    { id: 305, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_02B.svg' },
    { id: 306, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_02C.svg' },
    { id: 307, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_03A.svg' },
    { id: 308, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_03B.svg' },
    { id: 309, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_03C.svg' },
    { id: 310, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_04A.svg' },
    { id: 311, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_04B.svg' },
    { id: 312, enabled: true, name: '', type: AvatarPartType.arm, imageFile: 'Elefante_Avatar_Braco_04C.svg' },

    { id: 401, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_01A.svg' },
    { id: 402, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_01B.svg' },
    { id: 403, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_01C.svg' },
    { id: 404, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_01D.svg' },
    { id: 405, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_02A.svg' },
    { id: 406, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_02B.svg' },
    { id: 407, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_02C.svg' },
    { id: 408, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_02D.svg' },
    { id: 409, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_03A.svg' },
    { id: 410, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_03B.svg' },
    { id: 411, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_03C.svg' },
    { id: 412, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_03D.svg' },
    { id: 413, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_04A.svg' },
    { id: 414, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_04B.svg' },
    { id: 415, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_04C.svg' },
    { id: 416, enabled: true, name: '', type: AvatarPartType.eyes, imageFile: 'Elefante_Avatar_Olhos_04D.svg' },

    { id: 501, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Chinelos_01.svg' },
    { id: 502, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Rasteirinha_01.svg' },
    { id: 503, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Sandalha_01.svg' },
    { id: 504, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Sapatenis_01.svg' },
    { id: 505, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Sapatenis_01B.svg' },
    { id: 506, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Tenis_01.svg' },
    { id: 507, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Tenis_01B.svg' },
    { id: 508, enabled: true, name: '', type: AvatarPartType.foot, imageFile: 'Elefante_Avatar_Tenis_02B.svg' },

    { id: 601, enabled: true, name: '', type: AvatarPartType.glasses, imageFile: 'Elefante_Avatar_Oculos_01.svg' },
    { id: 602, enabled: true, name: '', type: AvatarPartType.glasses, imageFile: 'Elefante_Avatar_Oculos_02.svg' },

    { id: 701, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_01A.svg' },
    { id: 702, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_01B.svg' },

    { id: 801, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_01C.svg' },
    { id: 802, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_01D.svg' },
    { id: 803, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_01E.svg' },
    { id: 804, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_02A.svg' },
    { id: 805, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_02B.svg' },
    { id: 806, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_02C.svg' },
    { id: 807, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_02D.svg' },
    { id: 808, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_02E.svg' },
    { id: 809, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_03A.svg' },
    { id: 810, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_03B.svg' },
    { id: 811, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_03C.svg' },
    { id: 812, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_03D.svg' },
    { id: 813, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_03E.svg' },
    { id: 814, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_04A.svg' },
    { id: 815, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_04B.svg' },
    { id: 816, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_04C.svg' },
    { id: 817, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_04D.svg' },
    { id: 818, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_04E.svg' },
    { id: 819, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_01A.svg' },
    { id: 820, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_01B.svg' },
    { id: 821, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_01C.svg' },
    { id: 822, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_01D.svg' },
    { id: 823, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_01E.svg' },
    { id: 824, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_02A.svg' },
    { id: 825, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_02B.svg' },
    { id: 826, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_02C.svg' },
    { id: 827, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_02D.svg' },
    { id: 828, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_02E.svg' },
    { id: 829, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_03A.svg' },
    { id: 830, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_03B.svg' },
    { id: 831, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_03C.svg' },
    { id: 832, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_03D.svg' },
    { id: 833, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_03E.svg' },
    { id: 834, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_04A.svg' },
    { id: 835, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_04B.svg' },
    { id: 836, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_04C.svg' },
    { id: 837, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_04D.svg' },
    { id: 838, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_04E.svg' },
    { id: 839, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_05A.svg' },
    { id: 840, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_05B.svg' },
    { id: 841, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_05C.svg' },
    { id: 842, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_05D.svg' },
    { id: 843, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_05E.svg' },
    { id: 844, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_06A.svg' },
    { id: 845, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_06B.svg' },
    { id: 846, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_06C.svg' },
    { id: 847, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_06D.svg' },
    { id: 848, enabled: true, name: '', type: AvatarPartType.hair, imageFile: 'Elefante_Avatar_Cabelo_F_06E.svg' },

    { id: 901, enabled: true, name: '', type: AvatarPartType.lowerBody, imageFile: 'Elefante_Avatar_Bermuda_01.svg' },
    { id: 902, enabled: true, name: '', type: AvatarPartType.lowerBody, imageFile: 'Elefante_Avatar_Calca_01.svg' },
    { id: 903, enabled: true, name: '', type: AvatarPartType.lowerBody, imageFile: 'Elefante_Avatar_Calca_01B.svg' },
    { id: 904, enabled: true, name: '', type: AvatarPartType.lowerBody, imageFile: 'Elefante_Avatar_Calca_02.svg' },
    { id: 905, enabled: true, name: '', type: AvatarPartType.lowerBody, imageFile: 'Elefante_Avatar_Calca_02B.svg' },
    { id: 906, enabled: true, name: '', type: AvatarPartType.lowerBody, imageFile: 'Elefante_Avatar_Saia_01.svg' },

    { id: 930, enabled: true, name: '', type: AvatarPartType.mouth, imageFile: 'Elefante_Avatar_Boca_01.svg' },
    { id: 931, enabled: true, name: '', type: AvatarPartType.mouth, imageFile: 'Elefante_Avatar_Boca_02.svg' },
    { id: 932, enabled: true, name: '', type: AvatarPartType.mouth, imageFile: 'Elefante_Avatar_Boca_03.svg' },
    { id: 933, enabled: true, name: '', type: AvatarPartType.mouth, imageFile: 'Elefante_Avatar_Boca_04.svg' },

    { id: 940, enabled: true, name: '', type: AvatarPartType.nose, imageFile: 'Elefante_Avatar_Nariz_01.svg' },
    { id: 941, enabled: true, name: '', type: AvatarPartType.nose, imageFile: 'Elefante_Avatar_Nariz_02.svg' },

    { id: 951, enabled: true, name: '', type: AvatarPartType.upperBody, imageFile: 'Elefante_Avatar_Blusa_01.svg' },
    { id: 952, enabled: true, name: '', type: AvatarPartType.upperBody, imageFile: 'Elefante_Avatar_Camiseta_01.svg' },
    { id: 953, enabled: true, name: '', type: AvatarPartType.upperBody, imageFile: 'Elefante_Avatar_Vestido_01.svg' }
  ];


  private avatarPartConfig: Array<any> = [];

  initializeAvatar() {
    // todo: montar dinamicamente conforme this.availableParts (cada currentIndex vem do objeto salvo para o aluno)
    this.avatarPartConfig[AvatarPartType.accessories] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.accessories).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.body] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.body).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.eyes] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.eyes).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.foot] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.foot).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.glasses] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.glasses).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.hair] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.hair).length, currentIndex: 0 };
    this.avatarPartConfig[AvatarPartType.hat] = { totalParts: this.availableParts.filter(t => t.type == AvatarPartType.hat).length, currentIndex: 0 };
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
