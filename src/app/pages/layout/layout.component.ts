import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  // begin properties _______________
  subscription: Subscription = new Subscription();
  // end properties _______________

  // begin:: booleans 
  isHome: boolean = false;
  // end:: booleans 

  constructor(
    private _Router: Router,
  ) { }

  ngOnInit(): void {
    this.isHomePage();
    this.detectOnNavigationEnd();
  }

  // A function that detects if navigation has been started 
  detectOnNavigationEnd(): void {
    this.subscription.add(this._Router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isHomePage();
        }
    }));
  }

  // To check if the current page is home  to show and hide the page name. 
  isHomePage(): void {
    this.isHome = this._Router.url === '' ||  this._Router.url === '/'  ? true : false;    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
