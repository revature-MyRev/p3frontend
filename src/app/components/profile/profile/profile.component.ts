import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Users } from 'src/app/models/user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FollowerService } from 'src/app/services/follower.service';
import { IFollower } from 'src/app/models/follower';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  targetUser: any = [];
  temp: any;
  userId!: number;
  // Follow button init vars
  //@Input('profileId')
  profileId!: number;
  //@Input('activeUsersId')
  activeUsersId!: number;
  isVisible: boolean = false; //Checks to see if active user's id matches profile id
  isFollowing: boolean = false; //Toggles between 'Follow' and 'Unfollow' depending on current state
  follower!: IFollower;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: TokenStorageService,
    private followerService: FollowerService
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.params['userId'];
    this.temp = this.profileService.getUserById(+this.userId);
    this.temp.subscribe((data: {}) => {
      this.targetUser = data;
      this.profileId = this.userId;
    });
    this.currentUser = this.tokenService.getUser();
    // Follower button init
    this.profileId = this.targetUser.userId;
    this.activeUsersId = this.currentUser.userId;
    this.follower = {
      id: 0,
      followerId: this.activeUsersId,
      followedId: this.profileId,
    };
    this.checkFollowerStatus(
      Number(this.route.snapshot.params['userId']),
      Number(localStorage.getItem('userId'))
    );
  }

  /*
   * This method checks to see if an entry exists in the follower table which
   * Matches the active user's id and the active profile id
   * If a match exists, the follower object is mapped and isFollowing is set to true
   * If a match does not exist, isFollowing is set to false and follower is mapped with an id of -1
   * Finally, isVisible is set based on the response of the getVisibility()
   */
  checkFollowerStatus(activeUserId: number, profileId: number): boolean {
    this.followerService
      .getFollowedByUserAndProfileId(profileId, activeUserId) //Get all users the acitve user is following
      .subscribe((followedUsers) => {
        try {
          this.follower.id = followedUsers.id; //Seting the Follow Object instance id
          this.follower = followedUsers;
          this.isFollowing = true; //Setting isFollowing to true
          return true;
        } catch (error) {
          this.isFollowing = false;
          this.follower = {
            id: -1,
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

  // /*
  //  * This method toggles whether or not the currently visible profile will be followed
  //  * Initially set to false and displaying a '+' currently to represent follow
  //  * If clicked, the only current functionality is that the '+' will change to 'Unfollow'
  //  * What will still need to occur is:
  //  * 1. Add the relevent profile identifier to the relevent database via a post request
  //  */
  onClick() {
    if (!this.isFollowing) {
      this.followerService
        .addUserToFollowedUsers(this.follower)
        .subscribe((action) => {
          this.isVisible = this.checkFollowerStatus(
            this.follower.followerId,
            this.follower.followedId
          );
        });
    } else {
      this.followerService
        .deleteUserFromFollowedUsers(this.follower.id)
        .subscribe((action) => {
          this.isVisible = this.checkFollowerStatus(
            this.follower.followerId,
            this.follower.followedId
          );
        });
    }

    this.isFollowing = !this.isFollowing;
  }
}
