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

  public avatar: Avatar;
  public selectedPartInfo: string = '-';
  public availableTypes: Array<any>;
  public groupType: string = '7';

  constructor() { }

  ngOnInit() {
    this.initializeAvatar();
  }


  private availableParts: Array<AvatarPartModel> = [];
  private avatarPartConfig: Array<any> = [];

  public typeChangeHandler(val: AvatarPartType) {
    this.groupType = val.toString();
  }

  initializeAvatar() {
    // isso deve vir de um repositório, seja um json ou um banco de dados
    this.availableParts.push(new AvatarPartModel(-1, AvatarPartType.none, 'null.svg'));
    this.availableParts.push(new AvatarPartModel(9000, AvatarPartType.foot, 'null.svg'));
    this.availableParts.push(new AvatarPartModel(9001, AvatarPartType.glasses, 'null.svg'));
    this.availableParts.push(new AvatarPartModel(9002, AvatarPartType.hair, 'null.svg'));

    this.availableParts.push(new AvatarPartModel(0, AvatarPartType.arm, 'Elefante_Avatar_Braco_01A.svg', 'white'));
    this.availableParts.push(new AvatarPartModel(1, AvatarPartType.arm, 'Elefante_Avatar_Braco_01B.svg', 'white'));
    this.availableParts.push(new AvatarPartModel(2, AvatarPartType.arm, 'Elefante_Avatar_Braco_01C.svg', 'white'));
    this.availableParts.push(new AvatarPartModel(3, AvatarPartType.arm, 'Elefante_Avatar_Braco_02A.svg', 'tammed'));
    this.availableParts.push(new AvatarPartModel(4, AvatarPartType.arm, 'Elefante_Avatar_Braco_02B.svg', 'tammed'));
    this.availableParts.push(new AvatarPartModel(5, AvatarPartType.arm, 'Elefante_Avatar_Braco_02C.svg', 'tammed'));
    this.availableParts.push(new AvatarPartModel(6, AvatarPartType.arm, 'Elefante_Avatar_Braco_03A.svg', 'brown'));
    this.availableParts.push(new AvatarPartModel(7, AvatarPartType.arm, 'Elefante_Avatar_Braco_03B.svg', 'brown'));
    this.availableParts.push(new AvatarPartModel(8, AvatarPartType.arm, 'Elefante_Avatar_Braco_03C.svg', 'brown'));
    this.availableParts.push(new AvatarPartModel(9, AvatarPartType.arm, 'Elefante_Avatar_Braco_04A.svg',  'black'));
    this.availableParts.push(new AvatarPartModel(10, AvatarPartType.arm, 'Elefante_Avatar_Braco_04B.svg', 'black'));
    this.availableParts.push(new AvatarPartModel(11, AvatarPartType.arm, 'Elefante_Avatar_Braco_04C.svg', 'black'));

    this.availableParts.forEach(p => { p.z = 1; });

    this.availableParts.push(new AvatarPartModel(12, AvatarPartType.body, 'Elefante_Avatar_Corpo_01A.svg', 'white;'));
    this.availableParts.push(new AvatarPartModel(13, AvatarPartType.body, 'Elefante_Avatar_Corpo_01B.svg', 'white;wheelchair'));
    this.availableParts.push(new AvatarPartModel(14, AvatarPartType.body, 'Elefante_Avatar_Corpo_01C.svg', 'white;wheelchair'));
    this.availableParts.push(new AvatarPartModel(15, AvatarPartType.body, 'Elefante_Avatar_Corpo_02A.svg', 'tammed'));
    this.availableParts.push(new AvatarPartModel(16, AvatarPartType.body, 'Elefante_Avatar_Corpo_02B.svg', 'tammed;wheelchair'));
    this.availableParts.push(new AvatarPartModel(17, AvatarPartType.body, 'Elefante_Avatar_Corpo_02C.svg', 'tammed;wheelchair'));
    this.availableParts.push(new AvatarPartModel(18, AvatarPartType.body, 'Elefante_Avatar_Corpo_03A.svg', 'brown'));
    this.availableParts.push(new AvatarPartModel(19, AvatarPartType.body, 'Elefante_Avatar_Corpo_03B.svg', 'brown;wheelchair'));
    this.availableParts.push(new AvatarPartModel(20, AvatarPartType.body, 'Elefante_Avatar_Corpo_03C.svg', 'brown;wheelchair'));
    this.availableParts.push(new AvatarPartModel(21, AvatarPartType.body, 'Elefante_Avatar_Corpo_04A.svg', 'black'));
    this.availableParts.push(new AvatarPartModel(22, AvatarPartType.body, 'Elefante_Avatar_Corpo_04B.svg', 'black;wheelchair'));
    this.availableParts.push(new AvatarPartModel(23, AvatarPartType.body, 'Elefante_Avatar_Corpo_04C.svg', 'black;wheelchair'));

    this.availableParts.push(new AvatarPartModel(24, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_01A.svg'));
    this.availableParts.push(new AvatarPartModel(25, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_01B.svg'));
    this.availableParts.push(new AvatarPartModel(26, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_01C.svg'));
    this.availableParts.push(new AvatarPartModel(27, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_01D.svg'));
    this.availableParts.push(new AvatarPartModel(28, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_02A.svg'));
    this.availableParts.push(new AvatarPartModel(29, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_02B.svg'));
    this.availableParts.push(new AvatarPartModel(30, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_02C.svg'));
    this.availableParts.push(new AvatarPartModel(31, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_02D.svg'));
    this.availableParts.push(new AvatarPartModel(32, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_03A.svg'));
    this.availableParts.push(new AvatarPartModel(33, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_03B.svg'));
    this.availableParts.push(new AvatarPartModel(34, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_03C.svg'));
    this.availableParts.push(new AvatarPartModel(35, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_03D.svg'));
    this.availableParts.push(new AvatarPartModel(36, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_04A.svg'));
    this.availableParts.push(new AvatarPartModel(37, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_04B.svg'));
    this.availableParts.push(new AvatarPartModel(38, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_04C.svg'));
    this.availableParts.push(new AvatarPartModel(39, AvatarPartType.eyes, 'Elefante_Avatar_Olhos_04D.svg'));
    this.availableParts.push(new AvatarPartModel(40, AvatarPartType.foot, 'Elefante_Avatar_Chinelos_01.svg'));
    this.availableParts.push(new AvatarPartModel(41, AvatarPartType.foot, 'Elefante_Avatar_Rasteirinhas_01.svg'));
    this.availableParts.push(new AvatarPartModel(42, AvatarPartType.foot, 'Elefante_Avatar_Sandalias_01.svg'));
    this.availableParts.push(new AvatarPartModel(43, AvatarPartType.foot, 'Elefante_Avatar_Sapatenis_01.svg'));
    this.availableParts.push(new AvatarPartModel(44, AvatarPartType.foot, 'Elefante_Avatar_Tenis_01.svg'));
    this.availableParts.push(new AvatarPartModel(45, AvatarPartType.glasses, 'Elefante_Avatar_Oculos_01.svg'));
    this.availableParts.push(new AvatarPartModel(46, AvatarPartType.glasses, 'Elefante_Avatar_Oculos_02.svg'));
    this.availableParts.push(new AvatarPartModel(47, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_01A.svg'));
    this.availableParts.push(new AvatarPartModel(48, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_01B.svg'));
    this.availableParts.push(new AvatarPartModel(49, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_01C.svg'));
    this.availableParts.push(new AvatarPartModel(50, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_01D.svg'));
    this.availableParts.push(new AvatarPartModel(51, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_01E.svg'));
    this.availableParts.push(new AvatarPartModel(52, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_02A.svg'));
    this.availableParts.push(new AvatarPartModel(53, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_02B.svg'));
    this.availableParts.push(new AvatarPartModel(54, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_02C.svg'));
    this.availableParts.push(new AvatarPartModel(55, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_02D.svg'));
    this.availableParts.push(new AvatarPartModel(56, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_02E.svg'));
    this.availableParts.push(new AvatarPartModel(57, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_03A.svg'));
    this.availableParts.push(new AvatarPartModel(58, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_03B.svg'));
    this.availableParts.push(new AvatarPartModel(59, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_03C.svg'));
    this.availableParts.push(new AvatarPartModel(60, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_03D.svg'));
    this.availableParts.push(new AvatarPartModel(61, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_03E.svg'));
    this.availableParts.push(new AvatarPartModel(62, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_04A.svg'));
    this.availableParts.push(new AvatarPartModel(63, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_04B.svg'));
    this.availableParts.push(new AvatarPartModel(64, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_04C.svg'));
    this.availableParts.push(new AvatarPartModel(65, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_04D.svg'));
    this.availableParts.push(new AvatarPartModel(66, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_04E.svg'));
    this.availableParts.push(new AvatarPartModel(67, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_05A.svg'));
    this.availableParts.push(new AvatarPartModel(68, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_05B.svg'));
    this.availableParts.push(new AvatarPartModel(69, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_05C.svg'));
    this.availableParts.push(new AvatarPartModel(70, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_05D.svg'));
    this.availableParts.push(new AvatarPartModel(71, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_05E.svg'));
    this.availableParts.push(new AvatarPartModel(72, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_06A.svg'));
    this.availableParts.push(new AvatarPartModel(73, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_06B.svg'));
    this.availableParts.push(new AvatarPartModel(74, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_06C.svg'));
    this.availableParts.push(new AvatarPartModel(75, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_06D.svg'));
    this.availableParts.push(new AvatarPartModel(76, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_06E.svg'));
    this.availableParts.push(new AvatarPartModel(77, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_07A.svg'));
    this.availableParts.push(new AvatarPartModel(78, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_07B.svg'));
    this.availableParts.push(new AvatarPartModel(79, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_07C.svg'));
    this.availableParts.push(new AvatarPartModel(80, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_07D.svg'));
    this.availableParts.push(new AvatarPartModel(81, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_07E.svg'));
    this.availableParts.push(new AvatarPartModel(82, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_08A.svg'));
    this.availableParts.push(new AvatarPartModel(83, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_08B.svg'));
    this.availableParts.push(new AvatarPartModel(84, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_08C.svg'));
    this.availableParts.push(new AvatarPartModel(85, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_08D.svg'));
    this.availableParts.push(new AvatarPartModel(86, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_08E.svg'));
    this.availableParts.push(new AvatarPartModel(87, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_09A.svg'));
    this.availableParts.push(new AvatarPartModel(88, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_09B.svg'));
    this.availableParts.push(new AvatarPartModel(89, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_09C.svg'));
    this.availableParts.push(new AvatarPartModel(90, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_09D.svg'));
    this.availableParts.push(new AvatarPartModel(91, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_09E.svg'));
    this.availableParts.push(new AvatarPartModel(92, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_10A.svg'));
    this.availableParts.push(new AvatarPartModel(93, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_10B.svg'));
    this.availableParts.push(new AvatarPartModel(94, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_10C.svg'));
    this.availableParts.push(new AvatarPartModel(95, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_10D.svg'));
    this.availableParts.push(new AvatarPartModel(96, AvatarPartType.hair, 'Elefante_Avatar_Cabelo_10E.svg'));
    this.availableParts.push(new AvatarPartModel(97, AvatarPartType.lowerBody, 'Elefante_Avatar_Bermuda_01.svg'));
    this.availableParts.push(new AvatarPartModel(98, AvatarPartType.lowerBody, 'Elefante_Avatar_Calca_01.svg'));
    this.availableParts.push(new AvatarPartModel(99, AvatarPartType.lowerBody, 'Elefante_Avatar_Calca_02.svg'));
    this.availableParts.push(new AvatarPartModel(100, AvatarPartType.lowerBody, 'Elefante_Avatar_Saia_01.svg'));
    this.availableParts.push(new AvatarPartModel(101, AvatarPartType.mouth, 'Elefante_Avatar_Boca_01.svg'));
    this.availableParts.push(new AvatarPartModel(102, AvatarPartType.mouth, 'Elefante_Avatar_Boca_02.svg'));
    this.availableParts.push(new AvatarPartModel(103, AvatarPartType.mouth, 'Elefante_Avatar_Boca_03.svg'));
    this.availableParts.push(new AvatarPartModel(104, AvatarPartType.mouth, 'Elefante_Avatar_Boca_04.svg'));
    this.availableParts.push(new AvatarPartModel(105, AvatarPartType.nose, 'Elefante_Avatar_Nariz_01.svg'));
    this.availableParts.push(new AvatarPartModel(106, AvatarPartType.nose, 'Elefante_Avatar_Nariz_02.svg'));
    this.availableParts.push(new AvatarPartModel(107, AvatarPartType.upperBody, 'Elefante_Avatar_Blusa_01.svg'));
    this.availableParts.push(new AvatarPartModel(108, AvatarPartType.upperBody, 'Elefante_Avatar_Camiseta_01.svg'));
    this.availableParts.push(new AvatarPartModel(109, AvatarPartType.upperBody, 'Elefante_Avatar_Vestido_01.svg'));


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

    this.avatar = new Avatar();
    this.avatar.parts.forEach(p => {
      p.data = this.getPartModelForType(p.type);
    });

    this.availableTypes = this.getAvailableTypes([]);
  }

  setAvatarPartModelToCurrentConfigIndex(type: AvatarPartType) {
    this.avatar.parts[type].data = this.getPartModelForType(type);

    if(this.groupType == AvatarPartType.body.toString()) {

      if(this.avatar.parts[type].data.wheelChair) {
        this.availableTypes = this.getAvailableTypes([AvatarPartType.lowerBody, AvatarPartType.foot]);
        this.avatar.parts[AvatarPartType.lowerBody].data.visible = false;
        this.avatar.parts[AvatarPartType.foot].data.visible = false;
      } else {
        this.availableTypes = this.getAvailableTypes([]);
        this.avatar.parts[AvatarPartType.lowerBody].data.visible = true;
        this.avatar.parts[AvatarPartType.foot].data.visible = true;
      }

      //if(this.avatar.parts[type].data.hasProps('white')) {
      //  if(!this.avatar.parts[AvatarPartType.arm].data.hasProps('white')) {
      //    let newArm = this.availableParts.filter(a => a.type == AvatarPartType.arm && a.hasProps());
      //  }
      //}

    }

    this.selectedPartInfo = `id: ${this.avatar.parts[type].data.id}, image: ${this.avatar.parts[type].data.imageFile};`;
  }

  getAvailableTypes(disabledList: Array<number>) {
    let types: Array<any> = [];
    for (let t in AvatarPartType) {
      if (!isNaN(Number(t))) {
        if (t > '0' && !disabledList.includes(+t)) {
          types.push({ index: t, name: AvatarPartType[t] });
        }
      }
    }
    console.log(types);
    return types;
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
