import { NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  // begin:: booleans 
  isOpen: boolean = false;
  // end:: booleans 

  constructor(
    private _Router: Router,
  ) { }

  ngOnInit(): void {

    this.detectOnNavigationStart();

  }


  // A function that detects if navigation has been started 
  detectOnNavigationStart(): void {
    this._Router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isOpen = false
        }
    });
  }


  // To toggle navigation bar 
  toggleNavbar():void {
    this.isOpen = !this.isOpen; 
  }

  // To hide bar 
  hideNavbar(event: any): void {
    event ? this.isOpen = false : null;
  }

}
