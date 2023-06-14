import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Warehouse4 } from 'src/app/model/warehouse4';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-warehouse4details',
  templateUrl: './warehouse4details.component.html',
  styleUrls: ['./warehouse4details.component.css']
})
export class Warehouse4detailsComponent {

  localWarehouse4: Warehouse4 = new Warehouse4(0, '', 0, 0, '');

  constructor(private backendService: BackendService,
    private activatedRoute: ActivatedRoute) {

      this.backendService.getProductByIdW4(this.activatedRoute.snapshot.params['id']).subscribe(data => {
        this.localWarehouse4 = new Warehouse4(data.body.productId,
                                              data.body.productName,
                                              data.body.productPrice,
                                              data.body.quantity,
                                              data.body.upc);
  });

}

}
