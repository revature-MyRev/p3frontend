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
  likes: Likes[] = [];
  dislikes: Dislikes[] = [];

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
  }

  private getData() {
    this.pService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.posts.reverse();
      this.filterPosts(posts);
      this.numComments = this.getNumOfComments();
    });
  }

  onLike() {
    let like = {
      userId: 1,
      postId: this.post.postId,
    };
    //add conditional statement too see if the user has already liked this post
    //if they have ->remove like
    //if not -> add like
    this.lService.addLike(like);
  }

  onDislike() {
    let dislike = {
      userId: 1,
      postId: this.post.postId,
    };
    //add conditional statement too see if the user has already disliked this post
    //if they have ->remove dislike
    //if not -> add dislike
    this.lService.addDislike(dislike);
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
