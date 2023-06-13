import { Component } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { Warehouse1 } from 'src/app/model/warehouse1';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warehouse1details',
  templateUrl: './warehouse1details.component.html',
  styleUrls: ['./warehouse1details.component.css']
})
export class Warehouse1detailsComponent {

  localWarehouse1: Warehouse1 = new Warehouse1(0, '', 0, 0, '');

  constructor(private backendService: BackendService,
              private activatedRoute: ActivatedRoute) {

  this.backendService.getProductByIdW1(this.activatedRoute.snapshot.params['id']).subscribe(data => {
        this.localWarehouse1 = new Warehouse1(data.body.productId,
                                              data.body.productName,
                                              data.body.productPrice,
                                              data.body.quantity,
                                              data.body.upc);
  });

  }

}
