import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Warehouse3 } from 'src/app/model/warehouse3';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-warehouse3details',
  templateUrl: './warehouse3details.component.html',
  styleUrls: ['./warehouse3details.component.css']
})
export class Warehouse3detailsComponent {

  localWarehouse3: Warehouse3 = new Warehouse3(0, '', 0, 0, '');

  constructor(private backendService: BackendService,
    private activatedRoute: ActivatedRoute) {

      this.backendService.getProductByIdW3(this.activatedRoute.snapshot.params['id']).subscribe(data => {
        this.localWarehouse3 = new Warehouse3(data.body.productId,
                                              data.body.productName,
                                              data.body.productPrice,
                                              data.body.quantity,
                                              data.body.upc);
  });

}
}
