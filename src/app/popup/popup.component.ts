import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() isShow!:boolean
  @Input() contentAlert!:string

  @Output() returnIsShow = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  HandleClickClose(){
    this.isShow = false;
    this.returnIsShow.emit();
  }
}
