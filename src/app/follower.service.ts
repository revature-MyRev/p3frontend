//This is a mock service which is pulling data in JSON format from a file to mock an HTTP request
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { IFollower } from "./follower";

@Injectable()
export class FollowerService {
    private _url: string = "http://localhost:8080/followers/findFollowers/"; //Mocked json returned by http response "/assets/data/profile.json" "localhost:8080/users/findById/{id}"
    private _postRequest: string = "http://localhost:8080/followers/followers"; //Mocked json http post request
    private _deleteRequest: string = "http://localhost:8080/followers/followers/"
    follower!: IFollower;
    constructor(private http: HttpClient) { }

    /*
    * Mocking an http get request:
    * The getProfile() method returns an Observable object of type IProfile
    * The information is retrieved from a .json file with location set in field _url
    */
    getFollowedById(profileId: number) : Observable<IFollower[]> { 
        console.log("Entering getFollowedById() with followedId of " + profileId);
        return this.http.get<IFollower[]>(this._url + profileId);
    }

    addUserToFollowedUsers(follower: IFollower): Observable<IFollower> {
        console.log("Entering the addUserToFollowedUsers()")
        const headers = {
            'accept': '*/*',
            'Content-Type': 'application/json'
        };  
        console.log("Headers: " + JSON.stringify(headers));

        const body=JSON.stringify(follower);
        console.log("Body: " + body);

        console.log("Post: " + this._postRequest + ", body, " + JSON.stringify(headers));
        return this.http.post<IFollower>(this._postRequest, body, {headers: headers});
    }   


    deleteUserFromFollowedUsers(followed: number): Observable<any> {
        console.log("Entering the deleteUserFromFollowedUsers()")

        console.log("Delete: " + (this._deleteRequest + followed));
        return this.http.delete<any>((this._deleteRequest + followed));
    }

}