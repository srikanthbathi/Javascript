import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private loggedIn = false;
  constructor() { this.loggedIn = false; }
  toggleDisplay() {
    this.loggedIn = !this.loggedIn;
  }
  ngOnInit() {
  }

}
