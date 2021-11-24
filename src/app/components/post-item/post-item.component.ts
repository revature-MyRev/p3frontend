import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/services/post.service';

declare const reactionClick: any;

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  posts: Post[] = [];
  comments: Post[] = [];
  numComments: number;

  @Input() post: Post;

  constructor(private pService: PostService) {}
  toggle: boolean = true;

  toggleClass() {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {
    this.getData();
    reactionClick();
  }

  private getData() {
    this.pService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.posts.reverse();
      this.filterPosts(posts);
      this.numComments = this.getNumOfComments();
    });
  }

  private filterPosts(posts: Post[]) {
    this.posts = posts.filter((p) => {
      return p.type == 'post';
    });
    this.comments = posts
      .filter((p) => {
        return p.type != 'post';
      })
      .reverse();
  }

  private getNumOfComments() {
    let numOfComments = 0;
    this.comments.forEach((c) => {
      if (this.post.feedId === c.feedId) {
        numOfComments++;
      }
    });
    return numOfComments;
  }

  addComment(comment: Post) {
    let type = comment.type;
    let fId = this.post.feedId;
    comment.feedId = fId;

    this.pService.addPost(comment).subscribe((p) => {
      type === 'post' ? this.posts.push(comment) : this.comments.push(comment);
      this.ngOnInit();
    });
  }

  filterByThread() {
    this.comments = this.comments.filter((p) => {
      p.feedId === this.post.feedId;
    });
    return this.comments;
  }

  toggleComments() {
    let commentSection = document.querySelector('.comment__section-container');

    if (commentSection.classList.contains('hide')) {
      commentSection.classList.toggle('hide');
    }
  }
}
