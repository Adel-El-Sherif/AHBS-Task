import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss']
})
export class SectionHeadingComponent implements OnInit {

  // begin:: decorator properties ______ 
  @Input() title: string = '...';
  // @Input() icon: string = '...';
  // end:: decorator properties ______ 

  constructor() { }

  ngOnInit(): void {
  }

}
