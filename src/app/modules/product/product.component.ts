import { Component, OnInit } from '@angular/core';
import { Product } from './models/product/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // begin:: properties ________
  products: Product[] = []
  // end:: properties ________

  constructor() { }

  ngOnInit(): void {
  }

  // To get products from child 
  getProduct(products: Product[]): void {
    this.products = products;
  }

}
