import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddEventDialogComponent} from '../add-event-dialog/add-event-dialog.component';
import {Evenement} from '../model/Evenement';
import {EventService} from '../service/event.service';
// import {Evenement} from '../model/Evenement';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private eventS: EventService
  ) { }

  // @ts-ignore
  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    // { title: 'Evenement Now', start: new Date() }
  ];
  selectable: true;

  ngOnInit() {
  }

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    const d: Date = arg.date;
    this.openDialog(d);
  }

  openDialog(eDate: Date): void {
    let event: Evenement = new Evenement();
    event.date = eDate;
    event.isvalidated = false;
    const dialogRef = this.dialog.open(AddEventDialogComponent, {
      width: '40%',
      data: {evenement: event}
    });
    dialogRef.afterClosed().subscribe(result => {
      let eventToAdd: Evenement = result;
      console.log(eventToAdd);
      if (eventToAdd !== null) {
        this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
          title: eventToAdd.title,
          start: eventToAdd.date,
          allDay: true
        });
        this.eventS.addEvent(eventToAdd);
      }
    });
  }
}
