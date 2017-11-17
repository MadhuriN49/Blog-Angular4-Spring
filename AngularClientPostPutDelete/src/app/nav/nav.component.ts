import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from './nav.service';

@Component({
  moduleId: module.id,
  selector: 'ng-nav',
  templateUrl: 'nav.template.html'
})

export class NavbarComponent {
  appName: string = "Angular Boilerplate";
  constructor( public nav: NavService ) {}
}
