import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() comment: Post;
  @Input() post: Post;

  constructor() {}

  ngOnInit(): void {}
}
