import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Warehouse2 } from '../model/warehouse2';

@Component({
  selector: 'app-warehouse2',
  templateUrl: './warehouse2.component.html',
  styleUrls: ['./warehouse2.component.css']
})
export class Warehouse2Component {
  localWarehouse2: any = [];

  constructor(private backendService: BackendService) {
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
}
