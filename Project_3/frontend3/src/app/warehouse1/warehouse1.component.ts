import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Warehouse1 } from '../model/warehouse1';

@Component({
  selector: 'app-warehouse1',
  templateUrl: './warehouse1.component.html',
  styleUrls: ['./warehouse1.component.css']
})
export class Warehouse1Component {

  localWarehouse1: any = [];

  constructor(private backendService: BackendService) {
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

}
