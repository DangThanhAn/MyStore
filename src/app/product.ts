export interface Product {
  productID:number ;
  name: string ;
  price:number;
  color:string;
  size: string;
  imgUrl:string;
  imgHover: string;
  sale:string;
  description:string;
}
export class Product {
  // productID:number ;
  // name: string ;
  // price:number;
  // color:string;
  // size: string;
  // imgUrl:string;
  // imgHover: string;
  // sale:string;
  constructor(productID:number, name: string ,price:number,color:string,size:string,imgUrl:string,imgHover:string,sale:string,description:string) {
      this.productID=productID;
      this.name=name;
      this.price=price;
      this.color = color;
      this.size = size;
      this.imgUrl = imgUrl;
      this.sale = sale;
      this.imgHover = imgHover;
      this.description = this.description;
  }
}
export const products = [
  {
    productID: 1,
    name: 'Áo thun Marvel Oversize Graffiti Warrior King',
    price: 259000,
    color:"Đen trắng",
    size: "L",
    imgUrl:"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/ao-thun-black-panther-warriorking1_61.jpg",
    sale:"Mua 2 được giảm thêm 10%",
    imgHover:"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/image/November2022/ao-thun-Marvel-Oversize-Graffiti-Warrior-King-1_2_21.jpg",
    description: 'A large phone with one of the best screens'
  },
  {
    productID: 2,
    name: 'Áo thun Marvel Oversize Wakanda Forever - Panther Pride',
    price: 259000,
    color:"Đen trắng",
    size: "L",
    imgUrl:"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/DSC01179_BP.jpg",
    sale:"Mua 2 được giảm thêm 10%",
    imgHover:"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/ao-thun-Marvel-Oversize-Wakanda-Forever---Panther-Pride-1-1.jpg",
    description: 'A large phone with one of the best screens'
  },
  {
    productID: 3,
    name: 'Áo thun Marvel Oversize Black Panther - Energy Pulse',
    price: 259000,
    color:"Đen trắng",
    size: "L",
    imgUrl:"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/ao-thun-black-panther-energypulse2_49.jpg",
    sale:"Mua 2 được giảm thêm 10%",
    imgHover:"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/ao-thun-black-panther-energypulse5_2.jpg",
    description: 'A large phone with one of the best screens'
  },
  {
    productID: 4,
    name: 'Áo thun Marvel Oversize Pride Wakanda',
    price: 259000,
    color:"Đen trắng",
    size: "L",
    imgUrl:"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/DSC01197_copy.jpg",
    sale:"Mua 2 được giảm thêm 10%",
    imgHover:"https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-thun-Marvel-Oversize-Pride-Wakanda-3.jpg",
    description: 'A large phone with one of the best screens'
  },
];

