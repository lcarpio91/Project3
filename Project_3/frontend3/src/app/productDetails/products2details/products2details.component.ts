import { Component } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/model/products';
import { Warehouses } from 'src/app/model/warehouses';

@Component({
  selector: 'app-products2details',
  templateUrl: './products2details.component.html',
  styleUrls: ['./products2details.component.css']
})
export class Products2detailsComponent {

  localWarehouse2: Products = new Products(0, '', 0, 0, '', new Warehouses(0, 0));


  constructor(private backendService: BackendService,
    private activatedRoute: ActivatedRoute) {

this.backendService.getProductByIdW2P(this.activatedRoute.snapshot.params['id']).subscribe(data => {
this.localWarehouse2 = new Products(data.body.productId,
                                    data.body.productName,
                                    data.body.productPrice,
                                    data.body.quantity,
                                    data.body.upc,
                                    new Warehouses(data.body.warehouses.warehouseId,
                                                   data.body.warehouses.capacity));
});

}
}
