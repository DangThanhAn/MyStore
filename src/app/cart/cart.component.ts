import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  inforCustomer : FormGroup | any;
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService,
  ) {

   }

  ngOnInit(): void {
    this.inforCustomer = new FormGroup({
      name: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      phonenumber: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      note: new FormControl(''),
    });

  }
  result : boolean | undefined;

  onSubmit(): void {
    console.log(this.inforCustomer.get('name')?.errors?.required);

    // Process checkout data here
    // this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.inforCustomer.value);
  }
}
