import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private lService: LikeDislikeService) {}

  ngOnInit(): void {
    reactionClick();
  }

  onclick() {
    alert();
  }

  onLike() {
    //add conditional statement too see if the user has already liked this post
    //if they have ->remove like
    //if not -> add like
    this.lService.addLike();
  }

  onDislike() {
    //add conditional statement too see if the user has already disliked this post
    //if they have ->remove dislike
    //if not -> add dislike
    this.lService.addDislike();
  }
}
