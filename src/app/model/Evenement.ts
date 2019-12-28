export class Evenement {
  title: string;
  date: Date;
  isvalidated: boolean;

  constructor() {
    this.title = '';
    this.date = null;
    this.isvalidated = false;
  }

  // constructor(title: string, date: Date, isvalidated: boolean) {
  //   this.title = title;
  //   this.date = date;
  //   this.isvalidated = isvalidated;
  // }
}
