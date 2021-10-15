import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { WarehouseType } from '../../models/warehous-types/warehous-types';
import { Warehouse } from '../../models/warehouse/warehouse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  warehouse: Warehouse[] = [];
  types: WarehouseType[] = [];
  

  constructor() { 
    this.setData();
  }

  /**
   * @description To set data
   */
  private setData(): void {
    this.setTypes();
    this.setWarehouse();
  }

  // To set date to Warehouse
  private setWarehouse(): void {
    this.warehouse = [{id: 1, name: "wh2"}, {id: 2, name: "wh2"},];
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
        id: 1,
        name: 'typeB'
      },

      {
        WarehouseId: 2,
        id: 2,
        name: 'typeC'
      },

      {
        WarehouseId: 2,
        id: 3,
        name: 'typeE'
      }
    ]
  }


  /**
   * @description to get Warehouse
   * @returns Array of warehouse
   */
  getWarehouse(): Warehouse[] {
    return this.warehouse;
  }


  /**
   * @description to get Warehouse
   * @returns Array of warehouse
   */
  getWarehouseTypesById(id: number): WarehouseType[] {
    return this.types.filter( type => type.WarehouseId == id )
  }

  





}
