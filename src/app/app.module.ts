import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AvatarPartComponent } from './components/avatar-part/avatar-part.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    AvatarPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
