import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Gestion des Salles & Organisation des Events';
  username: string;

  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

}
