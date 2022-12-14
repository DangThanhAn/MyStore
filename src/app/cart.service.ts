import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http : HttpClient
  ) { }
  url : string = "http://localhost:3000/cart";
  public addToCart(product: Product):Observable<any>{
    // console.log("đây là sản phẩm muốn thêm: ", product);
    return this.http.post<any>(this.url,product);
  }

  public updateAProduct(product: Product , id: number):Observable<any>{
    return this.http.put<any>(`${this.url}/`+id,product);
  }
  public deleteAProduct(id: number):Observable<any>{
    return this.http.delete<any>(`${this.url}/`+id);
  }

  public getAllItemsInCart():Observable<any>{
    return this.http.get<any>(this.url);
  }

  clearCart() {
    return this.http.delete(this.url);
  }
}
