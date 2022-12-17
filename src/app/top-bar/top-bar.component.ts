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
}
