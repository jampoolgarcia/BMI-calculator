import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  public sex = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeSex(sex: string){
    this.sex = sex;
  }

  calculatorBMI(){
    console.log('calculatorBMI');
    this.router.navigate(['/results']);
  }

}
