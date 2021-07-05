import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public age = 0;
  public weight= 0;
  public heigth = 170;

  constructor() { }

  ngOnInit(): void {
  }

}
