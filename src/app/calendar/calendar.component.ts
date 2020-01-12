import {Component, Inject, OnInit, ViewChild, OnChanges} from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddEventDialogComponent} from '../add-event-dialog/add-event-dialog.component';
import {Evenement} from '../model/Evenement';
import {EventService} from '../service/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private eventS: EventService,
    private router: Router
  ) { }

  // @ts-ignore
  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  // Variables de la class
  event: Evenement;
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [];
  selectable: true;

  ngOnInit() {
    // this.calendarEvents = [];
    this.eventS.getAll().subscribe(result => {
      result.forEach(function(ev: Evenement) {
        let ev2add: EventInput;
        // @ts-ignore
        ev2add = {title: ev.titre, start: new Date(ev.date), allDay: true};
        this.push(ev2add);
      }, this.calendarEvents);
    });
    this.calendarComponent.getApi().rerenderEvents();
    console.log(this.calendarEvents);
  }

  handleDateClick(arg) {
    const d: Date = arg.date;
    this.openDialog(d);
  }

  openDialog(eDate: Date): void {
    const event: Evenement = new Evenement();
    event.date = eDate;
    event.isvalidated = false;
    const dialogRef = this.dialog.open(AddEventDialogComponent, {
      width: '40%',
      data: {evenement: event}
    });
    dialogRef.afterClosed().subscribe(result => {
      const eventToAdd: Evenement = result;
      if (eventToAdd !== null) {
        // tslint:disable-next-line:no-shadowed-variable
        this.eventS.addEvent(eventToAdd).subscribe(result => {
          this.event = result;
          // @ts-ignore
          const ev2add: EventInput = {title: eventToAdd.titre, start: new Date(eventToAdd.date), allDay: true};
          this.calendarEvents.push(ev2add);
          location.reload();
        });
      }
    });
  }
}
