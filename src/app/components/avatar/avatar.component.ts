import { Component, OnInit, Input } from '@angular/core';
import { Avatar } from '../../classes/avatar';
import { AvatarPartDefinition } from 'src/app/classes/avatar-part-definition';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent implements OnInit {

  @Input() avatar: Avatar = new Avatar();

  constructor() { }

  ngOnInit() { }

  getPartStyle(part: AvatarPartDefinition): string {
    let style: string = "position: absolute; top: " + part.x + "; left: " + part.y + ";";
    console.log('style', style);
    return style;
  }
}
