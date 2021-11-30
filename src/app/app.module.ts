// Imported modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// User created components
import { AppComponent } from './app.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';

import { CreatepostComponent } from './components/createpost/createpost.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FollowingComponent } from './components/following/following.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { EditDetailsComponent } from './components/profile/edit-details/edit-details.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { EditPhotoComponent } from './components/profile/edit-photo/edit-photo.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FollowButtonComponent } from './components/follow-button/follow-button.component';
// Pipes
import { FilterPipe } from './components/search-bar/services/filter.pipe';
// Services
import { ProfileService } from './components/profile/services/profile.service';
import { SearchBarService } from './components/search-bar/services/search-bar.service';
import { FollowerService } from './components/follow-button/services/follower.service';

const appRoutes: Routes = [
  { path: '', component: PostfeedComponent },
  { path: 'feed', component: PostfeedComponent },

  // { path: 'profile/edit', component: EditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostfeedComponent,
    CreatepostComponent,
    PostItemComponent,
    CommentsComponent,
    FollowingComponent,
    ProfileComponent,
    HeaderComponent,
    CreateCommentComponent,
    SidePanelComponent,
    UserPanelComponent,
    ProfileComponent,
    EditDetailsComponent,
    EditPhotoComponent,
    SearchBarComponent,
    FollowButtonComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AppRoutingModule,
    ProfileService,
    SearchBarService,
    FollowerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
