// Imported modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// User created components
import { AppComponent } from './app.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';
import { EditDetailsComponent } from './components/profile/edit-details/edit-details.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { EditPhotoComponent } from './components/profile/edit-photo/edit-photo.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoginComponent } from './components/login_reg/login/login.component';
import { RegisterComponent } from './components/login_reg/register/register.component';
import { HomeComponent } from './components/login_reg/home/home.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { CommentsComponent } from './components/comments/comments.component';
// Pipes
import { FilterPipe } from './components/search-bar/services/filter.pipe';
// Services
import { ProfileService } from './components/profile/services/profile.service';
import { SearchBarService } from './components/search-bar/services/search-bar.service';
import { FollowerService } from './components/profile/services/follower.service';
import { TokenStorageService } from './components/login_reg/services/token-storage.service';
import { AuthService } from './components/login_reg/services/auth.service';
import { UserService } from './components/login_reg/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    PostfeedComponent,
    ProfileComponent,
    EditDetailsComponent,
    EditPhotoComponent,
    SearchBarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CreatepostComponent,
    PostItemComponent,
    CommentsComponent,
    FilterPipe,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ProfileService,
    SearchBarService,
    FollowerService,
    TokenStorageService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
