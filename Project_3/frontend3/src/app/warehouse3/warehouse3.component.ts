import { Component } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Warehouse3 } from '../model/warehouse3';
import { Router } from '@angular/router';


@Component({
  selector: 'app-warehouse3',
  templateUrl: './warehouse3.component.html',
  styleUrls: ['./warehouse3.component.css']
})
export class Warehouse3Component {
  localWarehouse3: any = [];

  constructor(private backendService: BackendService,
              private router: Router) {
   this.getAllProductsW3();
  }

  getAllProductsW3(): void {
    this.localWarehouse3 = [];
    this.backendService.getAllProductsW3().subscribe((data) => {

      console.log(data.body);
      for(let warehouse1 of data.body) {
        this.localWarehouse3.push(new Warehouse3(warehouse1.productId,
                                                 warehouse1.productName,
                                                 warehouse1.productPrice,
                                                 warehouse1.quantity,
                                                 warehouse1.upc));
      console.log(this.localWarehouse3);

      }
    });
  }

  getProductDetails(productId: number): void {
    this.router.navigate(['warehouse3/details/' + productId]);
  }
}
