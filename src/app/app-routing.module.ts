import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/page/profile.component';
import { EditDetailsComponent } from './components/profile/edit-details/edit.component';
import { EditPhotoComponent } from './components/profile/edit-photo/edit-photo.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditDetailsComponent },
  { path: 'edit-photo', component: EditPhotoComponent },
  { path: 'postfeed', component: PostfeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }