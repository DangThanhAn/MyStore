import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PopupComponent } from './popup/popup.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { ButtonComponent } from './button/button.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { ProductComponent } from './product/product.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { NoComponent } from './no/no.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PopupComponent,
    FormLoginComponent,
    ButtonComponent,
    TextfieldComponent,
    ProductComponent,
    TopBarComponent,
    DashbroadComponent,
    CartComponent,
    FooterComponent,
    NoComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
