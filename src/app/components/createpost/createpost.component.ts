import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
})
export class CreatepostComponent implements OnInit {
  content: string;
  image: string;
  constructor() {}

  @Output() onAddPost: EventEmitter<Post> = new EventEmitter();

  ngOnInit(): void {}

  onSubmit() {
    if (!this.content && !this.image) {
      alert('Please share some content or an image!');
    }
    //console.log(`Post Submitted: ${this.content}, ${this.image}`);

    const newPost = {
      postContent: this.content,
      postDate: new Date(),
      threadId: 2,
      userId: 1,
      imageUrl: this.image,
      type: 'post',
    };

    this.onAddPost.emit(newPost);
    console.log(newPost);

    this.content = '';
    this.image = '';
  }
}
