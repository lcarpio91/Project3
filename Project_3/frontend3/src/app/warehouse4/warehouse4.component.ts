import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Warehouse4 } from '../model/warehouse4';

@Component({
  selector: 'app-warehouse4',
  templateUrl: './warehouse4.component.html',
  styleUrls: ['./warehouse4.component.css']
})
export class Warehouse4Component {
  localWarehouse4: any = [];

  constructor(private backendService: BackendService) {
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
}
