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

  constructor(private backendService: BackendService,
    private router: Router) {
this.getAllProductsW1();
}

getAllProductsW1(): void {
  this.localWarehouse1 = [];
  const warehouseId: number = 1;

  this.backendService.getWarehouse1(warehouseId).subscribe((data) => {

    console.log(data.body);
    for(let warehouse1 of data.body) {
      this.localWarehouse1.push(new Products(warehouse1.productId,
                                               warehouse1.productName,
                                               warehouse1.productPrice,
                                               warehouse1.quantity,
                                               warehouse1.upc,
                                               new Warehouses(warehouse1.warehouses.warehousesId,
                                                            warehouse1.warehouses.capacity)));
    console.log(this.localWarehouse1);

    }
  });
}

}
