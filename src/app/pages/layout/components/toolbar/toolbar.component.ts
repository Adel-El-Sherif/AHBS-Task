import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  // begin properties _______________
  subscription: Subscription = new Subscription();
  // end properties _______________

  // begin:: booleans 
  isOpen: boolean = false;
  isHome: boolean = false;
  // end:: booleans 

  constructor(
    private _Router: Router,
  ) { }

  ngOnInit(): void {

    this.isHomePage();
    this.detectOnNavigationStart();
  }


  // A function that detects if navigation has been started 
  detectOnNavigationStart(): void {
    this.subscription.add(this._Router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isOpen = false
          this.isHomePage();
        }
    }));
  }

  // To check if the current page is home  to show and hide the page name. 
  isHomePage(): void {
    this.isHome = this._Router.url === '' ||  this._Router.url === '/'  ? true : false;    
  }
  
  // To toggle navigation bar 
  toggleNavbar():void {
    this.isOpen = !this.isOpen; 
  }

  // To hide bar 
  hideNavbar(event: any): void {
    event ? this.isOpen = false : null;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
