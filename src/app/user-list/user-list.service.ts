import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable()

export class UserService {
    constructor(private http:HttpClient) {

    }

    public getUser():Observable<any> {
        return this.http.get("https://reqres.in/api/users?page=2")
    }

    public getPhoto():Observable<any> {
        return this.http.get("https://jsonplaceholder.typicode.com/photos")
    }


}