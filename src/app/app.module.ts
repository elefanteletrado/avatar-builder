import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AvatarPartComponent } from './components/avatar-part/avatar-part.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { AvatarBuilderComponent } from './components/avatar-builder/avatar-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    AvatarPartComponent,
    AvatarBuilderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
