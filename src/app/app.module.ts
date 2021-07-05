// core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// router
import { AppRouting } from './app.routing';

// root component
import { AppComponent } from './app.component';

// components
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { SexComponent } from './components/home/sex/sex.component';
import { NumberComponent } from './components/home/number/number.component';
import { RangeComponent } from './components/home/range/range.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    SexComponent,
    NumberComponent,
    RangeComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
