// Imported modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// User created components
import { AppComponent } from './app.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';
import { EditComponent } from './components/profile/edit/edit.component';
import { ProfileComponent } from './components/profile/page/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PostfeedComponent,
    ProfileComponent,
    EditComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
