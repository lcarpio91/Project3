import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Warehouse1 } from '../model/warehouse1';



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  ulr: string = environment.backendURL;
  warehouse1: string = 'warehouse1';
  warehouse2: string = 'warehouse2';
  warehouse3: string = 'warehouse3';
  warehouse4: string = 'warehouse4';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + 'warehouse1',
                              { observe: 'response' });
  }
}
