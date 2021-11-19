import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { IUsers } from "./users";

@Injectable()
export class UsersService {
    private _getRequest: string = "URL"; 
    private _postRequest: string = "URL"; 
    private _putRequest: string = "URL"; 
    private _deleteRequest: string = "URL"; 
    users!: IUsers;
    
    constructor(private http: HttpClient) { }


}