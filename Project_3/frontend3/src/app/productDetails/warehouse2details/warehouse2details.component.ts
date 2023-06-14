import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Warehouse2 } from 'src/app/model/warehouse2';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-warehouse2details',
  templateUrl: './warehouse2details.component.html',
  styleUrls: ['./warehouse2details.component.css']
})
export class Warehouse2detailsComponent {

  localWarehouse2: Warehouse2 = new Warehouse2(0, '', 0, 0, '');

  constructor(private backendService: BackendService,
    private activatedRoute: ActivatedRoute) {

      this.backendService.getProductByIdW2(this.activatedRoute.snapshot.params['id']).subscribe(data => {
        this.localWarehouse2 = new Warehouse2(data.body.productId,
                                              data.body.productName,
                                              data.body.productPrice,
                                              data.body.quantity,
                                              data.body.upc);
  });

}
}
