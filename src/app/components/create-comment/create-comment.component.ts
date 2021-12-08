import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Users } from 'src/app/models/user';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss'],
})
export class CreateCommentComponent implements OnInit {
  content: string = '';
  image: string = '';
  user: Users;
  @Output() onAddComment: EventEmitter<Post> = new EventEmitter();
  constructor(private pService: PostService, private uService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  // This function submits a new comment to be displayed on a post
  onSubmit() {
    let uId = Number(localStorage.getItem('userId'));
    if (!this.content && !this.image) {
      alert('Please add a comment or a pic');
      return;
    }

    const newComment = {
      postContent: this.content,
      postDate: new Date(),
      feedId: 4,
      usersId: uId,
      imageUrl: this.image,
      type: 'comment',
    };

    this.onAddComment.emit(newComment);
    this.content = '';
    this.image = '';
  }

  //This function gets the user that is currently logged in
  getUser() {
    setTimeout(() => {
      this.uService
        .getUserById(Number(localStorage.getItem('userId')))
        .subscribe((user) => (this.user = user));
    }, 10);
  }
}
