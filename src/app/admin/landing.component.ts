import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private router:Router){}

  logout(){
    localStorage.clear();

    this.router.navigate(["/"]);

  }

}
