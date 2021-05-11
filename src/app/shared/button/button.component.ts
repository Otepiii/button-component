import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  isText: boolean = false;
  constructor() { }


  ngOnInit(): void {
    this.isText= false;
  }



}
