import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/user';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userId!: number;
  user!: Users;

  constructor(private route: ActivatedRoute, private router: Router, 
    private profileService: ProfileService) { }

  ngOnInit() {
    this.user = this.profileService.getUser();

    this.userId = this.route.snapshot.params['userId'];

    // this.profileService.getUser();
      // .subscribe(data => {
      //   console.log(data)
      //   this.user = data;
      // }, error => console.log(error));
  }
  // Updates profile based on user input to HTML form
  updateProfile() {
    this.profileService.updateProfile(this.userId, this.user)
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
    this.user = this.profileService.getUser();
    this.gotoProfile();
  }
  // Method for the submit button
  onSubmit() {
    this.updateProfile();
  }
  // Navigating back to the profile
  gotoProfile() {
    this.router.navigate(['profile']);
  }
}
