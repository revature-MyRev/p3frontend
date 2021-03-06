import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Users } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
const baseApiUrl = environment.API_ROOT_URL;

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  FOLDER = '';

  constructor(private http: HttpClient) {}

  // Login services now in token-storage.service.ts

  // // Clears sessions storage
  // signOut(): void {
  //   window.sessionStorage.clear();
  // }
  // // Save/replace the token in storage
  // public saveToken(token: string): void {
  //   window.sessionStorage.removeItem(TOKEN_KEY);
  //   window.sessionStorage.setItem(TOKEN_KEY, token);
  // }
  // // Get token for storage
  // public getToken(): string | null {
  //   return window.sessionStorage.getItem(TOKEN_KEY);
  // }
  // // Save/replace the user in storage
  // public saveUser(user: any): void {
  //   // Cleaning out the string in USER_KEY and setting up the actual user data
  //   window.sessionStorage.removeItem(USER_KEY);
  //   window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  // }
  // // Getting the current user
  // public getUser(): any {
  //   const user = window.sessionStorage.getItem(USER_KEY);
  //   if (user) {
  //     return JSON.parse(user);
  //   }
  //   // Return nothing if USER_KEY is null
  //   return {};
  // }

  // Get user by userId
  public getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(baseApiUrl + '/findUserById/' + id);
  }

  // Update user profile
  updateProfile(user: Users): Observable<any> {
    return this.http.put(
      `${baseApiUrl}/editProfile/${user.userId}`,
      user,
      httpOptions
    );
  }
  // Update profile photo
}
