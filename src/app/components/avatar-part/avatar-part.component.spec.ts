import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPartComponent } from './avatar-part.component';

describe('AvatarPartComponent', () => {
  let component: AvatarPartComponent;
  let fixture: ComponentFixture<AvatarPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
