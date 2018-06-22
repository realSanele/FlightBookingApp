import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
