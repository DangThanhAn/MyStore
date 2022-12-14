import { ProductService } from './../product.service';
import { Product, products } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbroad',
  templateUrl: './dashbroad.component.html',
  styleUrls: ['./dashbroad.component.css']
})
export class DashbroadComponent implements OnInit {
  tabIndex: number = 1;
  productsWakanda?: Product[];
  productsWinter?: Product[];
  constructor(private productService:ProductService) {
    this.productsWakanda = this.productService.getProductsWakanda();
    this.productsWinter = this.productService.getProductsWinter();
   }
  isActive:Boolean = true;
  isActive2:Boolean = false;
  isActive3:Boolean = false;

  // public leads: Product[]=[];
  ngOnInit(): void {
    // this.productService.getLeads().subscribe((data)=>{
    //   this.leads=data;
    //   this.loading = false;
    // })
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
