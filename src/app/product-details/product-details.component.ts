import { ProductService } from './../product.service';
import { Product,products} from './../product';
import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product :Product|undefined;
  items:Product | any;
  constructor(private route: ActivatedRoute,private products:ProductService)  {
    this.items = this.products.getProductsWakanda(); // danh sách tìm kiếm của mình
    if(this.isChecked) this.colorConvert="Đen"; // default là mãu đen
   }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productID'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.productID === productIdFromRoute);
  }
  size:string|undefined;
  color:string|undefined;
  colorConvert:string|undefined;
  isChecked:boolean=true;
  isChecked1:boolean=false;
  setSize(event:any){
    this.size = event.target.value.toUpperCase();
  }
  setColor(event:any){
    this.color = event.target.value;
    if(this.color == 'den'){
      this.isChecked=true;
      this.isChecked1=false;
    }
    if(this.color == 'tim'){
      this.isChecked=false;
      this.isChecked1=true;
    }
    if(this.isChecked) this.colorConvert="Đen";
    if(this.isChecked1) this.colorConvert="Tím";
  }
}
