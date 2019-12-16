import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatButtonToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AvatarPartComponent } from './components/avatar-part/avatar-part.component';
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
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
