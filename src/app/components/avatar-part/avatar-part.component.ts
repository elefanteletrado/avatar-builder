import { Component, OnInit, Input } from '@angular/core';
import { AvatarPartType } from '../../enums/avatar-part-type.enum';
import { AvatarPartModel } from '../../classes/avatar-part-model';

@Component({
  selector: 'app-avatar-part',
  templateUrl: './avatar-part.component.html',
  styleUrls: ['./avatar-part.component.sass']
})
export class AvatarPartComponent implements OnInit {

  @Input() avatarPart: AvatarPartModel;

  constructor() {
  }

  ngOnInit() {
  }

  getImageFile() {
    let file = (this.avatarPart == null)
      ? 'assets/transparent-pixel.png'
      : `assets/parts/${AvatarPartType[this.avatarPart.type]}/${this.avatarPart.imageFile}`;

    return file;
  }

}
