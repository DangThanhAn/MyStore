import { MoneyVndPipe } from './pipe/money-vnd.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { PopupComponent } from './components/popup/popup.component';
import { ButtonComponent } from './components/button/button.component';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { ProductComponent } from './components/product/product.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DashbroadComponent } from './page/dashbroad/dashbroad.component';
import { CartComponent } from './page/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { FogotPasswordComponent } from './features/fogot-password/fogot-password.component';

// import lb ng zorro
// import {NgZorroModule} from './module/ng-zorro/ng-zorro.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';

// End lb ng-zorro
const COMPONENTS = [AppComponent,
  ChildComponent,
  PopupComponent,
  ButtonComponent,
  TextfieldComponent,
  ProductComponent,
  TopBarComponent,
  DashbroadComponent,
  CartComponent,
  FooterComponent,
  ProductDetailsComponent,
  ToastMessageComponent,
  MoneyVndPipe,
  LoginComponent,
  RegisterComponent,
  FogotPasswordComponent]

const NGZORRO =[NzButtonModule,NzFormModule];
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...NGZORRO
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
