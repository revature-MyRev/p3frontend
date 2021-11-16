import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostfeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
