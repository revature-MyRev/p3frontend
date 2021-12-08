import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user';
import { FollowerService } from 'src/app/services/follower.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss'],
})
export class FollowingComponent implements OnInit {
  following = [];
  followArr = [];
  user: Users;
  userId: number = 0;

  constructor(
    private fService: FollowerService,
    private uService: UserService
  ) {}

  ngOnInit(): void {
    this.getId();
    setTimeout(() => {
      this.getFollowing();
    }, 500);
  }

  // Gets the ID of the logged in user
  getId() {
    setTimeout(() => {
      this.userId = Number(localStorage.getItem('userId'));
    }, 400);
  }

  //Gets the users that the logged in user is currently following
  getFollowing() {
    this.fService.getFollowers().subscribe((follow) => {
      this.followArr = follow;
      this.followArr.forEach((f) => {
        if (f.followerId == this.userId) {
          this.uService.getUserById(f.followedId).subscribe((user) => {
            this.following.push(user);
          });
        }
      });
    });
  }
}
