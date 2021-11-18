// Imported modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// User created components
import { AppComponent } from './app.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';
import { EditDetailsComponent } from './components/profile/edit-details/edit-details.component';
import { ProfileComponent } from './components/profile/page/profile.component';
import { EditPhotoComponent } from './components/profile/edit-photo/edit-photo.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PostfeedComponent,
    ProfileComponent,
    EditDetailsComponent,
    EditPhotoComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
