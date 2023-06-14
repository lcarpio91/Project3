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

      console.log(data.body);
      for(let warehouse1 of data.body) {
        this.localWarehouse1.push(new Warehouse1(warehouse1.productId,
                                                 warehouse1.productName,
                                                 warehouse1.productPrice,
                                                 warehouse1.quantity,
                                                 warehouse1.upc));
      console.log(this.localWarehouse1);

      }
    });
  }


  getProductDetails(productId: number): void {
    this.router.navigate(['warehouse1/details/' + productId]);
  }

  addNewProduct(): void {
    this.backendService.addProductByBodyW1(new Warehouse1(0, this.formName, Number (this.formPrice), Number (this.formQuantity), this.formUpc))
        .subscribe(() => this.getAllProductsW1());
        this.formName = '';
        this.formPrice = '';
        this.formQuantity = '';
        this.formUpc = '';
  }

  updateProduct(): void {
    this.backendService.updateProductW1(new Warehouse1( Number(this.formId),
                                                        this.formName,
                                                        Number(this.formPrice),
                                                        Number(this.formQuantity),
                                                        this.formUpc)).subscribe(() => this.getAllProductsW1());
    this.formId = '';
    this.formName = '';
    this.formPrice = '';
    this.formQuantity = '';
    this.formUpc = '';
  }


}
