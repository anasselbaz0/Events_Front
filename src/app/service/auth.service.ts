import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:8080/';
  authUser: User;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  login(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.apiURL + 'login', user, this.httpOptions);
  }


}
