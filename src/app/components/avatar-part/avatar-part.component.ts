import { Component, OnInit, Input } from '@angular/core';
import { AvatarPartType } from '../../enums/avatar-part-type.enum';
import { AvatarPartModel } from '../../classes/avatar-part-model';

@Component({
  selector: 'app-avatar-part',
  templateUrl: './avatar-part.component.html',
  styleUrls: ['./avatar-part.component.sass']
})
export class AvatarPartComponent implements OnInit {

  @Input() avatarPart : AvatarPartModel;

  constructor() {
  }

  ngOnInit() {
  }

  getImageFile() {
    let path : string = "assets/";

    if(this.avatarPart == null) {
      return path + 'transparent-pixel.png';
    } else {
      path += "parts/";
      switch(this.avatarPart.type) {
        case AvatarPartType.hat:
          path += 'hats/';
          break;
        case AvatarPartType.hair:
            path += 'hair/';
            break;
        case AvatarPartType.lowerBody:
            path += 'lowerBody/';
            break;
        case AvatarPartType.upperBody:
            path += 'upperBody/';
            break;
      }
      console.log(path + this.avatarPart.imageFile);
      return path + this.avatarPart.imageFile;
    }
  }

}
