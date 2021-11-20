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
  comments: Post[] = [];

  constructor(private pService: PostService) {}

  ngOnInit(): void {
    this.getData();
  }
  private getData() {
    this.pService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.posts.reverse();
      this.filterPosts(posts);
    });
  }

  private filterPosts(posts: Post[]) {
    this.posts = posts.filter((p) => {
      return p.type == 'post';
    });
    this.comments = posts.filter((p) => {
      return p.type != 'post';
    });
  }

  addPost(post: Post) {
    let type = post.type;
    this.pService.addPost(post).subscribe((post) => {
      type === 'post' ? this.posts.push(post) : this.comments.push(post);
      this.ngOnInit();
    });
  }
}
