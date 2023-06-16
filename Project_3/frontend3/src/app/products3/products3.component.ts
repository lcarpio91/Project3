import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Router } from '@angular/router';
import { Products } from '../model/products';
import { Warehouses } from '../model/warehouses';

@Component({
  selector: 'app-products3',
  templateUrl: './products3.component.html',
  styleUrls: ['./products3.component.css']
})
export class Products3Component {

  localWarehouse3: any = [];
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
  this.getAllProductsW3();
}

getAllProductsW3(): void {
  this.localWarehouse3 = [];
  const warehouseId: number = 3;

  this.backendService.getWarehouse3(warehouseId).subscribe((data) => {

    for(let warehouse3 of data.body) {
      this.localWarehouse3.push(new Products(warehouse3.productId,
                                               warehouse3.productName,
                                               warehouse3.productPrice,
                                               warehouse3.quantity,
                                               warehouse3.upc,
                                               new Warehouses(warehouse3.warehouses.warehousesId,
                                                            warehouse3.warehouses.capacity)));
   

    }
  });
}

getProductDetails(productId: number): void {
  this.router.navigate(['products3/details/' + productId]);
}

addNewProduct(): void {

  this.backendService.addProductByBodyW3P(new Products(0, this.formName, Number(this.formPrice), Number(this.formQuantity), this.formUpc,
                                        new Warehouses(3, 2500)))
      .subscribe(() => this.getAllProductsW3());

     this.resetForm();
}

updateProduct(): void {
  this.backendService.updateProductW1P(new Products( Number(this.formId),
                                                      this.formName,
                                                      Number(this.formPrice),
                                                      Number(this.formQuantity),
                                                      this.formUpc,
                                      new Warehouses(3, 2500))).subscribe(() => this.getAllProductsW3());
  
  this.resetForm();
}

deleteProduct(): void {
  if(this.selectedProduct) {
    this.backendService.deleteProductByIdW1P(Number(this.selectedProduct.productId))
    .subscribe(() => this.getAllProductsW3());
    this.resetForm();
  };
}

chosenProduct(warehouse3: Products): void {
  this.showAddForm = false;
  this.showUpdateForm = true;
  this.selectedProduct = { ...warehouse3 };
  this.formId = String(this.selectedProduct.productId);
  this.formName = this.selectedProduct.productName;
  this.formPrice = String(this.selectedProduct.productPrice);
  this.formQuantity = String(this.selectedProduct.quantity);
  this.formUpc = this.selectedProduct.upc;
  this.formWarehouseId = String(this.selectedWarehouse?.warehouseId);
  this.formCapacity = String(this.selectedWarehouse?.capacity);
}

chosenToDelete(warehouse3: Products): void {
  this.showDelete = true;
  this.selectedProduct = { ...warehouse3 };
  this.formId = String(this.selectedProduct.productId);
  this.backendService.deleteProductByIdW1P(Number(this.formId)).subscribe(() => this.getAllProductsW3());

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
