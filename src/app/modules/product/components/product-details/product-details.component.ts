import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // begin:: pagination props ___
  isLoading: boolean = false;
  // end:: pagination props ___

  constructor() { }

  ngOnInit(): void {
  }



  // pagination handler
  paginate(event: any) {
  //  ....
  }

}
