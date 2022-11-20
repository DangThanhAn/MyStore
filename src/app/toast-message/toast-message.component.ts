import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.css']
})
export class ToastMessageComponent implements OnInit {

  constructor() { }
  @Input() textMessage:string|any;
  @Input() type:string|any;
  @Output() setDefault = new EventEmitter();
  ngOnInit(): void {
  }
  ngOnChange(){
    this.setDefault.emit();
  }


}
