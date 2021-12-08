import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user';
import { FollowerService } from 'src/app/services/follower.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  followers = [];
  following = [];
  user: Users;
  fullName: string = null;
  age: number;
  job: string;
  userId: number;
  numFollowers: number = 0;
  numFollowed: number = 0;

  constructor(
    private uService: UserService,
    private fService: FollowerService
  ) {}

  ngOnInit(): void {
    this.getId();
    setTimeout(() => {
      this.getUser();
      this.getFollowInfo();
    }, 500);
  }

  getUser() {
    this.uService.getUserById(this.userId).subscribe((user) => {
      this.user = user;
      this.fullName = `${this.user.firstName} ${this.user.lastName}`;
      this.age = this.user.age;
      this.job = this.user.jobTitle;
    });
  }

  getId() {
    setTimeout(() => {
      this.userId = Number(localStorage.getItem('userId'));
    }, 400);
  }

  getFollowInfo() {
    this.fService.getFollowers().subscribe((followers) => {
      this.followers = followers;
      this.followers.forEach((f) => {
        if (f.followedId == this.userId && f.followerId != this.userId) {
          this.numFollowers++;
        } else if (f.followerId == this.userId) {
          this.numFollowed++;
        }
      });
    });
  }
}
