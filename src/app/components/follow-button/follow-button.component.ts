import { Component, Injectable, OnInit, Input } from '@angular/core';
import { IFollower } from 'src/app/models/follower';
import { FollowerService } from './services/follower.service';

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
    public service: FollowerService, //Injecting Follower Service
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
    console.log("Entering onClick()")

    if(!this.isFollowing) {
      console.log("sending to the addUserToFollowedUsers() follower service method")
      console.log(this.follower);
      this.service.addUserToFollowedUsers(this.follower)
        .subscribe( action => {
          this.isVisible = this.checkFollowerStatus(this.follower.followerId, this.follower.followedId);
        });
    } 
    
    else {
      
      console.log("sending to the deleteUserFromFollowedUsers() follower service method with id " + this.follower.id)
      this.service.deleteUserFromFollowedUsers(this.follower.id)
        .subscribe( action => {
          this.isVisible = this.checkFollowerStatus(this.follower.followerId, this.follower.followedId);
        });
    }

    this.isFollowing = !this.isFollowing;
    
  }

  /*
  * This method checks to see if the active user is on their own profile page 
  * If they are viewing their own profile, the button visibility is set to false
  * If they are viewing another's profile, the button visibility is set to true
  */
  getVisibility(profileId: number, activeUsersId: number) : boolean {
    console.log("Entering getVisibility()");
    console.log("id: " + this.follower.id);
    console.log("profileId: " + profileId);
    console.log("activeUserId: " + activeUsersId);
    
    if( activeUsersId == profileId ) { //compare active session id to Profile id
      console.log("User is viewing their own profile, setting button visibility to false.")
      return false; //set isVisible property to false (button not visible)
    }
    else {
      console.log("Setting button visibility to true.")
      return true; //set is Visible property to true (button visible)
    }

  }


  /*
  * This method checks to see if an entry exists in the follower table which
  * Matches the active user's id and the active profile id
  * If a match exists, the follower object is mapped and isFollowing is set to true
  * If a match does not exist, isFollowing is set to false and follower is mapped with an id of -1
  * Finally, isVisible is set based on the response of the getVisibility()
  */
  checkFollowerStatus(activeUserId: number, profileId: number) : boolean {
    this.service
        .getFollowedByUserAndProfileId(profileId, activeUserId) //Get all users the acitve user is following
          .subscribe(followedUsers => { 
           try {
            this.follower.id = followedUsers.id; //Seting the Follow Object instance id
            this.follower = followedUsers;
            this.isFollowing = true; //Setting isFollowing to true
            return true;
            } 
            
            catch (error) {
              this.isFollowing = false;
              this.follower = {"id": -1, "followerId": activeUserId, "followedId": profileId};
              return false;
            }

            finally {
              console.log("Async operation complete. Checking visibility.")
              this.isVisible = this.getVisibility(this.profileId, this.activeUsersId);
            }
          });
        
            
        console.log("getFollowedById() completed, waiting for database response");
        return false;
  }

    

}
