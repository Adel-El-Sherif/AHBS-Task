import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Product } from '../../models/product/product';
import { Warehouse } from '../../models/warehouse/warehouse';
import { ProductService } from '../../services/product/product.service';
import { WarehouseType } from '../../models/warehous-types/warehous-types';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  // begin:: decorator properties _____
  @Output() searchResult: EventEmitter<Product[]> = new EventEmitter();
  // end:: decorator properties _____


  // begin:: properties ____
  myForm: any;
  selectedTypeID: any; 
  selectedCar: number = 0;
  selectedWarehouseID: any;
  products: Product[] = [];
  warehouse: Warehouse[] = [];
  color: ThemePalette = 'primary';
  productClassification: string = '';
  warehouseTypes: WarehouseType[] = [];
  // end:: properties ____

  // begin:: booleans ____
  showProductField: boolean = false;
  isShowZero: boolean = false;
  // end:: booleans ____

  
  constructor(
    private _FormBuilder: FormBuilder,
    private _ProductService : ProductService
  ) {}

  ngOnInit(): void {
    this.loadForm();
    this.getData();    
  }


  // To build the form 
  loadForm(): void {
    this.myForm = this._FormBuilder.group({
      warehouseID: [null, Validators.compose([Validators.required])],
      typeId: [null, Validators.compose([Validators.required])],
      showZero: [false],
      productClassification: [{value: 'all', disabled: true}],
      selectedProductsIds: [[]]
    })
  }


  // On Warehouse Change
  onWarehouseChange(): void {
    this.products = [];
    this.myForm.get('typeId').setValue(null);
    this.myForm.get('selectedProductsIds').setValue([]);
    this.selectedWarehouseID = this.myForm.get('warehouseID').value;
    this.getWarehouseTypesById(this.selectedWarehouseID);
  }


  // On Warehouse Types Change
  onWarehouseTypesChange(): void {
    this.myForm.get('selectedProductsIds').setValue([]);
    this.selectedTypeID = this.myForm.get('typeId').value;
    if (this.selectedTypeID ) {
      (this.myForm.get('productClassification') as FormControl).enable()
      this.getProducts(this.selectedTypeID, [], this.isShowZero);
    } else {
      (this.myForm.get('productClassification') as FormControl).disable()
    }
  }
  
  // On show Zero Change
  showZeroChange(): void {
    this.myForm.get('selectedProductsIds').setValue([]);
    this.isShowZero = this.myForm.get('showZero').value;
    this.getProducts(this.selectedTypeID, [], this.isShowZero);
  }



  // On Product Classification Change
  onProductClassificationChange(): void {
    let productFormControl: FormControl = this.myForm.get('selectedProductsIds');
    productFormControl.setValue([]);
    let prodClassValue = this.myForm.get('productClassification').value;
    if(prodClassValue == 'specific') {
      this.showProductField = true;
      productFormControl.setValidators(Validators.compose([Validators.required]));
      productFormControl.updateValueAndValidity();  
    } else {
      this.showProductField = false;
      productFormControl.setValidators([]);
      productFormControl.updateValueAndValidity();  
    }
  }


  // To get all products by type id 
  getProducts(typeId: number, productIDs?: number[], showZero?: boolean): void {
    this.products = this._ProductService.getProducts(typeId, productIDs, showZero);
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
   * @returns {Boolean}
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


  // On my form submit 
  search(): void {
    let formValue = this.myForm.value;
    let searchResult = this._ProductService.getProducts(formValue.typeId, formValue.selectedProductsIds, formValue.showZero);
    this.searchResult.emit(searchResult)   
    console.log(formValue.showZero);
     
  }

}
