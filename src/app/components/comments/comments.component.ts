import { Component, OnInit } from '@angular/core';

declare function alert(): any;

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comment: string = 'This is a comment';

  constructor() {}

  ngOnInit(): void {}

  onclick() {
    alert();
  }
}
