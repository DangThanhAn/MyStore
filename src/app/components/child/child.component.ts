import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name!:string
  @Output() notify = new EventEmitter();
  doSomething(value : string){
    this.notify.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }
}
