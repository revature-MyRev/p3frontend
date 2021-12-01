import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Dislikes } from 'src/app/Dislikes';
import { Likes } from 'src/app/Likes';
import { Post } from 'src/app/Post';
import { LikeDislikeService } from 'src/app/services/like-dislike.service';
import { PostService } from 'src/app/services/post.service';

declare const reactionClick: any;

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  posts: Post[] = [];
  comments: Post[] = [];
  numComments: number;
  numLikes: number;
  numDislikes: number;
  userId: number = 1;
  likes: Likes[] = [];
  dislikes: Dislikes[] = [];
  postLikes: Likes[] = [];
  postDislikes: Dislikes[] = [];

  @Input() post: Post;
  @Output() onLikeClick: EventEmitter<Likes> = new EventEmitter();
  @Output() onDislikeClick: EventEmitter<Dislikes> = new EventEmitter();

  constructor(
    private pService: PostService,
    private lService: LikeDislikeService
  ) {}
  toggle: boolean = true;

  toggleClass() {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {
    this.getData();
    reactionClick();
    this.postLikes = [...new Set(this.postLikes)];
    this.postDislikes = [...new Set(this.postDislikes)];
  }

  private getData() {
    this.pService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.posts.reverse();
      this.filterPosts(posts);
      this.numComments = this.getNumOfComments();
      this.getLikes();
      this.getDislikes();
    });
  }

  getLikes() {
    this.lService.getLikes().subscribe((likes) => {
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

  getDislikes() {
    this.lService.getDislikes().subscribe((dislikes) => {
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
      this.lService.addLike(like).subscribe((like) => {
        this.ngOnInit();
      });
    }

    if (hasLiked) {
      for (let i = 0; i < this.postLikes.length; i++) {
        if (this.postLikes[i].usersId == this.userId) {
          this.lService.removeLike(this.postLikes[i]).subscribe((like) => {
            this.postLikes = this.postLikes.filter((p) => {
              this.postLikes[i] === p;
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
      this.lService.addDislike(dislike).subscribe((like) => {
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
                this.postDislikes[i] === p;
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
    this.comments.forEach((c) => {
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
