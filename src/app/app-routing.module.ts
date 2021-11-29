import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { ProfileComponent } from './components/profile/profile/profile.component';
import { EditDetailsComponent } from './components/profile/edit-details/edit-details.component';
import { EditPhotoComponent } from './components/profile/edit-photo/edit-photo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

const routes: Routes = [
  
  { path: 'profile/:userId', component: ProfileComponent},
  { path: 'edit-profile', component: EditDetailsComponent},
  { path: 'edit-photo', component: EditPhotoComponent},
  { path: 'search-bar', component: SearchBarComponent},
  { path: '', redirectTo: 'home', pathMatch:'full'}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
