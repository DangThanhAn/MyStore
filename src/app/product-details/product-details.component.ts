
import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Product} from './../product';
import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product :Product|any;
  products: Product[]=[];
  constructor(
    private route: ActivatedRoute,
    private productsService:ProductService,
    private router: Router,
    private cartService: CartService,
    )  {
    if(this.isChecked)this.colorConvert="Đen";

   }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIDFromRoute = Number(routeParams.get('productID'));
    this.productsService.getAllProducts().subscribe((data)=>{
      this.products = data;
      this.product = this.products.find(x => x.productID == productIDFromRoute);
      this.product.colorCurrent="Đen";
      this.product.quanlity = 1;
    });

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
    this.product.sizeCurrent = this.size;
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
    if(this.isChecked) {
      this.colorConvert="Đen";
      this.product.colorCurrent = this.colorConvert;
    };
    if(this.isChecked1){
      this.colorConvert="Tím";
      this.product.colorCurrent = this.colorConvert;
    }
  }
  // Nếu chưa chọn size thì show toast message
  result:boolean|any;
  checkChooseSize(){
    this.result =(this.size =="" || this.size ==null) ? this.isShowToast = true : this.isShowToast = false
  }
  // Trả về false thuộc tính isShowToast
  returnDefaultValue(){
    this.isShowToast=false;
    this.addSuccess = false;
  }
  // Có lỗi thì show toast
  showError(){
    this.isShowToast = true;
  }

  // Tăng giảm số lượng sản phẩm
  count:number= 1;
  countSub(){
    this.count--;
    this.product.quanlity = this.count;
  }
  countAdd(){
    this.count++;
    this.product.quanlity = this.count;
  }
  addSuccess: boolean = false;
  // Add cart
  addToCart(product: Product) {
    this.cartService.addToCart(product).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
    // this.router.navigate(['/','cart']);
    this.addSuccess = true;
    // window.alert('Your product has been added to the cart!');
  }
}
