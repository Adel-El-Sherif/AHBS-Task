import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // begin:: decorator properties 
  @Output() navigating: EventEmitter<boolean> = new EventEmitter<boolean>();
  // end:: decorator properties 

  constructor() { }

  ngOnInit(): void {

  }

  onNavigate(): void {
    this.navigating.emit(true)
  }

}
