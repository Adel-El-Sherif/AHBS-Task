import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { WarehouseType } from '../../models/warehous-types/warehous-types';
import { Warehouse } from '../../models/warehouse/warehouse';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  // begin:: properties ____
  myForm: any;
  warehouseID: any;
  selectedCar: number = 0;
  warehouse: Warehouse[] = [];
  color: ThemePalette = 'primary';
  warehouseTypes: WarehouseType[] = [];
  // end:: properties ____
  
  constructor(
    private _FormBuilder: FormBuilder,
    private _ProductService : ProductService
  ) {}

  ngOnInit(): void {
    this.loadForm();
    this.getData();    
  }

  // To init the form 
  loadForm(): void {
    this.myForm = this._FormBuilder.group({
      warehouseID: [null, Validators.compose([Validators.required])],
      typeId: [null, Validators.compose([Validators.required])]
    })
  }


  // On Warehouse Change
  onWarehouseChange(): void {
    this.warehouseID = this.myForm.get('typeId').setValue(null);
    this.warehouseID = this.myForm.get('warehouseID').value;
    this.getWarehouseTypesById(this.warehouseID);
  }
  
  

  // To get all data 
  getData(): void {
    this.getWarehouse();
  }

  // To get Warehouse
  getWarehouse(): void {
    this.warehouse = this._ProductService.getWarehouse();
  }

  // To get Warehouse
  getWarehouseTypesById(id: number): void {
    this.warehouseTypes = this._ProductService.getWarehouseTypesById(id);
  }




  /**
   * @description To check if control has error if touched
   * @param validation 
   * @param controlArrName 
   * @param controlObjName 
   * @param controlName 
   * @param index 
   * @returns 
   */
  controlHasError(validation: string, controlArrName: any, controlObjName: any, controlName: string, index?: any) {
    let control;
    if (controlArrName) {
      control = this.myForm.get(controlArrName)['controls'][index].controls[controlName];
    } else if (controlObjName) {
      control = this.myForm.controls[controlObjName]['controls'][controlName];
    } else {
      control = this.myForm.controls[controlName];
    }
    return control.hasError(validation) && (control.dirty || control.touched);
  }


}
