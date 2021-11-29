import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/services/post.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss'],
})
export class CreateCommentComponent implements OnInit {
  content!: string;
  image!: string;
  @Output() onAddComment: EventEmitter<Post> = new EventEmitter();
  currentUser: any;

  constructor(private pService: PostService, private tokenService: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
  }

  onSubmit() {
    if (!this.content && !this.image) {
      alert('Please add a comment or a pic');
      return;
    }

    const newComment = {
      postContent: this.content,
      postDate: new Date(),
      feedId: 4,
      usersId: 1,
      imageUrl: this.image,
      type: 'comment',
    };

    this.onAddComment.emit(newComment);
    this.content = '';
    this.image = '';
  }
}