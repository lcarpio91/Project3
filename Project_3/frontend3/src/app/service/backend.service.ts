import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Warehouse1 } from '../model/warehouse1';
import { Warehouse2 } from '../model/warehouse2';
import { Warehouse3 } from '../model/warehouse3';
import { Warehouse4 } from '../model/warehouse4';
import { Products } from '../model/products';



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  ulr: string = environment.backendURL;
  products: string = 'products/';
  warehouse1: string = 'warehouse1/';
  warehouse2: string = 'warehouse2/';
  warehouse3: string = 'warehouse3/';
  warehouse4: string = 'warehouse4/';

  constructor(private http: HttpClient) { }

  /*
   * Warehouse 1(Products) methods
   * 
   */

  getWarehouse1(warehousesId: Number): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.products + 'w1/' + warehousesId,
                             { observe: 'response'})
  }

  getProductByIdW1P(productId: Products): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.products + productId,
                             { observe: 'response'});
  }

  updateProductW1P(warehouse1: Products): Observable<HttpResponse<any>> {
    return this.http.put<any>(this.ulr + this.products, warehouse1, { observe: 'response' });
  }

  addProductByBodyW1P(warehouse1: Products): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.ulr + this.products, warehouse1,
                              { observe: 'response'});
  }

  deleteProductByIdW1P(productId: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(this.ulr + this.products + 'id/' + productId,
                                { observe: 'response'});
  }

  




  /*
   * Warehouse 1 methods
   * 
   */
  getAllProductsW1(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse1,
                             { observe: 'response' });
  }

  getProductByIdW1(productId: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse1 + productId,
                             { observe: 'response'});
  }

  updateProductW1(warehouse1: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.put<any>(this.ulr + this.warehouse1, warehouse1, { observe: 'response' });
  }

  addProductByBodyW1(warehouse1: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.ulr + this.warehouse1, warehouse1,
                              { observe: 'response'});
  }

  deleteProductByIdW1(productId: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.delete<any>(this.ulr + this.warehouse1 + 'id/' + productId,
                                { observe: 'response'});
  }

  /*
   * Warehouse 2 methods
   * 
   */

  getAllProductsW2(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse2,
                             { observe: 'response' });
  }

  getProductByIdW2(productId: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse2 + productId,
                             { observe: 'response'});
  }

  updateProductW2(warehouse2: Warehouse2): Observable<HttpResponse<any>> {
    return this.http.put<any>(this.ulr + this.warehouse2, warehouse2, { observe: 'response' });
  }

  addProductByBodyW2(warehouse2: Warehouse2): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.ulr + this.warehouse2, warehouse2,
                              { observe: 'response'});
  }

  /*
   * Warehouse 3 methods
   * 
   */

  getAllProductsW3(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse3,
                             { observe: 'response' });
  }

  getProductByIdW3(productId: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse3 + productId,
                             { observe: 'response'});
  }

  updateProductW3(warehouse3: Warehouse3): Observable<HttpResponse<any>> {
    return this.http.put<any>(this.ulr + this.warehouse3, warehouse3, { observe: 'response' });
  }

  addProductByBodyW3(warehouse3: Warehouse3): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.ulr + this.warehouse3, warehouse3,
                              { observe: 'response'});
  }

  /*
   * Warehouse 4 methods
   * 
   */

  getAllProductsW4(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse4,
                             { observe: 'response' });
  }

  getProductByIdW4(productId: Warehouse1): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.ulr + this.warehouse4 + productId,
                             { observe: 'response'});
  }

  updateProductW4(warehouse4: Warehouse4): Observable<HttpResponse<any>> {
    return this.http.put<any>(this.ulr + this.warehouse4, warehouse4, { observe: 'response' });
  }

  addProductByBodyW4(warehouse4: Warehouse4): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.ulr + this.warehouse4, warehouse4,
                              { observe: 'response'});
  }



}
