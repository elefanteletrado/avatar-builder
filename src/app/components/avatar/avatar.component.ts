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

  getAvatarParts() {
    return this.avatar.parts.filter(p => p.data != null);
  }
}
