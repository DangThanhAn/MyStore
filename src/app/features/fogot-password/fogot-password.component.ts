import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fogot-password',
  templateUrl: './fogot-password.component.html',
  styleUrls: ['./fogot-password.component.css']
})
export class FogotPasswordComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }
  checkoutForm = this.formBuilder.group({
    // name : this.formBuilder.control(''),
    // name: ['',[Validators.required,Validators.minLength(3)]],
    email: '',
    // address : this.formBuilder.control(''),
    password:''
  });

  onSubmit():void{
    console.log(this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  @Output() returnDefaultVal = new EventEmitter();
  isShow:boolean=true;
  closePopup(){
    this.isShow=false;
    this.returnDefaultVal.emit();
  }
}
