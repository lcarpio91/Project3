import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Router } from '@angular/router';
import { Products } from '../model/products';
import { Warehouses } from '../model/warehouses';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  localWarehouse1: any = [];
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
  this.getAllProductsW1();
}

getAllProductsW1(): void {
  this.localWarehouse1 = [];
  const warehouseId: number = 1;

  this.backendService.getWarehouse1(warehouseId).subscribe((data) => {

    for(let warehouse1 of data.body) {
      this.localWarehouse1.push(new Products(warehouse1.productId,
                                               warehouse1.productName,
                                               warehouse1.productPrice,
                                               warehouse1.quantity,
                                               warehouse1.upc,
                                               new Warehouses(warehouse1.warehouses.warehousesId,
                                                            warehouse1.warehouses.capacity)));
   

    }
  });
}

getProductDetails(productId: number): void {
  this.router.navigate(['products1/details/' + productId]);
}

addNewProduct(): void {

  this.backendService.addProductByBodyW1P(new Products(0, this.formName, Number(this.formPrice), Number(this.formQuantity), this.formUpc,
                                        new Warehouses(1, 2500)))
      .subscribe(() => this.getAllProductsW1());

     this.resetForm();
}

updateProduct(): void {
  this.backendService.updateProductW1P(new Products( Number(this.formId),
                                                      this.formName,
                                                      Number(this.formPrice),
                                                      Number(this.formQuantity),
                                                      this.formUpc,
                                      new Warehouses(1, 2500))).subscribe(() => this.getAllProductsW1());
  
  this.resetForm();
}

deleteProduct(): void {
  if(this.selectedProduct) {
    this.backendService.deleteProductByIdW1P(Number(this.selectedProduct.productId))
    .subscribe(() => this.getAllProductsW1());
    this.resetForm();
  };
}

chosenProduct(warehouse1: Products): void {
  this.showAddForm = false;
  this.showUpdateForm = true;
  this.selectedProduct = { ...warehouse1 };
  this.formId = String(this.selectedProduct.productId);
  this.formName = this.selectedProduct.productName;
  this.formPrice = String(this.selectedProduct.productPrice);
  this.formQuantity = String(this.selectedProduct.quantity);
  this.formUpc = this.selectedProduct.upc;
  this.formWarehouseId = String(this.selectedWarehouse?.warehouseId);
  this.formCapacity = String(this.selectedWarehouse?.capacity);
}

chosenToDelete(warehouse1: Products): void {
  this.showDelete = true;
  this.selectedProduct = { ...warehouse1 };
  this.formId = String(this.selectedProduct.productId);
  this.backendService.deleteProductByIdW1P(Number(this.formId)).subscribe(() => this.getAllProductsW1());

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
