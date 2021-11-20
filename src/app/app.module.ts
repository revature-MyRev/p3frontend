
// Imported modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// User created components
import { AppComponent } from './app.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';
import { EditComponent } from './components/profile/edit/edit.component';
import { ProfileComponent } from './components/profile/page/profile.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


// import { authInterceptorProviders } from './_helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostfeedComponent,
    CreatepostComponent,
    PostItemComponent,
    CommentsComponent,
    EditComponent,
    ProfileComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule,
      
  ],
 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }