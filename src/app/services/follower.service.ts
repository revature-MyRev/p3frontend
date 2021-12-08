import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IFollower } from 'src/app/models/follower';

@Injectable()
export class FollowerService {
  private baseURL: string = 'http://localhost:8091/api/';
  follower!: IFollower;

  //Named according to Follower Controller names
  private findAll: string = this.baseURL + 'followers';
  private findByFollowedId: string = this.baseURL + 'findFollowers/';
  private findByFollowedIdAndFollowerId: string = this.baseURL + 'isFollowing/';
  private findById: string = this.baseURL + 'findById/';
  private save: string = this.baseURL + 'followers';
  private update: string = this.baseURL + 'followers/';
  private delete: string = this.baseURL + 'followers/';

  constructor(private http: HttpClient) {}

  getFollowers(): Observable<IFollower[]> {
    return this.http.get<IFollower[]>(this.findAll);
  }

  getFollowedByFollowerId(profileId: number): Observable<IFollower[]> {
    return this.http.get<IFollower[]>(this.findByFollowedId + profileId);
  }

  getFollowedByUserAndProfileId(
    profileId: number,
    activeUserId: number
  ): Observable<IFollower> {
    //Creating headers
    return this.http.get<IFollower>(
      this.findByFollowedIdAndFollowerId + profileId + ',' + activeUserId
    );
  }

  getFollowerObjectById(follower: IFollower): Observable<IFollower> {
    return this.http.get<IFollower>(this.findById + follower.id);
  }

  addUserToFollowedUsers(follower: IFollower): Observable<any> {
    //Creating headers
    const headers = {
      accept: '*/*',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify(follower); //Creating Body
    return this.http.post<IFollower>(this.save, body, { headers: headers }); //Sending and returning request
  }

  updateAFollowerObject(follower: IFollower): Observable<any> {
    //Creating headers
    const headers = {
      accept: '*/*',
      'Content-Type': 'application/json',
    };

    const body = JSON.stringify(follower); //Creating body
    return this.http.put<any>(this.update + follower.id, body, {
      headers: headers,
    }); //Sending and returning request
  }

  deleteUserFromFollowedUsers(followed: number): Observable<any> {
    return this.http.delete<any>(this.delete + followed);
  }
}
