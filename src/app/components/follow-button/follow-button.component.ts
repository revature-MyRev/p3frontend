import { HttpResponse } from '@angular/common/http';
import { Component, Injectable, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IFollower } from 'src/app/follower';
import { FollowerService } from 'src/app/services/follower.service';


//import { User } the currently logged in user object (currently hard coded as userId)

@Component({
  selector: 'follow_button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss']
})
export class FollowButtonComponent implements OnInit {
  @Input('profileId') profileId = 0;
  @Input('activeUsersId') activeUsersId = 0;
  isVisible: boolean = false //Checks to see if active user's id matches profile id
  isFollowing: boolean = false; //Toggles between '+' and 'Unfollow' depending on current state
  follower: IFollower = {"id": 0, "followerId": this.activeUsersId, "followedId": this.profileId};
  
  constructor(
    public service: FollowerService, //Injecting mock service 
  ) { }
  
  ngOnInit() {
     this.checkFollowerStatus(this.activeUsersId, this.profileId); //PUT NOTE HERE
   }

  /*
  * This method toggles whether or not the currently visible profile will be followed
  * Initially set to false and displaying a '+' currently to represent follow
  * If clicked, the only current functionality is that the '+' will change to 'Unfollow'
  * What will still need to occur is:
  * 1. Add the relevent profile identifier to the relevent database via a post request 
  */
  onClick() {
    //this.profileId = 4; //Manual control of the profileId for troubleshooting
    console.log("Entering onClick()")


    //Setting the values for the follower object to pass to the Controller
    this.follower.followerId = this.activeUsersId;
    this.follower.followedId = this.profileId;

    if(!this.isFollowing) {
      console.log("sending to the addUserToFollowedUsers() follower service method")
      this.service.addUserToFollowedUsers(this.follower)
        .subscribe( data => {
          this.checkFollowerStatus(this.follower.followerId, this.follower.followedId);
        });

    
    } 
    
    else {
      
      console.log("sending to the deleteUserFromFollowedUsers() follower service method with id " + this.follower.id)
      this.service.deleteUserFromFollowedUsers(this.follower.id)
        .subscribe( data => {
          Response
        });
    }

    this.isFollowing = !this.isFollowing;
    
  }

  /*
  * This method is used to remove visibility of the follow button 
  * when the user is viewing their own profile
  * It takes a single parameter of the Profile id
  */
  getVisibility(profileId: number, activeUsersId: number) {
    // profileId = 4; //Manual control of the profileId for troubleshooting
    console.log("Entering getVisibility()");
    console.log("id: " + this.follower.id);
    console.log("profileId: " + profileId);
    console.log("activeUserId: " + activeUsersId);
    
    
    if( activeUsersId == profileId ) { //compare active session id to Profile id
      console.log("Button should not be visible")
      return false; //set isVisible property to false (button not visible)
    }
    else {
      console.log("Button should be visible")
      return true; //set is Visible property to true (button visible)
      //Delete by id
    }
  }


  /*
  * Code needs to be refactored
  */
  checkFollowerStatus(activeUserId: number, profileId: number) : boolean {
    // profileId = 4; //Manual control of the profileId for troubleshooting
    //console.log("entering checkFollowerStatus() with activeUserId: " + activeUserId + " profileId: " + profileId);
    
    this.service
        .getFollowedById(profileId) //Get all users the acitve user is following
        .subscribe(data => { 
          data.forEach(followedUser => {
            //console.log(followedUser); //Used for troubleshooting: displays Follower object
            if(followedUser) {
              console.log("The active user is following the user's profile being viewed. Async complete.");
              this.isFollowing = true; //Setting isFollowing to true
              this.follower.id = followedUser.id; //Seting the Follow Object instance id
              this.isVisible = this.getVisibility(this.profileId, this.activeUsersId);
              return true;
            } 
            
            else {
              console.log("entering else statement within checkFollowerStatus()")
              this.isFollowing = false;
              this.isVisible = this.getVisibility(this.profileId, this.activeUsersId);
              return false;
            }

          });
        });
        console.log("getFollowedById() completed, waiting for database response");
        this.isFollowing = false; //Holding isFollowing to false until async occurs
        this.isVisible = this.getVisibility(this.profileId, this.activeUsersId); //Setting button visbility
        return false;
  }
  

}
