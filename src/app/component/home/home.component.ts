import { Component, OnInit, NgModule,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  pages = [
    {name : 'Home', page: 'home'},
    {name : 'Reservation', page: 'reservation' },
    {name : 'Contact', page: 'contact'},
    {name : 'About', page: 'about'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
