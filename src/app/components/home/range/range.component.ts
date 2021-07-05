import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styles: [`
    input[type=range]::-webkit-slider-thumb {
      background: #FF3366;
    }
  `]
})
export class RangeComponent implements OnInit {

  @Input() value!: number;

  constructor() { }

  changeHeight(event: any){
    const { valueAsNumber } = event.target;
    this.value = valueAsNumber;
  }

  ngOnInit(): void {
  } 

}
