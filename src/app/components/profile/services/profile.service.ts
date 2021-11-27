import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl = 'http://localhost:9080/';
  
  constructor(private http: HttpClient) { }
  
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

  updateProfile(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseUrl+ "editProfile/" + id, value);
  }
}