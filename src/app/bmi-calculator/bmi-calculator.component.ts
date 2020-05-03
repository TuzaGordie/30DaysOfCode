import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  weight: number;
  feet: number;
  inches: number;
  someHeight: number;
  newHeight: number;
  bmi: number;

  constructor() { }

  ngOnInit() {
  }

  calculate() {
    this.someHeight = this.feet + (this.inches / 12);
    this.newHeight = this.someHeight * 30.48;
    this.bmi =  ((this.weight / this.newHeight) / this.newHeight) * 10000;
  }

}
