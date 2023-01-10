import { ChildComponent } from './components/child/child.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { CartComponent } from './page/cart/cart.component';
import { DashbroadComponent } from './page/dashbroad/dashbroad.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '',component: DashbroadComponent},
  {path : 'dashbroad/login',component: DashbroadComponent},
  {path : 'cart', component: CartComponent},
  {path: 'product-details/:productID', component: ProductDetailsComponent },
  {path : 'child', component: ChildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
