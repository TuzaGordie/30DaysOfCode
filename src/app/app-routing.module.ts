import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CounterComponent} from './counter/counter.component';
import {HomeComponent} from './home/home.component';
import {AnalogClockComponent} from './analog-clock/analog-clock.component';
import {BmiCalculatorComponent} from './bmi-calculator/bmi-calculator.component';
import {QuoteGeneratorComponent} from './quote-generator/quote-generator.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'click-counter', component: CounterComponent},
  {path: 'analog-clock', component: AnalogClockComponent},
  {path: 'bmi-calculator', component: BmiCalculatorComponent},
  {path: 'quote-generator', component: QuoteGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
