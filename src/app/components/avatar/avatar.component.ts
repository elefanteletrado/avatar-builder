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

  private x: number = 0;

  private availableHats: Array<AvatarPartModel> = [
    { id: 1, name: 'elegant', type: AvatarPartType.hat, imageFile: 'elegant.png' },
    { id: 2, name: 'Cap', type: AvatarPartType.hat, imageFile: 'cap.png' },
    { id: 3, name: 'Cowboy', type: AvatarPartType.hat, imageFile: 'cowboy.png' }
  ];

  public groupType: number;

  constructor() { }

  ngOnInit() {
    this.groupType = 10;
    this.initializeAvatar();
  }

  initializeAvatar() {
    this.hatPart = this.availableHats[0];

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

  public typeChangeHandler(val: number) {
    this.groupType = val;
  }

  changePart() {
    if(this.groupType === AvatarPartType.hat) {
      this.x++;
      if(this.x > 2) this.x = 0;
      this.hatPart = this.availableHats[this.x];
    }
  }
}
