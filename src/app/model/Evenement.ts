export class Evenement {
  public title: string;
  public date: Date;
  public isvalidated: boolean;

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
