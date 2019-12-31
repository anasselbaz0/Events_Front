import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/Evenement';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css'],
})

export class EvenementsComponent implements OnInit {

  columnsToDisplay = ['nom'];
  events: Evenement[];

  constructor(private eventsService: EventService) { }

  ngOnInit() {
    this.eventsService.getAll().subscribe(result => {
      this.events = result;
    })
  }





  

}
