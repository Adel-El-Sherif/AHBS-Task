import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger-icon',
  templateUrl: './hamburger-icon.component.html',
  styleUrls: ['./hamburger-icon.component.scss']
})
export class HamburgerIconComponent implements OnInit {

  // begin:: decorator properties ______ 
  @Input() isOpen: boolean = false;
  // end:: decorator properties ______ 

  constructor() { }

  ngOnInit(): void {
  }

}
