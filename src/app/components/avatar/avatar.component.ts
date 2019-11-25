import { Component, OnInit } from '@angular/core';
import { AvatarPartModel } from '../../classes/avatar-part-model';
import { AvatarPartComponent } from '../avatar-part/avatar-part.component';
import { AvatarPartType } from 'src/app/enums/avatar-part-type.enum';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent implements OnInit {
  private hatPart: AvatarPartModel;
  private hairPart: AvatarPartModel;
  private upperBodyPart: AvatarPartModel;
  private lowerBodyPart: AvatarPartModel;

  constructor() { }

  ngOnInit() {
    this.initializeAvatar();
  }

  initializeAvatar() {
    this.hatPart = new AvatarPartModel();
    this.hatPart.id = 1;
    this.hatPart.name = 'elegant';
    this.hatPart.type = AvatarPartType.hat;
    this.hatPart.imageFile = 'elegant.png';

    this.hairPart = new AvatarPartModel();
    this.hairPart.id = 2;
    this.hairPart.name = 'short';
    this.hairPart.type = AvatarPartType.hair;
    this.hairPart.imageFile = 'short-hair-01.png';

    this.upperBodyPart = new AvatarPartModel();
    this.upperBodyPart.id = 3;
    this.upperBodyPart.name = 'shirt';
    this.upperBodyPart.type = AvatarPartType.upperBody;
    this.upperBodyPart.imageFile = 'shirt-01.png';

    this.lowerBodyPart = new AvatarPartModel();
    this.lowerBodyPart.id = 4;
    this.lowerBodyPart.name = 'shorts';
    this.lowerBodyPart.type = AvatarPartType.lowerBody;
    this.lowerBodyPart.imageFile = 'shorts-01.png';
  }
}
