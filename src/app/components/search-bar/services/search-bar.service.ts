import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  private baseURL="http://localhost:8090/users/users";
  constructor(private httpClient:HttpClient) { }


  getUsersList():Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.baseURL}`)
  }

}
