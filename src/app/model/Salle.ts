import {Equipement} from './Equipement';

export class Salle {
  public code: string;
  public type: string;
  public datesDeReservation: Date[];
  public equipements: Equipement[];

  constructor() {}

  // constructor(title: string, date: Date, isvalidated: boolean) {
  //   this.title = title;
  //   this.date = date;
  //   this.isvalidated = isvalidated;
  // }
}
