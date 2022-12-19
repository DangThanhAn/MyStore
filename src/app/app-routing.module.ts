import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '',component: DashbroadComponent},
  {path : 'dashbroad/login',component: DashbroadComponent},
  {path : 'cart', component: CartComponent},
  {path: 'product-details/:productID', component: ProductDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
