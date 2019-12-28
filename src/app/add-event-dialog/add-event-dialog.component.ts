import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Evenement} from '../model/Evenement';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.css']
})
export class AddEventDialogComponent implements OnInit {

  eventToAdd: Evenement = new Evenement();

  addEventForm = new FormGroup({
    title: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<AddEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.eventToAdd.date = data.evenement.date;
    this.eventToAdd.isvalidated = data.evenement.isvalidated;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.eventToAdd.title = this.addEventForm.controls['title'].value;
    this.dialogRef.close(this.eventToAdd);
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

}
