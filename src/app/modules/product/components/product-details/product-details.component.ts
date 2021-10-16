import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from '../../models/product/product';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


  // begin:: decorator properties _____
  @Input() products: Product[] = [];
  // end:: decorator properties _____

  // begin:: pagination props ___
  isLoading: boolean = false;
  // end:: pagination props ___

  constructor(
    private _ProductService : ProductService
  ) { }

  ngOnInit(): void { }

  // pagination handler
  paginate(event: any) {
  //  ....
  }

}
