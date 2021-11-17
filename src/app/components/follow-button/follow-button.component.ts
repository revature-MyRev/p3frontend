import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IProfile } from 'src/app/profile'; //Mock interface acting Profile Model
import { ProfileService } from 'src/app/profile.service'; //Mock Service pulling information from get request


//import { User } the currently logged in user object (currently hard coded as userId)

@Component({
  selector: 'follow_button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss']
})
export class FollowButtonComponent implements OnInit {
  isVisible: boolean = false; //Checks to see if active user's id matches profile id
  isFollowing: boolean = false; //Toggles between '+' and 'Unfollow' depending on current state
  public profile!: IProfile;
  userId = 0; //Mocking current session user's id

  constructor(
    public service: ProfileService //Injecting mock service 
  ) {
      this.profile; 
   }
  
  ngOnInit() {
    this.service.getProfile() //Calling http get method in ProfileService
      .subscribe(data => {
        this.profile = data; //Storing retrieved http response to Mock Profile Model
        this.isVisible = this.getVisibility(this.profile.id); //Calling validation method below
      });
  }

  /*
  * This method toggles whether or not the currently visible profile will be followed
  * Initially set to false and displaying a '+' currently to represent follow
  * If clicked, the only current functionality is that the '+' will change to 'Unfollow'
  * What will still need to occur is:
  * 1. Add the relevent profile identifier to the relevent database via a post request 
  */
  onClick() {
    this.isFollowing = !this.isFollowing;
    if(this.isFollowing) {
      //http post request to appropriate endpoint with appropriate data
    } else {
      //http put request to update table to say following is not active
    }
  }

  /*
  * This method is used to remove visibility of the follow button 
  * when the user is viewing their own profile
  * It takes a single parameter of the Profile id
  */
  getVisibility(id: number) {
    if( this.userId == id ) { //compare active session id to Profile id
      return false; //set isVisible property to false (button not visible)
    }
    else {
      return true; //set is Visible property to true (button visible)
    }
  }

}
