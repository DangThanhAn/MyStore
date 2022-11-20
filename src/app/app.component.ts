import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  andang="a"

  onNotify(value:string){
    window.alert("click"+value);
  }
  setIsShowToDefault(){
    this.isShow = false;
  }

  dosomething(event:any){
    console.log(event.target.value);
  }
  isShow: boolean = false;
}
