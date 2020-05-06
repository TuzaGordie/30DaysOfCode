import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EllipsisPipe} from './bmi-calculator/ellipsis.pipe';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoFormComponent } from './todo-app/todo-form/todo-form.component';
import { AddButtonComponent } from './todo-app/add-button/add-button.component';
import { TodoItemComponent } from './todo-app/todo-item/todo-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    AnalogClockComponent,
    BmiCalculatorComponent,
    EllipsisPipe,
    QuoteGeneratorComponent,
    TodoAppComponent,
    TodoFormComponent,
    AddButtonComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
