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
    let path : string = 'assets/';

    if(this.avatarPart == null) {
      return path + 'transparent-pixel.png';
    } else {
      path += 'parts/' + AvatarPartType[this.avatarPart.type];
      path += '/' + this.avatarPart.imageFile;

      console.log('path', path);
      return path;
    }
  }

}
