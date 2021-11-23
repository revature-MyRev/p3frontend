import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/services/post.service';

declare const reactionClick: any;
// declare const hideImages: any;

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  posts: Post[] = [];
  comments: Post[] = [];

  @Input() post: Post;

  constructor(private pService: PostService) {}

  ngOnInit(): void {
    this.getData();
    reactionClick();
    // hideImages();
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

  addComment(post: Post) {
    let type = post.type;
    this.pService.addPost(post).subscribe((post) => {
      console.log(post);
      type === 'post' ? this.posts.push(post) : this.comments.push(post);
      this.ngOnInit();
    });
  }

  filterByThread() {
    this.comments = this.comments.filter((p) => {
      p.threadId === this.post.threadId;
      console.log(`Post thread Id: ${this.post.threadId}`);
      console.log(`Comment thread Id: ${p.threadId}`);
      console.log(this.comments);
    });
    return this.comments;
  }

  // onClick() {
  //   console.log(this);
  // }
}
