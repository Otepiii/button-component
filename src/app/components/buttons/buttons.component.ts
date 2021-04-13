import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  htmlStr: string = '<Button fdsasdf/>';

  constructor() { }

  ngOnInit(): void {
  }

}



