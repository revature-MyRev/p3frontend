import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/Post';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Feed } from 'src/app/Feed';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
})
export class CreatepostComponent implements OnInit {
  content: string;
  image: string;
  tId: number;
  feed: Feed;

  constructor(private pService: PostService) {}

  @Output() onAddPost: EventEmitter<Post> = new EventEmitter();

  ngOnInit(): void {
    let newfeed = {
      feedId: 0,
    };
    this.createThread(newfeed);
  }

  onSubmit() {
    if (!this.content && !this.image) {
      alert('Please share some content or an image!');
    }

    if (!this.tId) {
      this.ngOnInit();
    }

    const newPost = {
      postContent: this.content,
      postDate: new Date(),
      userId: 1,
      feedId: this.tId,
      imageUrl: this.image,
      type: 'post',
    };

    if (this.tId) {
      this.onAddPost.emit(newPost);
      this.content = '';
      this.image = '';
      this.tId = null;
    }
  }

  createThread(feed: Feed) {
    this.pService.createThread(feed).subscribe((t) => {
      this.tId = +t;
    });
  }
}
