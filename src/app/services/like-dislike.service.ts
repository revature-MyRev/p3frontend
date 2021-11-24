import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dislikes } from '../dislikes';
import { environment } from 'src/environments/environment';
import { Likes } from '../likes';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
const baseApiUrl = environment.API_ROOT_URL;

@Injectable({
  providedIn: 'root',
})
export class LikeDislikeService {
  constructor(private http: HttpClient) {}

  getLikes() {}

  getDislikes() {}

  addLike() {
    console.log('Like added');
  }

  removeLike() {
    console.log('Like removed');
  }

  addDislike() {
    console.log('Dislike added');
  }

  removeDislike() {
    console.log('Dislike removed');
  }
}
