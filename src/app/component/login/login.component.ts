import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Input from form
  d_airport: '';
  a_airport: '';
  date: '';
  class:'';
  num_adults: number;
  num_child: number;
  num_infants: number;


  pages = [
    {name : 'Home', page: 'home'},
    {name : 'Reservation', page: 'reservation' },
    {name : 'Contact', page: 'contact'},
    {name : 'About', page: 'about'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  book(){

    this.router.navigate(['View'], {queryParams : {arrival: this.a_airport, departure : this.d_airport, date :
       this.date, class : this.class, adults : this.num_adults, children : this.num_child, infants : this.num_infants}});
  }

}
