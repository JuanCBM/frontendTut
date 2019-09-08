import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

import { UserModel } from './../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserModel[]> {

    return this.http.get<UserModel[]>("http://localhost:8080/users");
  }

  public delete(user: UserModel): void{
    this.http.post("http://localhost:8080/deleteUser", JSON.stringify(user)).subscribe();   
    this.getUsers();
  }
}
