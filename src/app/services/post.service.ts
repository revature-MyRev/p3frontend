import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../post';
import { environment } from 'src/environments/environment';
import { Feed } from '../feed';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
const baseApiUrl = environment.API_ROOT_URL;

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

  updatePost(post: Post): Observable<Post> {
    const url = `${baseApiUrl}/posts/${post.postId}`;
    return this.http.put<Post>(url, post, httpOptions);
  }

  deletePost(post: Post): Observable<Post> {
    const url = `${baseApiUrl}/posts/${post.postId}`;
    return this.http.delete<Post>(url);
  }

  createThread(feed: Feed): Observable<Feed> {
    const url = `${baseApiUrl}/feeds`;
    return this.http.post<Feed>(url, feed, httpOptions);
  }
}