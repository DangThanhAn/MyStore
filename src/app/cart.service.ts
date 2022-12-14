import { HttpClient } from '@angular/common/http';

import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor(
    private http : HttpClient
  ) { }
  addToCart(product: Product) {
    this.items.push(product);
  }
  url : string = "http://localhost:3000/cart";
  getItems() {
    return this.http.get<any>(this.url);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
