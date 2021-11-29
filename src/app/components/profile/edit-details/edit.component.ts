import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ProfileService } from 'src/app/services/profile.service';
import { IUsers } from 'src/app/user';
import { EventEmitter } from '@angular/core';
import { HomeComponent } from '../../home/home.component';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditDetailsComponent implements OnInit {

  userId!: number;
  user!: IUsers;

  constructor(private route: ActivatedRoute, private router: Router, 
    private profileService: ProfileService, private tokenService: TokenStorageService, private home: HomeComponent) { }

  ngOnInit() {
    this.user = this.tokenService.getUser();
    this.userId = this.route.snapshot.params['userId'];
  }
  // Updates profile based on user input to HTML form
  updateProfile() {
    this.profileService.updateProfile(this.userId, this.user)
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
    this.home.displayProfile();
    //this.user = this.profileService.getUser();
   //this.gotoProfile();
  }
  // Method for the submit button
  onSubmit() {
    this.updateProfile();
  }
  // Navigating back to the profile
  // gotoProfile() {
  //   this.router.navigate(['profile']);
  // }
  
}
