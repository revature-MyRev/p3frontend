import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/services/post.service';
import { Feed } from 'src/app/Feed';

declare const modal: any;

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
})
export class CreatepostComponent implements OnInit {
  content: string = '';
  image: string = '';
  tId: number = 0;
  feed!: Feed;

  constructor(private pService: PostService) {}

  @Output() onAddPost: EventEmitter<Post> = new EventEmitter();

  ngOnInit(): void {
    modal();
  }

  // This function is responsible for creating a new post
  createPost() {
    let uId = Number(localStorage.getItem('userId'));
    if (!this.content && !this.image) {
      alert('Please share some content or an image!');
      return;
    }
    if (this.tId == 0) {
      let newfeed = {
        feedId: 0,
      };

      this.pService.createThread(newfeed).subscribe((t: any) => {
        this.tId = +t;
        const newPost = {
          postContent: this.content,
          postDate: new Date(),
          usersId: uId,
          feedId: this.tId,
          imageUrl: this.image,
          type: 'post',
        };

        this.onAddPost.emit(newPost);
        this.content = '';
        this.image = '';
        this.tId = 0;
      });
    }
  }
}
