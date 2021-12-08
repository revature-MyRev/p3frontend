import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/Feed';
import { Users } from 'src/app/models/user';
import { Post } from 'src/app/Post';
import { FollowerService } from 'src/app/services/follower.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.scss'],
})
export class PostfeedComponent implements OnInit {
  followed = [];
  followedIdArr = [];
  posts: Post[] = [];
  comments: Post[] = [];
  tId: number = 0;
  feed: Feed | undefined;
  user = this.tService.getUser();

  constructor(
    private pService: PostService,
    private uService: UserService,
    private fService: FollowerService,
    private tService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.pService.getPosts().subscribe((posts: Post[]) => {
      this.getLoggedInUser();
      this.getAllFollowers();
      this.posts = posts;
      this.posts.reverse();
      this.filterPosts(posts);
      setTimeout(() => {
        this.filterFollowingPosts();
      }, 500);
    });
  }

  private getLoggedInUser() {
    let id = this.user.id;

    this.uService.getUserById(id).subscribe((lUser: Users) => {
      localStorage.setItem('firstName', lUser.firstName);
      localStorage.setItem('lastName', lUser.lastName);
      //localStorage.setItem('userId', this.user.id.toString());
    });
  }

  private filterPosts(posts: Post[]) {
    this.posts = posts.filter((p) => {
      return p.type == 'post';
    });
    this.comments = posts.filter((p) => {
      return p.type != 'post';
    });
  }

  private filterFollowingPosts() {
    this.followed.forEach((f) => {
      this.followedIdArr.push(f.followedId);
    });
    this.followedIdArr.push(this.user.id);
    this.posts = this.posts.filter((p) => {
      return this.followedIdArr.includes(p.usersId);
    });
  }

  getAllFollowers() {
    this.fService.getFollowers().subscribe((following) => {
      this.followed = following.filter((f) => {
        return f.followerId == Number(localStorage.getItem('userId'));
      });
    });
  }

  addPost(post: Post) {
    let type = post.type;
    this.pService.addPost(post).subscribe((post: Post) => {
      type === 'post' ? this.posts.push(post) : this.comments.push(post);
      this.ngOnInit();
    });
  }
}
