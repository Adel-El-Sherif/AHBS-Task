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
        typeId: 1,
        typeName: 'typeA',
        id: 1,
        name: 'Product 1'
      },
      {
        typeId: 2,
        typeName: 'typeB',
        id: 2,
        name: 'Product 2'
      },

      {
        typeId: 3,
        typeName: 'typeG',
        id: 3,
        name: 'Product 3'
      },

      {
        typeId: 4,
        typeName: 'typeB',
        id: 4,
        name: 'Product 4'
      },

      {
        typeId: 5,
        typeName: 'typeC',
        id: 5,
        name: 'Product 5'
      },

      {
        typeId: 6,
        typeName: 'typeE',
        id: 6,
        name: 'Product 6'
      },

      {
        typeId: 1,
        typeName: 'typeA',
        id: 7,
        name: 'Product 7'
      },

      {
        typeId: 2,
        typeName: 'typeB',
        id: 8,
        name: 'Product 8'
      },

      {
        typeId: 3,
        typeName: 'typeG',
        id: 9,
        name: 'Product 9'
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
  getProducts(typeID: number, productIDs?: number[]): Product[] {   
    let products = this.products.filter((product) => {
      if (!productIDs?.length) {
        return product.typeId == typeID;
      } else {
        return product.typeId == typeID && productIDs.includes(product.id)
      }
    })
    return products
  };

}
