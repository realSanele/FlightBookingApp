import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
