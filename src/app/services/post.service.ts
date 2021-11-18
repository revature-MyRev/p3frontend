import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
const baseApiUrl = 'http://localhost:8091/posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const url = `${baseApiUrl}/posts`;
    return this.http.get<Post[]>(url);
  }

  getPostById(post: Post): Observable<Post> {
    const url = `${baseApiUrl}/postById/${post.postId}`;
    return this.http.get<Post>(url);
  }

  addPost(post: Post): Observable<Post> {
    const url = `${baseApiUrl}/posts`;
    return this.http.post<Post>(url, post, httpOptions);
  }

  deletePost(post: Post): Observable<Post> {
    const url = `${baseApiUrl}/${post.postId}`;
    return this.http.delete<Post>(url);
  }
}
