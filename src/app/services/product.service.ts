import { Product } from '../model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(
    private httpClient: HttpClient
  ) {
  }
  dataUrl:string = "http://localhost:3000/product";

  public getAllProducts(): Observable<any> {
    return this.httpClient.get<any>(this.dataUrl);
  }
}
