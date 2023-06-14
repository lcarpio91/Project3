import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Warehouse2 } from '../model/warehouse2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-warehouse2',
  templateUrl: './warehouse2.component.html',
  styleUrls: ['./warehouse2.component.css']
})
export class Warehouse2Component {
  localWarehouse2: any = [];
  showUpdateForm: boolean = false;
  showAddForm: boolean = false;
  selectedProduct: Warehouse2 | null = null;

  choseProductId: number = 0;
  formId: string = '';
  formName: string = '';
  formPrice: string = '';
  formQuantity: string = '';
  formUpc: string = '';

  constructor(private backendService: BackendService,
              private router: Router) {
   this.getAllProductsW2();
  }

  getAllProductsW2(): void {
    this.localWarehouse2 = [];
    this.backendService.getAllProductsW2().subscribe((data) => {

      console.log(data.body);
      for(let warehouse1 of data.body) {
        this.localWarehouse2.push(new Warehouse2(warehouse1.productId,
                                                 warehouse1.productName,
                                                 warehouse1.productPrice,
                                                 warehouse1.quantity,
                                                 warehouse1.upc));
      console.log(this.localWarehouse2);

      }
    });
  }

  getProductDetails(productId: number): void {
    this.router.navigate(['warehouse2/details/' + productId]);
  }

  addNewProduct(): void {
    this.backendService.addProductByBodyW2(new Warehouse2(0, this.formName, Number (this.formPrice), Number (this.formQuantity), this.formUpc))
        .subscribe(() => this.getAllProductsW2());
       this.resetForm();
  }

    updateProduct(): void {
    this.backendService.updateProductW2(new Warehouse2( Number(this.formId),
                                                        this.formName,
                                                        Number(this.formPrice),
                                                        Number(this.formQuantity),
                                                        this.formUpc)).subscribe(() => this.getAllProductsW2());
    this.resetForm();
  }

    chosenProduct(warehouse2: Warehouse2): void {
    this.showAddForm = false;
    this.showUpdateForm = true;
    this.selectedProduct = { ...warehouse2 };
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

    cancelForm(): void {
    this.resetForm();
  }
}
