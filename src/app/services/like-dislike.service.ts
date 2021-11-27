import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dislikes } from '../Dislikes';
import { environment } from 'src/environments/environment';
import { Likes } from '../Likes';

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

  getLikes(): Observable<Likes[]> {
    const url = `${baseApiUrl}/likes`;
    return this.http.get<Likes[]>(url);
  }

  getDislikes(): Observable<Dislikes[]> {
    const url = `${baseApiUrl}/dislikes`;
    return this.http.get<Dislikes[]>(url);
  }

  addLike(like: Likes): Observable<Likes> {
    console.log('Like added');
    const url = `${baseApiUrl}/likes`;
    return this.http.post<Likes>(url, like, httpOptions);
  }

  removeLike(like: Likes): Observable<Likes> {
    console.log('Like removed');
    const url = `${baseApiUrl}/likes/${like.likeId}`;
    return this.http.delete<Likes>(url);
  }

  addDislike(dislike: Dislikes): Observable<Dislikes> {
    console.log('Dislike added');
    const url = `${baseApiUrl}/dislikes`;
    return this.http.post<Likes>(url, dislike, httpOptions);
  }

  removeDislike(dislike: Dislikes): Observable<Dislikes> {
    console.log('Dislike removed');
    const url = `${baseApiUrl}/dislikes/${dislike.dislikeId}`;
    return this.http.delete<Dislikes>(url);
  }
}
