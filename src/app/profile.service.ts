//This is a mock service which is pulling data in JSON format from a file to mock an HTTP request
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { IProfile } from "./profile";
import { Observable } from "rxjs";

@Injectable()
export class ProfileService {
    private _url: string = "/assets/data/profile.json"; //Mocked json returned by http response

    constructor(private http: HttpClient) { }

    /*
    * Mocking an http get request:
    * The getProfile() method returns an Observable object of type IProfile
    * The information is retrieved from a .json file with location set in field _url
    */
    getProfile() : Observable<IProfile> { 
        return this.http.get<IProfile>(this._url);
    }
}