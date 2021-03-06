import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Users } from 'src/app/models/user';

import { ProfileService } from 'src/app/services/profile.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss'],
})
export class EditDetailsComponent implements OnInit {
  userId: number = Number(localStorage.getItem('userId'));
  user: Users;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
    private tokenService: TokenStorageService,
    private uService: UserService
  ) {}

  ngOnInit() {
    this.getUser();
  }
  // Updates profile based on user input to HTML form
  updateProfile() {
    this.profileService.updateProfile(this.user).subscribe(
      (data: any) => console.log(data),
      (error: any) => console.log(error)
    );
    this.user = this.tokenService.getUser();
    this.gotoProfile();
  }
  // Method for the submit button
  onSubmit() {
    this.updateProfile();
  }
  // Navigating back to the profile
  gotoProfile() {
    this.router.navigate(['view-profile', this.userId]);
  }

  getUser() {
    setTimeout(() => {
      this.uService.getUserById(this.userId).subscribe((user) => {
        this.user = user;
      });
    }, 10);
  }
}
