import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CounterComponent} from './counter/counter.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'click-counter', component: CounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
