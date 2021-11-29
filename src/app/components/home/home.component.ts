import { Component, OnInit } from '@angular/core';
import { switchScan } from 'rxjs';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id: any;

  private roles: string[] = [];
  isLoggedIn = false;
  showFeed = false;
  showProfile = false;
  showEditProfile = false;
  showEditPic = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      console.log("user: " +JSON.stringify(user) );
      this.showFeed = true;
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  displayProfile(): void {
    this.showFeed = false;
    this.showProfile = true;
    this.showEditPic = false;
    this.showEditProfile = false;
  }

  displayFeed(): void {
    this.showFeed = true;
    this.showProfile = false;
    this.showEditProfile = false;
    this.showEditPic = false;
  }

  displayEditProfilePic() {
    this.showFeed = false;
    this.showProfile = false;
    this.showEditProfile = false;
    this.showEditPic = true;
  }

  displayEditProfile() {
    this.showFeed = false;
    this.showProfile = false;
    this.showEditProfile = true;
    this.showEditPic = false;
  }

}
