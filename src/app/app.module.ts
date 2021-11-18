// Imported modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// User created components
import { AppComponent } from './app.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';
import { EditComponent } from './components/profile/edit/edit.component';
import { ProfileComponent } from './components/profile/page/profile.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { CommentsComponent } from './components/comments/comments.component';

const appRoutes: Routes = [
  { path: '', component: PostfeedComponent },
  { path: 'feed', component: PostfeedComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: 'profile/edit', component: EditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostfeedComponent,
    CreatepostComponent,
    PostItemComponent,
    CommentsComponent,
    EditComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
