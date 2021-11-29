
// Imported modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// User created components
import { AppComponent } from './app.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';
import { ProfileComponent } from './components/profile/page/profile.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FollowButtonComponent } from './components/follow-button/follow-button.component';
import { EditDetailsComponent } from './components/profile/edit-details/edit.component';
import { EditPhotoComponent } from './components/profile/edit-photo/edit-photo.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { HeaderComponent } from './components/header/header.component';
import { FollowingComponent } from './components/following/following.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';

// import { authInterceptorProviders } from './_helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostfeedComponent,
    CreatepostComponent,
    PostItemComponent,
    CommentsComponent,
    EditDetailsComponent,
    ProfileComponent,
    RegisterComponent,
    HomeComponent,
    FollowButtonComponent,
    EditPhotoComponent,
    CreateCommentComponent,
    FollowingComponent,
    HeaderComponent,
    SidePanelComponent,
  ],
  imports: [BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule     
  ],
 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }