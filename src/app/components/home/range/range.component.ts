import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() rangeEmitter = new EventEmitter<number>();

  constructor() { }

  changeHeight(event: any){
    const { valueAsNumber } = event.target;
    this.value = valueAsNumber;
    this.rangeEmitter.emit(this.value);
  }

  ngOnInit(): void {
  } 

}
