import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Warehouse4 } from '../model/warehouse4';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse4',
  templateUrl: './warehouse4.component.html',
  styleUrls: ['./warehouse4.component.css']
})
export class Warehouse4Component {
  localWarehouse4: any = [];
  showUpdateForm: boolean = false;
  showAddForm: boolean = false;
  selectedProduct: Warehouse4 | null = null;

  choseProductId: number = 0;
  formId: string = '';
  formName: string = '';
  formPrice: string = '';
  formQuantity: string = '';
  formUpc: string = '';

  constructor(private backendService: BackendService,
              private router: Router) {
   this.getAllProductsW4();
  }

  getAllProductsW4(): void {
    this.localWarehouse4 = [];
    this.backendService.getAllProductsW4().subscribe((data) => {

      console.log(data.body);
      for(let warehouse1 of data.body) {
        this.localWarehouse4.push(new Warehouse4(warehouse1.productId,
                                                 warehouse1.productName,
                                                 warehouse1.productPrice,
                                                 warehouse1.quantity,
                                                 warehouse1.upc));
      console.log(this.localWarehouse4);

      }
    });
  }

  getProductDetails(productId: number): void {
    this.router.navigate(['warehouse4/details/' + productId]);
  }

  addNewProduct(): void {
    this.backendService.addProductByBodyW4(new Warehouse4(0, this.formName, Number (this.formPrice), Number (this.formQuantity), this.formUpc))
        .subscribe(() => this.getAllProductsW4());
       this.resetForm();
  }

  updateProduct(): void {
    this.backendService.updateProductW4(new Warehouse4( Number(this.formId),
                                                        this.formName,
                                                        Number(this.formPrice),
                                                        Number(this.formQuantity),
                                                        this.formUpc)).subscribe(() => this.getAllProductsW4());
    this.resetForm();
  }

  chosenProduct(warehouse4: Warehouse4): void {
    this.showAddForm = false;
    this.showUpdateForm = true;
    this.selectedProduct = { ...warehouse4 };
    this.formId = String(this.selectedProduct.productId);
    this.formName = this.selectedProduct.productName;
    this.formPrice = String(this.selectedProduct.productPrice);
    this.formQuantity = String(this.selectedProduct.quantity);
    this.formUpc = this.selectedProduct.upc;
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
