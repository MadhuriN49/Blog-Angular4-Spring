import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { NavService } from './nav/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  constructor( private nav : NavService){}

  canAdd : boolean = false;
  loggedInUser : string ;
   ngOnInit(){
     this.nav.show();
     this.showAdd();
  }

  showAdd(){
   this.loggedInUser = sessionStorage.getItem("loggedInUser");
    if( this.loggedInUser  == "admin"){
      this.canAdd = true;
    }
  }
}
