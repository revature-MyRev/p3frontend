import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/user';
import { environment } from 'src/environments/environment';

const API_URL = 'http://localhost:8091/api/auth/';
const baseApiUrl = environment.API_ROOT_URL;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: Users;
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getUserById(id: number): Observable<Users> {
    const url = `${baseApiUrl}/findUserById/${id}`;
    return this.http.get<Users>(url);
  }

  getUsers(): Observable<Users[]> {
    const url = `${baseApiUrl}/users`;
    return this.http.get<Users[]>(url);
  }

  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'mod', { responseType: 'text' });
  // }

  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'admin', { responseType: 'text' });
  // }
}
