import { Injectable, OnInit } from '@angular/core';
import {Evenement} from '../model/Evenement';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  constructor(private http: HttpClient) { }

  apiURL: string = 'http://localhost:8080/';
  events: Evenement[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getAll(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.apiURL + "evenements", this.httpOptions);
  }

  addEvent(eventToAdd: Evenement) {
    return this.http.post(this.apiURL + 'evenements/add', eventToAdd, this.httpOptions);
  }



}
