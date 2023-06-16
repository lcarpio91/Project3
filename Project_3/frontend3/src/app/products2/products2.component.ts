import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Router } from '@angular/router';
import { Products } from '../model/products';
import { Warehouses } from '../model/warehouses';

@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.css']
})
export class Products2Component {

  localWarehouse2: any = [];
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
  this.getAllProductsW2();
}

getAllProductsW2(): void {
  this.localWarehouse2 = [];
  const warehouseId: number = 2;

  this.backendService.getWarehouse2(warehouseId).subscribe((data) => {

    for(let warehouse2 of data.body) {
      this.localWarehouse2.push(new Products(warehouse2.productId,
                                               warehouse2.productName,
                                               warehouse2.productPrice,
                                               warehouse2.quantity,
                                               warehouse2.upc,
                                               new Warehouses(warehouse2.warehouses.warehousesId,
                                                            warehouse2.warehouses.capacity)));
   

    }
  });
}

getProductDetails(productId: number): void {
  this.router.navigate(['products1/details/' + productId]);
}

addNewProduct(): void {

  this.backendService.addProductByBodyW2P(new Products(0, this.formName, Number(this.formPrice), Number(this.formQuantity), this.formUpc,
                                        new Warehouses(2, 2500)))
      .subscribe(() => this.getAllProductsW2());

     this.resetForm();
}

updateProduct(): void {
  this.backendService.updateProductW2P(new Products( Number(this.formId),
                                                      this.formName,
                                                      Number(this.formPrice),
                                                      Number(this.formQuantity),
                                                      this.formUpc,
                                      new Warehouses(2, 2500))).subscribe(() => this.getAllProductsW2());
  
  this.resetForm();
}

deleteProduct(): void {
  if(this.selectedProduct) {
    this.backendService.deleteProductByIdW1P(Number(this.selectedProduct.productId))
    .subscribe(() => this.getAllProductsW2());
    this.resetForm();
  };
}

chosenProduct(warehouse2: Products): void {
  this.showAddForm = false;
  this.showUpdateForm = true;
  this.selectedProduct = { ...warehouse2 };
  this.formId = String(this.selectedProduct.productId);
  this.formName = this.selectedProduct.productName;
  this.formPrice = String(this.selectedProduct.productPrice);
  this.formQuantity = String(this.selectedProduct.quantity);
  this.formUpc = this.selectedProduct.upc;
  this.formWarehouseId = String(this.selectedWarehouse?.warehouseId);
  this.formCapacity = String(this.selectedWarehouse?.capacity);
}

chosenToDelete(warehouse2: Products): void {
  this.showDelete = true;
  this.selectedProduct = { ...warehouse2 };
  this.formId = String(this.selectedProduct.productId);
  this.backendService.deleteProductByIdW1P(Number(this.formId)).subscribe(() => this.getAllProductsW2());

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
