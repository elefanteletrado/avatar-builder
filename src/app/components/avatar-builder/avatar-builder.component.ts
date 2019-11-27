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

  constructor() {

  }

  ngOnInit() {
    this.groupType = AvatarPartType.hat;
    this.initializeAvatar();
  }

  public groupType: AvatarPartType;
  private x: number = 0;

  private availableParts: Array<AvatarPartModel> = [
    { id: 1, name: 'Elegant', type: AvatarPartType.hat, imageFile: 'elegant.png' },
    { id: 2, name: 'Cap', type: AvatarPartType.hat, imageFile: 'cap.png' },
    { id: 3, name: 'Cowboy', type: AvatarPartType.hat, imageFile: 'cowboy.png' },

    { id: 4, name: 'Short', type: AvatarPartType.hair, imageFile: 'short-hair-01.png' },
    { id: 5, name: 'Long', type: AvatarPartType.hair, imageFile: 'long-01.png' },
    { id: 6, name: 'Punk', type: AvatarPartType.hair, imageFile: 'punk-01.png' },

    { id: 7, name: 'Shirt', type: AvatarPartType.upperBody, imageFile: 'shirt-01.png' },
    { id: 8, name: 'Long Sleeve', type: AvatarPartType.upperBody, imageFile: 'shirt-02.png' },
    { id: 9, name: 'Dress', type: AvatarPartType.upperBody, imageFile: 'dress-01.png' },

    { id: 10, name: 'Shorts', type: AvatarPartType.lowerBody, imageFile: 'shorts-01.png' },
    { id: 11, name: 'Pants', type: AvatarPartType.lowerBody, imageFile: 'pants-01.png' },
    { id: 12, name: 'Skirt', type: AvatarPartType.lowerBody, imageFile: 'skirt-01.png' },

  ];


  initializeAvatar() {
    this.avatar = new Avatar();
    this.avatar.parts.forEach(p => {

      //todo: monta os avalilable parts conforme os tipos disponíveis.
      console.log('Avatar Part>', AvatarPartType[p.type]);

      p.data = this.availableParts.filter(a => a.type == p.type)[0];
    });

    console.log('avatar-builder> avatar', this.avatar);
  }

  public typeChangeHandler(val: AvatarPartType) {
    this.groupType = +val;
  }

  changePart() {
    console.log(this.groupType, AvatarPartType.hat, (this.groupType === AvatarPartType.hat));
    //if(this.groupType === AvatarPartType.hat) {
    //  this.x++;
    //  if(this.x > 2) this.x = 0;
    //  this.avatar.hatPart = this.availableParts[this.x];
    //}
  }


}
