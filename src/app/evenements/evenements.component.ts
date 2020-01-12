import { Component, OnInit, OnChanges } from '@angular/core';
import { Evenement } from '../model/Evenement';
import { EventService } from '../service/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css'],
})

export class EvenementsComponent implements OnInit {

  constructor(private eventsService: EventService, private router: Router) { }

  events: Evenement[] = [];
  role: string;

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    this.events = [];
    this.eventsService.getAll().subscribe(result => {
      console.log(result);
      result.forEach((e: Evenement) => {
        // @ts-ignore
        const d = new Date(e.date);
        // @ts-ignore
        const mydate = new Date(d.getTime() + (1000 * 60 * 60));
        const yyyy = mydate.getFullYear().toString();
        let MM = (mydate.getMonth() + 1).toString();
        if (MM.length === 1) { MM = '0' + MM; }
        let dd = mydate.getDate().toString();
        if (dd.length === 1) { dd = '0' + dd; }
        const hi = yyyy + '-' + MM + '-' + dd + '@00:00:00.000+0000';
        // @ts-ignore
        this.events.push({titre: e.titre, date: hi, valid: e.valid});
      });
      console.log(this.events);
    });
  }

  valider(event): void {
    this.eventsService.valider(event).subscribe(result => {});
    this.ngOnInit();
  }

}
