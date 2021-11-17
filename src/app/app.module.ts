import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FollowButtonComponent } from './components/follow-button/follow-button.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';

import { HttpClientModule } from '@angular/common/http'

import { ProfileService } from './profile.service'; //Mock Service representing get request for a profile
import { IProfile } from './profile'; //Mock interface representing Profile Model


@NgModule({
  declarations: [AppComponent, PostfeedComponent, FollowButtonComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProfileService //Used for mocking an http get request for user profile data
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
