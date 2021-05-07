import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

@Input() outline:string;

buttonOutline() {
  //  this.style.color: "#333"
  const color = this.outline;
  return color;
 } 

// public outline = {
//   padding: "0.7rem 1rem",
//   color: "#e0e0e0",
  // margin: 1rem 0;
  // font-size: 1.2rem;
  // font-weight: 500;
  // border-radius: 6px;
  // text-align: center;
  // width: 88px;
// }

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.outline);
  }

  ngOnChanges():void {

  }

}
