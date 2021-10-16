import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product';
import { WarehouseType } from '../../models/warehous-types/warehous-types';
import { Warehouse } from '../../models/warehouse/warehouse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  warehouse: Warehouse[] = [];
  types: WarehouseType[] = [];
  products: any[] = [];
  

  constructor() { 
    this.setData();
  }


  /**
   * @description To set data
   */
  private setData(): void {
    this.setTypes();
    this.setProducts();
    this.setWarehouse();
  }


  // To set date to Warehouse
  private setWarehouse(): void {
    this.warehouse = [{id: 1, name: "wh1"}, {id: 2, name: "wh2"},];
  }

  // To set date to Warehouse types
  private setTypes(): void {
    this.types = [
      {
        WarehouseId: 1,
        id: 1,
        name: 'typeA'
      },

      {
        WarehouseId: 1,
        id: 2,
        name: 'typeB'
      },

      {
        WarehouseId: 1,
        id: 3,
        name: 'typeG'
      },
      {
        WarehouseId: 2,
        id: 4,
        name: 'typeB'
      },

      {
        WarehouseId: 2,
        id: 5,
        name: 'typeC'
      },

      {
        WarehouseId: 2,
        id: 6,
        name: 'typeE'
      }
    ]
  }


  // To set date to products Array
  private setProducts(): void {
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        onHand: 53,
        typeId: 1,
        typeName: 'typeA',
      },
      {
        id: 2,
        name: 'Product 2',
        onHand: 73,
        typeId: 2,
        typeName: 'typeB',
      },

      {
        id: 3,
        name: 'Product 3',
        onHand: 953,
        typeId: 3,
        typeName: 'typeG',
      },

      {
        id: 4,
        name: 'Product 4',
        onHand: 0,
        typeId: 4,
        typeName: 'typeB',
      },

      {
        id: 5,
        name: 'Product 5',
        onHand: 0,
        typeId: 5,
        typeName: 'typeC',
      },

      {
        id: 6,
        name: 'Product 6',
        onHand: 253,
        typeId: 6,
        typeName: 'typeE',
      },

      {
        typeId: 1,
        name: 'Product 7',
        onHand: 253,
        id: 7,
        typeName: 'typeA',
      },

      {
        id: 8,
        name: 'Product 8',
        onHand: 0,
        typeId: 2,
        typeName: 'typeB',
      },

      {
        id: 9,
        name: 'Product 9',
        onHand: 153,
        typeId: 3,
        typeName: 'typeG',
      },

    ]
  }


  /**
   * @description to get Warehouse
   * @returns {Warehouse[]} Array of warehouse
   */
  getWarehouse(): Warehouse[] {
    return this.warehouse;
  }


  /**
   * @description to get Warehouse
   * @param WarehouseId
   * @returns {WarehouseType[]} Array of warehouse
   */
  getWarehouseTypesById(id: number): WarehouseType[] {
    return this.types.filter( type => type.WarehouseId == id )
  }


  /**
   * @description to get Products
   * @param WarehouseId
   * @param ArrayOfProductIDs
   * @returns {Product[]} Array of products
   */
  getProducts(typeID: number, productIDs?: number[], showZero?: boolean): Product[] {   
    let products = this.products.filter((product) => {
      if (!productIDs?.length) {
        return showZero ? product.typeId == typeID : product.typeId == typeID && product.onHand != 0;
      } else {
        return product.typeId == typeID && productIDs.includes(product.id)
      }
    })
    return products
  };

}
