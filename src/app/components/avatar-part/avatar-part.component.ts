import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AvatarPartType } from '../../enums/avatar-part-type.enum';
import { AvatarPartModel } from '../../classes/avatar-part-model';
import { fade } from '../../animations';

@Component({
  selector: 'app-avatar-part',
  templateUrl: './avatar-part.component.html',
  styleUrls: ['./avatar-part.component.sass'],
  animations: fade
})
export class AvatarPartComponent implements OnChanges {

  @Input() avatarPart: AvatarPartModel;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.avatarPart.currentValue !== changes.avatarPart.previousValue) {
      console.log('AvatarPartComponent > ngOnChanges', changes.avatarPart.currentValue, changes.avatarPart.previousValue);

      if(this.animating) {
        this.finishAnimation();
      }

      this.imageOut = this.imageSource;
      this.imageIn = this.getImageFile(changes.avatarPart.currentValue);

      this.startOutAnimation();
    }
  }

  state = '';
  imageOut = '';
  imageIn = '';
  imageSource = 'assets/transparent-pixel.png';
  animating = false;

  onDone($event) {
    if (this.state === 'out') {
      this.startInAnimation();
    } else {
      this.finishAnimation();
    }
  }

  startOutAnimation() {
    this.state = 'out';
    this.animating = true;
  }

  startInAnimation() {
    this.state = 'in';
    this.imageSource = this.imageIn;
    this.animating = true;
  }

  finishAnimation() {
    this.state = '';
    this.animating = false;
  }

  getImageFile(part : AvatarPartModel) {
    let file = (part == null)
      ? 'assets/transparent-pixel.png'
      : `assets/parts/${AvatarPartType[part.type]}/${part.imageFile}`;

    return file;
  }

}
