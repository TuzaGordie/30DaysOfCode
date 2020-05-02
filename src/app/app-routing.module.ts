import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CounterComponent} from './counter/counter.component';
import {HomeComponent} from './home/home.component';
import {AnalogClockComponent} from './analog-clock/analog-clock.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'click-counter', component: CounterComponent},
  {path: 'analog-clock', component: AnalogClockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
