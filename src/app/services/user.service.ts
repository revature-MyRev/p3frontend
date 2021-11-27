import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { IUsers } from '../user';


const API_URL = 'http://localhost:8090/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _getRequest: string = "URL"; 
  private _postRequest: string = "URL"; 
  private _putRequest: string = "URL"; 
  private _deleteRequest: string = "URL"; 
  users!: IUsers;

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}