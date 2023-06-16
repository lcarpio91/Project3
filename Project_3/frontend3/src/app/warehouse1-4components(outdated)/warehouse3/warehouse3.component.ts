import { Component } from '@angular/core';
import { BackendService } from '../../service/backend.service';
import { Warehouse3 } from '../../model/warehouse3';
import { Router } from '@angular/router';


@Component({
  selector: 'app-warehouse3',
  templateUrl: './warehouse3.component.html',
  styleUrls: ['./warehouse3.component.css']
})
export class Warehouse3Component {
  localWarehouse3: any = [];
  showUpdateForm: boolean = false;
  showAddForm: boolean = false;
  selectedProduct: Warehouse3 | null = null;

  choseProductId: number = 0;
  formId: string = '';
  formName: string = '';
  formPrice: string = '';
  formQuantity: string = '';
  formUpc: string = '';

  constructor(private backendService: BackendService,
              private router: Router) {
   this.getAllProductsW3();
  }

  getAllProductsW3(): void {
    this.localWarehouse3 = [];
    this.backendService.getAllProductsW3().subscribe((data) => {

      
      for(let warehouse1 of data.body) {
        this.localWarehouse3.push(new Warehouse3(warehouse1.productId,
                                                 warehouse1.productName,
                                                 warehouse1.productPrice,
                                                 warehouse1.quantity,
                                                 warehouse1.upc));
   

      }
    });
  }

  getProductDetails(productId: number): void {
    this.router.navigate(['warehouse3/details/' + productId]);
  }

  addNewProduct(): void {
    this.backendService.addProductByBodyW3(new Warehouse3(0, this.formName, Number (this.formPrice), Number (this.formQuantity), this.formUpc))
        .subscribe(() => this.getAllProductsW3());
       this.resetForm();
  }

  updateProduct(): void {
    this.backendService.updateProductW3(new Warehouse3( Number(this.formId),
                                                        this.formName,
                                                        Number(this.formPrice),
                                                        Number(this.formQuantity),
                                                        this.formUpc)).subscribe(() => this.getAllProductsW3());
    this.resetForm();
  }

  chosenProduct(warehouse3: Warehouse3): void {
    this.showAddForm = false;
    this.showUpdateForm = true;
    this.selectedProduct = { ...warehouse3 };
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
