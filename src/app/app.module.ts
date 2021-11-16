import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';

@NgModule({
  declarations: [AppComponent, PostfeedComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
