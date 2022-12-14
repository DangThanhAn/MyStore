import { Product } from './../product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatButton } from '@angular/material';


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
  @Input() product : Product | any;
  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.setDefault.emit();
  }
}
