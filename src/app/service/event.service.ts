import { Injectable, OnInit } from '@angular/core';
import {Evenement} from '../model/Evenement';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:8080/';
  events: Evenement[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getAll(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.apiURL + 'evenements', this.httpOptions);
  }


  addEvent(eventToAdd: Evenement): Observable<Evenement> {
    const yyyy = eventToAdd.date.getFullYear().toString();
    const MM = (eventToAdd.date.getMonth() + 1).toString();
    const dd = (eventToAdd.date.getDate() - 1).toString();
    const x = yyyy + '-' + MM + '-' + dd + '@23:00:00.000+0000';
    const e = {
      titre: eventToAdd.title,
      date: x,
      isvalidated: eventToAdd.isvalidated
    };
    return this.http.post<Evenement>(this.apiURL + 'evenements/add', e, this.httpOptions);
  }

  valider(event: Evenement): Observable<Evenement> {
    console.log(event);
    return this.http.post<Evenement>(this.apiURL + 'evenements/valider', event, this.httpOptions);
  }


}
