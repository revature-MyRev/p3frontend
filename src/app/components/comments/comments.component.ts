import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';

declare function alert(): any;
declare const reactionClick: any;
declare const hideImages: any;

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() comment: Post;
  @Input() post: Post;

  constructor() {}

  ngOnInit(): void {
    reactionClick();
    hideImages();
  }

  onclick() {
    alert();
  }
}
