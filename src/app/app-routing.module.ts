import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { EditDetailsComponent } from './components/profile/edit-details/edit-details.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { UserProfileComponent } from './components/profile/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'feed', component: PostfeedComponent },
  { path: 'edit-profile', component: EditDetailsComponent },
  { path: 'view-profile/:userId', component: UserProfileComponent },
  { path: 'profile/:userId', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
