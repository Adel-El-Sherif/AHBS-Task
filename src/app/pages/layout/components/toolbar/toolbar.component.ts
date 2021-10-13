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

  constructor() { }

  ngOnInit(): void {
  }

  // To toggle navigation bar 
  toggleNavbar():void {
    this.isOpen = !this.isOpen; 
  }

}
