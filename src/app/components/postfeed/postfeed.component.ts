import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.scss'],
})
export class PostfeedComponent implements OnInit {
  posts: Post[] = [];

  constructor(private pService: PostService) {}

  ngOnInit(): void {
    this.pService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  addPost(post: Post) {
    this.pService.addPost(post).subscribe((post) => {
      this.posts.push(post);
      this.ngOnInit();
    });
  }
}
