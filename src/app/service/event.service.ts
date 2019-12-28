import { Injectable } from '@angular/core';
import {Evenement} from '../model/Evenement';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  piURL: string = 'http://localhost:8080/';

  addEvent(eventToAdd: Evenement) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    // @ts-ignore
    return this.http.get(this.apiURL + 'events/add', eventToAdd, httpOptions);
  }

}
