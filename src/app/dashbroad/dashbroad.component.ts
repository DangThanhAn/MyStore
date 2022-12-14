import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbroad',
  templateUrl: './dashbroad.component.html',
  styleUrls: ['./dashbroad.component.css']
})
export class DashbroadComponent implements OnInit {
  tabIndex: number = 1;
  productsWakanda: Product[] = [];
  productsWinter: Product[]  = [];
  productsAccessory: Product[]  = [];
  constructor(private productService:ProductService) {
   }
  isActive:Boolean = true;
  isActive2:Boolean = false;
  isActive3:Boolean = false;
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data)=>{
      console.log("Sản phẩm lấy từ service: ");
      console.log(data);
      data.forEach((element: Product) => {
        if(element.cataloryID == "1"){
          this.productsWakanda.push(element);
        }
        if(element.cataloryID == "2"){
          this.productsWinter?.push(element);
        }
      });
      // console.log(this.productsWakanda);
      // console.log(this.productsWinter);

    })
  }
  changeTab(tabIndex:number){
    if(tabIndex == 2){
      this.isActive2 = true;
      this.isActive= false;
      this.isActive3 = false;
    }else if(tabIndex == 3){
      this.isActive2 = false;
      this.isActive= false;
      this.isActive3 = true;
    }else{
      this.isActive2 = false;
      this.isActive= true;
      this.isActive3 = false;
    }
    this.tabIndex = tabIndex;
  }

}
