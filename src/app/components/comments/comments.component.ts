import { Component, Input, OnInit } from '@angular/core';
import { Dislikes } from 'src/app/dislikes';
import { Likes } from 'src/app/likes';
import { Post } from 'src/app/Post';
import { LikeDislikeService } from 'src/app/services/like-dislike.service';

declare const reactionClick: any;

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() comment: Post;
  @Input() post: Post;
  likes: Likes[] = [];
  dislikes: Dislikes[] = [];

  constructor(private lService: LikeDislikeService) {}

  ngOnInit(): void {
    reactionClick();
  }

  onclick() {
    alert();
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
}
