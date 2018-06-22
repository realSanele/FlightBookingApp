import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { checkAndUpdateElementInline } from '@angular/core/src/view/element';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  d_airport: '';
  a_airport: '';
  date: '';
  class:'';
  num_adults: number;
  num_child: number;
  num_infants: number;

  summ: number;


  pages = [
    {name : 'Home', page: 'home'},
    {name : 'Reservation', page: 'reservation' },
    {name : 'Contact', page: 'contact'},
    {name : 'About', page: 'about'}
  ];

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.d_airport = params['departure'];
      this.a_airport = params['arrival'];
      this.date = params['date'];
      this.class = params['class'];
      this.num_adults = params['adults'];
      this.num_child = params['children'];
      this.num_infants = params['infants'];
    });

    
  }
}
