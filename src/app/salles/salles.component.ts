import { Component, OnInit } from '@angular/core';
import {SalleService} from '../service/salle.service';
import {Salle} from '../model/Salle';
import {Evenement} from '../model/Evenement';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {

  constructor(private salleService: SalleService) { }

  salles: Salle[] = [];

  ngOnInit() {
    this.salleService.getAllSalles().subscribe(result => {
      this.salles = result;
    });
  }

  add1hour(d: Date): Date {
    // @ts-ignore
    const date = new Date(d);
    // @ts-ignore
    const newDate = new Date(date.getTime() + (1000 * 60 * 60));
    return newDate;
  }
}
