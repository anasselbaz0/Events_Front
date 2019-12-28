import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiURL: string = 'http://localhost:8080/';

  login(user: User) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json'
    //   })
    // };
    // // @ts-ignore
    // return this.http.get(this.apiURL + 'login', this.user, httpOptions);
    if (user.username === 'a' && user.password === 'a' && user.role === 'Etudiant') {
      return true;
    }
    return false;
  }


}
