import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { LikeDislikeService } from 'src/app/services/like-dislike.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

declare const reactionClick: any;

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input()
  comment!: Post;
  @Input()
  post!: Post;
  currentUser: any;

  constructor(private lService: LikeDislikeService, private tokenService: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
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