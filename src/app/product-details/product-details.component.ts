import { ProductService } from './../product.service';
import { Product,products} from './../product';
import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product :Product|any;
  items:Product | any;
  constructor(private route: ActivatedRoute,private products:ProductService,private router: Router)  {
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
  //
  isCurrent:boolean = true // ảnh nhỏ
  isCurrent1:boolean |any // ảnh nhỏ
  imgCurrent:string|any;
  //
  isShowToast:boolean = false;
  setSize(event:any){
    this.size = event.target.value.toUpperCase();
    this.result = true;
  }
  // Khi click vào thì thực hiện
  // 1. binđing class qua thuộc tính isCheck
  // 2. Đổi img banner
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
  // Nếu chưa chọn size thì show toast message
  result:boolean|any;
  checkChooseSize(){
    this.result =(this.size =="" || this.size ==null) ? this.isShowToast = true : this.isShowToast = false
  }
  // Trả về false thuộc tính isShowToast
  returnDefaultValue(){
    this.isShowToast=false;
  }
  // Có lỗi thì show toast
  showError(){
    this.isShowToast = true;
  }
  goCart(){
    this.router.navigate(['/','cart']);
  }
  // Tăng giảm số lượng sản phẩm
  count:number=1;
  countSub(){
    this.count--;
  }
  countAdd(){
    this.count++;
  }
}
