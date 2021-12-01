import { Component, Input, OnInit } from '@angular/core';
import { Dislikes } from 'src/app/Dislikes';
import { Likes } from 'src/app/Likes';
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
  commentLikes: Likes[] = [];
  commentDislikes: Dislikes[] = [];
  numCommentLikes: number = 0;
  numCommentDislikes: number = 0;
  userId: number = 1;

  constructor(private lService: LikeDislikeService) {}

  ngOnInit(): void {
    this.getData();
    reactionClick();
    this.commentLikes = [...new Set(this.commentLikes)];
    this.commentDislikes = [...new Set(this.commentDislikes)];
  }

  onclick() {
    alert();
  }

  getData() {
    this.getCommentLikes();
    this.getCommentDislikes();
    // console.log(this.commentLikes);
    // console.log(this.commentDislikes);
  }

  getCommentLikes() {
    this.commentLikes = [];

    this.lService.getLikes().subscribe((likes) => {
      this.likes = likes;
      let postLikes = 0;
      this.likes.forEach((l) => {
        if (this.comment.postId == l.postId) {
          postLikes++;
          this.commentLikes.push(l);
        }
      });
      this.numCommentLikes = postLikes;
    });
  }

  getCommentDislikes() {
    this.commentDislikes = [];
    this.lService.getDislikes().subscribe((dislikes) => {
      this.dislikes = dislikes;
      let postDisLikes = 0;
      this.dislikes.forEach((d) => {
        if (this.comment.postId == d.postId) {
          postDisLikes++;
          this.commentDislikes.push(d);
        }
      });
      this.numCommentDislikes = postDisLikes;
    });
  }

  onCommentLike() {
    let hasLiked: boolean = false;
    let hasAlreadyDisliked: boolean = false;
    let like = {
      usersId: this.userId,
      postId: this.comment.postId,
    };

    if (this.commentLikes.length > 0) {
      for (let i = 0; i < this.commentLikes.length; i++) {
        if (this.commentLikes[i].usersId === this.userId) {
          hasLiked = true;
        }
      }
    }

    if (this.commentLikes.length < 1 || !hasLiked) {
      this.lService.addLike(like).subscribe((like) => {
        this.ngOnInit();
      });
    }

    if (hasLiked) {
      for (let i = 0; i < this.commentLikes.length; i++) {
        if (this.commentLikes[i].usersId == this.userId) {
          this.lService.removeLike(this.commentLikes[i]).subscribe((like) => {
            this.ngOnInit();
          });
          break;
        }
      }
    }
  }

  onCommentDislike() {
    let hasDisliked: boolean = false;
    let dislike = {
      usersId: this.userId,
      postId: this.comment.postId,
    };

    if (this.commentDislikes.length > 0) {
      for (let i = 0; i < this.commentDislikes.length; i++) {
        if (this.commentDislikes[i].usersId === this.userId) {
          hasDisliked = true;
        }
      }
    }

    if (this.commentDislikes.length < 1 || !hasDisliked) {
      this.lService.addDislike(dislike).subscribe((like) => {
        this.ngOnInit();
      });
    }

    if (hasDisliked) {
      for (let i = 0; i < this.commentDislikes.length; i++) {
        if (this.commentDislikes[i].usersId == this.userId) {
          this.lService
            .removeDislike(this.commentDislikes[i])
            .subscribe((like) => {
              this.ngOnInit();
            });
          break;
        }
      }
    }
  }
}
