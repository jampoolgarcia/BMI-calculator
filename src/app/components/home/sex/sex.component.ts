import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sex',
  templateUrl: './sex.component.html',
  styles: [`
    .icon {
      font-size: 3.5rem;
    }

    .isSelect {
      background-color: #7D2F2F33;
      box-shadow: 0 0 4px rgba(255,255,255,.4);
    }
  `]
})
export class SexComponent implements OnInit {

  @Input() icon: string = '';
  @Input() value: string = '';
  @Input() sex: string = '';

  @Output() sexEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(){
    this.sexEmitter.emit(this.value);
  }

  

}
