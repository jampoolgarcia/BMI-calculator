import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public age = 18;
  public weight= 60;
  public heigth = 170;
  public sex = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setSex(sex: string){
    this.sex = sex;
  }

  setHeigth(heigth: number){
    this.heigth = heigth;
  }

  setWeight(weight: number){
    this.weight = weight;
  }

  setAge(age: number){
    this.age = age;
  }

  calculatorBMI(){
    const BMI = this.weight / Math.pow((this.heigth / 100), 2);
    this.router.navigate(['/results', BMI.toFixed(1)]);
  }

}
