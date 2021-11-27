import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/feed';
import { Post } from 'src/app/post';

import { PostService } from 'src/app/services/post.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.scss'],
})
export class PostfeedComponent implements OnInit {
  posts: Post[] = [];
  comments: Post[] = [];
  tId: number | undefined;
  feed: Feed | undefined;
  currentUser: any;

  constructor(private pService: PostService, private tokenService: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
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
