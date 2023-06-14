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
  warehouse1: string = 'warehouse1/';
  warehouse2: string = 'warehouse2/';
  warehouse3: string = 'warehouse3/';
  warehouse4: string = 'warehouse4/';

  constructor(private http: HttpClient) { }

  getAllProductsW1(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse1,
                             { observe: 'response' });
  }

  getProductByIdW1(productId: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse1 + productId,
                             { observe: 'response'});
  }

  addProductByBodyW1(warehouse1: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.ulr + this.warehouse1, warehouse1,
                              { observe: 'response'});
  }

  getAllProductsW2(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse2,
                             { observe: 'response' });
  }

  getProductByIdW2(productId: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse1 + productId,
                             { observe: 'response'});
  }

  getAllProductsW3(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse3,
                             { observe: 'response' });
  }

  getProductByIdW3(productId: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse1 + productId,
                             { observe: 'response'});
  }

  getAllProductsW4(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse4,
                             { observe: 'response' });
  }

  getProductByIdW4(productId: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse1 + productId,
                             { observe: 'response'});
  }

  updateProductW1(warehouse1: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.put<any>(this.ulr + 'warehouse1', warehouse1, { observe: 'response' });
  }



}
