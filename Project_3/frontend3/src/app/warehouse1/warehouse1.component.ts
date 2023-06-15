import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Warehouse1 } from '../model/warehouse1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse1',
  templateUrl: './warehouse1.component.html',
  styleUrls: ['./warehouse1.component.css']
})
export class Warehouse1Component {

  localWarehouse1: any = [];
  showUpdateForm: boolean = false;
  showAddForm: boolean = false;
  selectedProduct: Warehouse1 | null = null;

  choseProductId: number = 0;
  formId: string = '';
  formName: string = '';
  formPrice: string = '';
  formQuantity: string = '';
  formUpc: string = '';

  constructor(private backendService: BackendService,
              private router: Router) {
    this.getAllProductsW1();
  }

  getAllProductsW1(): void {
    this.localWarehouse1 = [];
    this.backendService.getAllProductsW1().subscribe((data) => {

     
      for(let warehouse1 of data.body) {
        this.localWarehouse1.push(new Warehouse1(warehouse1.productId,
                                                 warehouse1.productName,
                                                 warehouse1.productPrice,
                                                 warehouse1.quantity,
                                                 warehouse1.upc));
      

      }
    });
  }

  getProductDetails(productId: number): void {
    this.router.navigate(['warehouse1/details/' + productId]);
  }

  addNewProduct(): void {
    this.backendService.addProductByBodyW1(new Warehouse1(0, this.formName, Number (this.formPrice), Number (this.formQuantity), this.formUpc))
        .subscribe(() => this.getAllProductsW1());
       this.resetForm();
  }

  updateProduct(): void {
    this.backendService.updateProductW1(new Warehouse1( Number(this.formId),
                                                        this.formName,
                                                        Number(this.formPrice),
                                                        Number(this.formQuantity),
                                                        this.formUpc)).subscribe(() => this.getAllProductsW1());
    this.resetForm();
  }

  chosenProduct(warehouse1: Warehouse1): void {
    this.showAddForm = false;
    this.showUpdateForm = true;
    this.selectedProduct = { ...warehouse1 };
    this.formId = String(this.selectedProduct.productId);
    this.formName = this.selectedProduct.productName;
    this.formPrice = String(this.selectedProduct.productPrice);
    this.formQuantity = String(this.selectedProduct.quantity);
    this.formUpc = this.selectedProduct.upc;
  }

  resetFormAdd(): void {
    this.formId = '';
    this.formName = '';
    this.formPrice = '';
    this.formQuantity = '';
    this.formUpc = '';
  }

  resetForm(): void {
    this.showAddForm = false; 
    this.showUpdateForm = false;
    this.formId = '';
    this.formName = '';
    this.formPrice = '';
    this.formQuantity = '';
    this.formUpc = '';
  }


}
