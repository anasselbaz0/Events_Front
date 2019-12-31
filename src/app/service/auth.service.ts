import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiURL = 'http://localhost:8080/';
  private authUser: User = new User('', '', '');

  login(user: User): boolean {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    // @ts-ignore
    const out: Observable<User> = this.http.get<User>(this.apiURL + 'login', user, httpOptions)._subscribe((res) => {
      this.authUser = res;
    });
    console.log(this.authUser);
    return true;
  }


}
