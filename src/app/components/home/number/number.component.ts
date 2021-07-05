import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styles: [`
    .btn-icon {
      cursor: pointer;
      background-color: #6d2224;
      padding: 7px;
      border-radius: 50%;
      margin-left: 0.5rem;
    }

    .btn-icon:hover {
      box-shadow: 0 0 4px rgba(255,255,255,.4);
    }
  `]
})
export class NumberComponent implements OnInit {
  
  @Input() title: string = '';
  @Input() value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sum(){
    this.value+=1;
  }

  sub(){
    this.value-=1;
  }

}
