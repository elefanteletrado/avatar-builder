import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarBuilderComponent } from './avatar-builder.component';

describe('AvatarBuilderComponent', () => {
  let component: AvatarBuilderComponent;
  let fixture: ComponentFixture<AvatarBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
