import { Component, Injectable, OnInit, Input } from '@angular/core';
import { IFollower } from 'src/app/models/follower';
import { FollowerService } from '../../services/follower.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'follow_button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss'],
})
export class FollowButtonComponent implements OnInit {
  @Input('profileId') profileId = Number(this.route.snapshot.params['userId']);
  @Input('activeUsersId') activeUsersId = Number(
    localStorage.getItem('userId')
  );
  isVisible: boolean = false; //Checks to see if active user's id matches profile id
  isFollowing: boolean = false; //Toggles between '+' and 'Unfollow' depending on current state
  follower: IFollower = {
    id: 0,
    followerId: this.activeUsersId,
    followedId: this.profileId,
  };

  constructor(
    public service: FollowerService, //Injecting Follower Service
    public route: ActivatedRoute
  ) {}

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
    if (!this.isFollowing) {
      this.service
        .addUserToFollowedUsers(this.follower)
        .subscribe((action: any) => {
          this.isVisible = this.checkFollowerStatus(
            this.follower.followerId,
            this.follower.followedId
          );
        });
    } else {
      this.service
        .deleteUserFromFollowedUsers(this.follower.id)
        .subscribe((action: any) => {
          this.isVisible = this.checkFollowerStatus(
            this.follower.followerId,
            this.follower.followedId
          );
        });
    }

    this.isFollowing = !this.isFollowing;
  }

  /*
   * This method checks to see if the active user is on their own profile page
   * If they are viewing their own profile, the button visibility is set to false
   * If they are viewing another's profile, the button visibility is set to true
   */
  getVisibility(profileId: number, activeUsersId: number): boolean {
    if (activeUsersId == profileId) {
      //compare active session id to Profile id

      return false; //set isVisible property to false (button not visible)
    } else {
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
  checkFollowerStatus(activeUserId: number, profileId: number): boolean {
    this.service
      .getFollowedByUserAndProfileId(profileId, activeUserId) //Get all users the acitve user is following
      .subscribe((followedUsers: IFollower) => {
        try {
          this.follower.id = followedUsers.id; //Seting the Follow Object instance id
          this.follower = followedUsers;
          this.isFollowing = true; //Setting isFollowing to true
          return true;
        } catch (error) {
          this.isFollowing = false;
          this.follower = {
            id: this.activeUsersId,
            followerId: activeUserId,
            followedId: profileId,
          };
          return false;
        } finally {
          this.isVisible = this.getVisibility(
            this.profileId,
            this.activeUsersId
          );
        }
      });
    return false;
  }
}
