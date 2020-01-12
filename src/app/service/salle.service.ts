import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Salle} from '../model/Salle';
import {Reservation} from '../model/Reservation';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:8080/';
  salles: Salle[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getAllSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(this.apiURL + 'salles', this.httpOptions);
  }

  addSalle(salleToAdd: Salle): Observable<Salle> {
    return this.http.post<Salle>(this.apiURL + 'salles/add', salleToAdd, this.httpOptions);
  }

  reserver(reservation: Reservation) {
    console.log(reservation);
    this.http.post(this.apiURL + 'salles/reserver', reservation, this.httpOptions).subscribe();
  }

}
