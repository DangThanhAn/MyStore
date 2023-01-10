import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isShow:boolean=true;
  isHide:boolean=false;
  clickMenuFunc(){
    this.isShow = false;
    this.isHide = true;
  }
  closeMenu(){
    this.isShow = true;
    this.isHide = false;
  }
  /**
   * Author: DT An
   * 28/12/22
   * Khi click vào icon người dùng thì show popup
   */
  showLogin:boolean= false;
  showRegister:boolean= false;
  showForgotPassword:boolean= false;
  clickedUser(){
    this.showLogin = true;
  }
  returnVal(){
    this.showLogin = false;
    this.showRegister = false;
    this.showForgotPassword = false;
  }


  // Khi click vào đăng kí của login thì 1. show form đăng kí 2. set value login về false
  showPopupRegister(){
    this.showRegister = true;
    this.showLogin = false;

  }
// Khi click vào đăng nhập ở form đăng kí thì 1. show form đăng nhập. 2 tắt form đăng kí đi
  showPopupLogin(){
    this.showRegister = false;
    this.showLogin = true;
  }

// Khi click vào Quên mật khẩu thì 1. show form quên mật khẩu. 2 tắt form đăng nhập đi
  showPopupForgotPassword(){
    this.showLogin = false;
    this.showForgotPassword = true;
  }

  clickedSearch(){

  }
}
