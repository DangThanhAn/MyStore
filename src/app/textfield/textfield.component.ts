import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {

  constructor() { }
  @Input() widthExp : string | undefined;
  @Input() contentPlacehoder : string | any;

  // @Input() width : string | undefined;
  ngOnInit(): void {

  }

}
