import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Router } from '@angular/router';
import { Products } from '../model/products';
import { Warehouses } from '../model/warehouses';

@Component({
  selector: 'app-products4',
  templateUrl: './products4.component.html',
  styleUrls: ['./products4.component.css']
})
export class Products4Component {

  localWarehouse4: any = [];
  showUpdateForm: boolean = false;
  showAddForm: boolean = false;
  showDelete: boolean = true;
  selectedProduct: Products | null = null;
  selectedWarehouse: Warehouses | null = null;

  choseProductId: number = 0;
  formId: string = '';
  formName: string = '';
  formPrice: string = '';
  formQuantity: string = '';
  formUpc: string = '';
  formWarehouseId: string = '';
  formCapacity: string = '';

  constructor(private backendService: BackendService,
    private router: Router) {
    this.getAllProductsW4();
  }

  getAllProductsW4(): void {
    this.localWarehouse4 = [];
    const warehouseId: number = 4;
  
    this.backendService.getWarehouse4(warehouseId).subscribe((data) => {
  
      for(let warehouse4 of data.body) {
        this.localWarehouse4.push(new Products(warehouse4.productId,
                                                 warehouse4.productName,
                                                 warehouse4.productPrice,
                                                 warehouse4.quantity,
                                                 warehouse4.upc,
                                                 new Warehouses(warehouse4.warehouses.warehousesId,
                                                              warehouse4.warehouses.capacity)));
     
  
      }
    });
  }

  getProductDetails(productId: number): void {
    this.router.navigate(['products4/details/' + productId]);
  }

  addNewProduct(): void {

    this.backendService.addProductByBodyW4P(new Products(0, this.formName, Number(this.formPrice), Number(this.formQuantity), this.formUpc,
                                          new Warehouses(1, 2500)))
        .subscribe(() => this.getAllProductsW4());
  
       this.resetForm();
  }

  updateProduct(): void {
    this.backendService.updateProductW4P(new Products( Number(this.formId),
                                                        this.formName,
                                                        Number(this.formPrice),
                                                        Number(this.formQuantity),
                                                        this.formUpc,
                                        new Warehouses(1, 2500))).subscribe(() => this.getAllProductsW4());
    
    this.resetForm();
  }

  deleteProduct(): void {
    if(this.selectedProduct) {
      this.backendService.deleteProductByIdW4P(Number(this.selectedProduct.productId))
      .subscribe(() => this.getAllProductsW4());
      this.resetForm();
    };
  }

  chosenProduct(warehouse4: Products): void {
    this.showAddForm = false;
    this.showUpdateForm = true;
    this.selectedProduct = { ...warehouse4 };
    this.formId = String(this.selectedProduct.productId);
    this.formName = this.selectedProduct.productName;
    this.formPrice = String(this.selectedProduct.productPrice);
    this.formQuantity = String(this.selectedProduct.quantity);
    this.formUpc = this.selectedProduct.upc;
    this.formWarehouseId = String(this.selectedWarehouse?.warehouseId);
    this.formCapacity = String(this.selectedWarehouse?.capacity);
  }

  chosenToDelete(warehouse4: Products): void {
    this.showDelete = true;
    this.selectedProduct = { ...warehouse4 };
    this.formId = String(this.selectedProduct.productId);
    this.backendService.deleteProductByIdW1P(Number(this.formId)).subscribe(() => this.getAllProductsW4());
  
    this.resetForm();
  }

  resetFormAdd(): void {
    this.formId = '';
    this.formName = '';
    this.formPrice = '';
    this.formQuantity = '';
    this.formUpc = '';
    this.formWarehouseId = '';
    this.formCapacity = '';
  }

  resetForm(): void {
    this.showAddForm = false; 
    this.showUpdateForm = false;
    this.formId = '';
    this.formName = '';
    this.formPrice = '';
    this.formQuantity = '';
    this.formUpc = '';
    this.formWarehouseId = '';
    this.formCapacity = '';
  }
}
