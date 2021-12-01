import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Users } from 'src/app/models/user';
import { ProfileService } from '../services/profile.service';
import { TokenStorageService } from '../../login_reg/services/token-storage.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {

  userId!: number;
  user!: Users;

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private profileService: ProfileService,
    private tokenService: TokenStorageService) { }

  ngOnInit() {
    this.user = this.tokenService.getUser();
    this.userId = this.route.snapshot.params['userId'];
  }
  // Updates profile based on user input to HTML form
  updateProfile() {
    this.profileService.updateProfile(this.userId, this.user)
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
    this.user = this.tokenService.getUser();
    this.gotoProfile();
  }
  // Method for the submit button
  onSubmit() {
    this.updateProfile();
  }
  // Navigating back to the profile
  gotoProfile() {
    this.router.navigate(['edit-profile']);
  }
  
}
