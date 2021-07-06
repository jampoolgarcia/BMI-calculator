import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [`
    .bg-item {
      height: 448px !important;
    }

    .fs-0 {
      font-size: 4.5rem;
    }

    .ward {
      color: red;
    }
  `]
})
export class ResultsComponent implements OnInit {

  public result: string = '';
  public interpretation: string = '';
  public isSuccess: boolean = false;
  public BMI!: number;

  constructor(private router: ActivatedRoute) {
    this.BMI = +this.router.snapshot.paramMap.get('BMI')!;
  }

  ngOnInit(): void {
    this.getResults();
  }

  getResults(){
    if(this.BMI >= 25){
      this.isSuccess = false;
      this.result = 'Exceso de peso',
      this.interpretation = 'Tiene un peso corporal superior al normal. Intente hacer más ejercicio';
      return;
    }

    if(this.BMI >= 18.5){
      this.isSuccess = true;
      this.result = 'Normal',
      this.interpretation = 'Tiene un peso corporal normal. ¡Buen trabajo!';
      return;
    }
    
    this.isSuccess = false;
    this.result = 'Bajo de peso',
    this.interpretation = 'Tiene un peso corporal más abajo de lo normal. Puedes comer un poco más'; 

  }
}
