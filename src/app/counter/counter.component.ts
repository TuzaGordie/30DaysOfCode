import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  number = 0;
  clicks = 0;

  constructor() { }

  ngOnInit() {
    this.getValue();
  }

  add() {
    this.number ++;
    this.clicks++;
  }

  subtract() {
    this.number --;
    this.clicks++;
  }

  getValue() {
    if (this.number === 0) {
      return 'white';
    }
    if (this.number > 0) {
      return 'green';
    }

    if (this.number < 0) {
      return 'red';
    }
  }

}
