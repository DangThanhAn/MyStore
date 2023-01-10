import { ProductService } from '../../services/product.service';
import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../../model/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]

})
export class ProductComponent implements OnInit {
  @Input() products?:Product | any;
  @Input() bgColor?:string|any;
  @Input() color?:string|any;
  @Input() bgColorSale?:string|any;
  @Input() ColorSale?:string|any;
  constructor() {

  }
  ngOnInit(): void {
  }

}
