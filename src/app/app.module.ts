import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';
<<<<<<< HEAD
import { CreatepostComponent } from './components/createpost/createpost.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [AppComponent, PostfeedComponent, CreatepostComponent, PostItemComponent, CommentsComponent],
=======
import { PostItemComponent } from './components/post-item/post-item.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [AppComponent, PostfeedComponent, PostItemComponent, CommentsComponent],
>>>>>>> 7b616eb5e3f963514d5c6e5c3a6af082e00990f5
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
