import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sex',
  templateUrl: './sex.component.html',
  styles: [`
    .icon {
      font-size: 3.5rem;
    }
  `]
})
export class SexComponent implements OnInit {

  @Input() icon: string = '';
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
