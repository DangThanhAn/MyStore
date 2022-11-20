import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() {
  }
  public getProductsWakanda(){
    let products: Product[];
    products = [
      new Product(1,"Áo thun Marvel Oversize Graffiti Warrior King",259000,"Đen trắng","L",
      "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/ao-thun-black-panther-warriorking1_61.jpg",
      "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/image/November2022/ao-thun-Marvel-Oversize-Graffiti-Warrior-King-1_2_21.jpg",
      "Mua 2 được giảm thêm 10%",""),
      new Product(2,"Áo thun Marvel Oversize Wakanda Forever - Panther Pride",259000,"Đen trắng","L"
      ,"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/DSC01179_BP.jpg"
      ,"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/ao-thun-Marvel-Oversize-Wakanda-Forever---Panther-Pride-1-1.jpg"
      ,"Mua 2 được giảm thêm 10%",""),
      new Product(3,"Áo thun Marvel Oversize Black Panther - Energy Pulse",259000,"Đen trắng","L"
      ,"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/ao-thun-black-panther-energypulse2_49.jpg",
      "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/ao-thun-black-panther-energypulse5_2.jpg"
      ,"Mua 2 được giảm thêm 10%",""),
      new Product(4,"Áo thun Marvel Oversize Pride Wakanda",259000,"Đen trắng","L"
      ,"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/DSC01197_copy.jpg",
      "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-thun-Marvel-Oversize-Pride-Wakanda-3.jpg",
      "Mua 2 được giảm thêm 10%",""),
    ]
    return products;
  }
  public getProductsWinter(){
    let products: Product[];
    products = [
      new Product(1,"Mũ len thêu logo Coolmate",129000,"Kem","L",
      "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/mu-len-theu-logo-coolmate-mau-den5_88.jpg",
      "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/mu-len-theu-logo-coolmate-mau-kem1_86.jpg",
      "Mua 2 được giảm thêm 10%",""),
      new Product(2,"Áo thun thể thao dài tay nam Recycle Active",199000,"Đen ","L"
      ,"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-thun-the-thao-dai-tay-recycle-active-xam-dam_70.jpg"
      ,"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-thun-the-thao-dai-tay-recycle-active-xam-dam_70.jpg"
      ,"Mua 2 được giảm thêm 10%",""),
      new Product(3,"Áo Hoodie nam Daily Wear (mũ trùm có dây rút)",339000,"Đen","L"
      ,"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-hoodie-den4.jpg",
      "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-hoodie-den2.jpg"
      ,"Mua 2 được giảm thêm 10%",""),
      new Product(4,"Áo khoác nam có mũ Daily Wear - trượt nước, chống UV 99%",449000,"Đen","L"
      ,"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/September2022/ao-khoac-mu-daily-wear-xam-6_61.jpg",
      "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-khoac-mu-daily-wear-den-6.jpg",
      "Mua 2 được giảm thêm 10%",""),
    ]
    return products;
  }
}
