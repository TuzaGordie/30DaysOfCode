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

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    AnalogClockComponent,
    BmiCalculatorComponent,
    EllipsisPipe,
    QuoteGeneratorComponent,
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
