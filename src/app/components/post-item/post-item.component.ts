import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Dislikes } from 'src/app/Dislikes';
import { Likes } from 'src/app/Likes';
import { Users } from 'src/app/models/user';
import { Post } from 'src/app/Post';
import { LikeDislikeService } from 'src/app/services/like-dislike.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

declare const reactionClick: any;

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  posts: Post[] = [];
  users: Users[] = [];
  comments: Post[] = [];
  numComments: number = 0;
  numLikes: number = 0;
  numDislikes: number = 0;
  userId: number = Number(localStorage.getItem('userId'));
  likes: Likes[] = [];
  dislikes: Dislikes[] = [];
  postLikes: Likes[] = [];
  postDislikes: Dislikes[] = [];
  firstName: string = ''; //localStorage.getItem('firstName');
  lastName: string = ''; // localStorage.getItem('lastName');
  fullName: string = ''; //`${this.firstName} ${this.lastName}`;
  photo: string;

  @Input() post!: Post;
  @Output() onLikeClick: EventEmitter<Likes> = new EventEmitter();
  @Output() onDislikeClick: EventEmitter<Dislikes> = new EventEmitter();

  constructor(
    private pService: PostService,
    private lService: LikeDislikeService,
    private uService: UserService
  ) {}
  toggle: boolean = true;

  //Needed for toggling the comments section
  toggleClass() {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {
    this.getData();

    reactionClick();
    this.postLikes = [...new Set(this.postLikes)];
    this.postDislikes = [...new Set(this.postDislikes)];
  }

  // Gets the information needed for displaying the correct information on the bage in the correct order
  private getData() {
    this.pService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      this.posts.reverse();
      this.filterPosts(posts);
      this.numComments = this.getNumOfComments();
      this.getLikes();
      this.getDislikes();
      this.getUsersInfo();
    });
  }

  // Gets the information of the user that created the post
  private getUsersInfo() {
    this.uService.getUsers().subscribe((users: Users[]) => {
      this.users = users;
      this.posts.forEach((p) => {
        if (this.post.usersId === p.usersId) {
          this.uService.getUserById(p.usersId).subscribe((user: Users) => {
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.fullName = `${this.firstName} ${this.lastName}`;
            this.photo = user.photo;
          });
        }
      });
    });
  }

  //Gets the number of likes this post has recieved
  getLikes() {
    this.lService.getLikes().subscribe((likes: Likes[]) => {
      this.likes = likes;
      let postLikes = 0;
      this.likes.forEach((l) => {
        if (this.post.postId == l.postId) {
          postLikes++;
          this.postLikes.push(l);
        }
      });
      this.numLikes = postLikes;
    });
  }

  // Gets the number of dislikes this post has recieved
  getDislikes() {
    this.lService.getDislikes().subscribe((dislikes: Dislikes[]) => {
      this.dislikes = dislikes;
      let postDisLikes = 0;
      this.dislikes.forEach((d) => {
        if (this.post.postId == d.postId) {
          postDisLikes++;
          this.postDislikes.push(d);
        }
      });
      this.numDislikes = postDisLikes;
    });
  }

  // Controls what happens
  onLike() {
    let hasLiked: boolean = false;
    let like = {
      usersId: this.userId,
      postId: this.post.postId,
    };

    if (this.postLikes.length > 0) {
      for (let i = 0; i < this.postLikes.length; i++) {
        if (this.postLikes[i].usersId === this.userId) {
          hasLiked = true;
        }
      }
    }

    if (this.postLikes.length < 1 || !hasLiked) {
      this.lService.addLike(like).subscribe((like: Likes) => {
        this.ngOnInit();
      });
    }

    if (hasLiked) {
      for (let i = 0; i < this.postLikes.length; i++) {
        if (this.postLikes[i].usersId == this.userId) {
          this.lService.removeLike(this.postLikes[i]).subscribe((like) => {
            this.postLikes = this.postLikes.filter((p) => {
              p === this.postLikes[i];
            });
          });
          this.ngOnInit();
          break;
        }
      }
      this.ngOnInit();
    }
  }

  onDislike() {
    let hasDisliked: boolean = false;
    let dislike = {
      usersId: this.userId,
      postId: this.post.postId,
    };

    if (this.postDislikes.length > 0) {
      for (let i = 0; i < this.postDislikes.length; i++) {
        if (this.postDislikes[i].usersId === this.userId) {
          hasDisliked = true;
        }
      }
    }

    if (this.postDislikes.length < 1 || !hasDisliked) {
      this.lService.addDislike(dislike).subscribe((dislike: Dislikes) => {
        this.ngOnInit();
      });
    }

    if (hasDisliked) {
      for (let i = 0; i < this.postDislikes.length; i++) {
        if (this.postDislikes[i].usersId == this.userId) {
          this.lService
            .removeDislike(this.postDislikes[i])
            .subscribe((like) => {
              this.postDislikes = this.postDislikes.filter((p) => {
                p === this.postDislikes[i];
              });
            });
          this.ngOnInit();
          break;
        }
      }
      this.ngOnInit();
    }
  }

  private filterPosts(posts: Post[]) {
    this.posts = posts.filter((p) => {
      return p.type == 'post';
    });
    this.comments = posts
      .filter((p) => {
        return p.type != 'post';
      })
      .reverse();
  }

  private getNumOfComments() {
    let numOfComments = 0;

    this.comments?.forEach((c) => {
      if (this.post.feedId === c.feedId) {
        numOfComments++;
      }
    });

    return numOfComments;
  }

  addComment(comment: Post) {
    let type = comment.type;
    let fId = this.post.feedId;
    comment.feedId = fId;

    this.pService.addPost(comment).subscribe((p) => {
      type === 'post' ? this.posts.push(comment) : this.comments.push(comment);
      this.ngOnInit();
    });
  }

  filterByThread() {
    this.comments = this.comments.filter((p) => {
      p.feedId === this.post.feedId;
    });
    return this.comments;
  }
}
