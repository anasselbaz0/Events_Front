import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {EventService} from '../service/event.service';
import {SalleService} from '../service/salle.service';
import {Evenement} from '../model/Evenement';
import {Salle} from '../model/Salle';
import {ifStmt} from '@angular/compiler/src/output/output_ast';
import {Reservation} from '../model/Reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private salleService: SalleService
  ) { }

  event: string;
  salle: string;
  events: Evenement[] = [];
  salles: Salle[] = [];

  ngOnInit() {
    this.eventService.getAll().subscribe(result => {
      this.events = result;
    });
    this.salleService.getAllSalles().subscribe(result => {
      this.salles = result;
    });
  }

  onSubmit() {
    let mySalle: Salle;
    let myEvent: Evenement;
    this.events.forEach((e: Evenement) => {
      // @ts-ignore
      if (this.event === e.titre) {
        myEvent = e;
      }
    });
    this.salles.forEach((s: Salle) => {
      if (this.salle === s.code) {
        mySalle = s;
      }
    });
    const reservation: Reservation = new Reservation();
    reservation.date = myEvent.date;
    reservation.code = mySalle.code;
    this.salleService.reserver(reservation);
  }

}
