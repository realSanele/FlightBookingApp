import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  @Input() name;
  @Input() page;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigator(){
    if(this.name == 'Reservation'){
      this.router.navigate(['Login']);
    }else if(this.name == 'Home'){
      this.router.navigate(['']);
    }else if(this.name == 'Contact'){
      this.router.navigate(['Contact']);
    }else if(this.name == 'About'){
      this.router.navigate(['About']);
    }/*else if(this.name == 'View'){
      this.router.navigate(['details/View'], {queryParams : {name: this.uname, surname : this.surname, email : this.email, age : this.age, gender : this.gender}});
  }*/

  }

}
