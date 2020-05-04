import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quote-generator',
  templateUrl: './quote-generator.component.html',
  styleUrls: ['./quote-generator.component.css']
})
export class QuoteGeneratorComponent implements OnInit {
  randomNumber;
  quotes = [
    'The Way To Get Started Is To Quit Talking And Begin Doing. -Walt Disney',
    'The Pessimist sees difficulty in Every opportunity. The Optimist sees the opportunity in every opportunity',
    'Don\'t Let Yesterday Take Up Too Much Of Today. -Will Rogers',
    'You Learn More From Failure Than From Success. Don\'t Let It Stop You',
    'It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up.- Vince Lombardi',
    'If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed',
    'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. Rob',
    'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. - Og Mandir',
    'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk.',
    'We May Encounter Many Defeats But We Must Not Be Defeated.- Maya Angelou',
    'Failure is success if we learn from it',
    'Setting small targets is much better than setting huge goals that you cannot achieve. ' +
    'Remember that "small drops of water make the mighty ocean',
    'To shine like a sun you need to Burn like that.',
    'Instead of managing your time, think of managing your energy or attention.',
    'small steps can bring big challenges',
    'Learn quickly from mistakes is the success',
    'Success comes from hard work and dedication.',
    'Time + patience + effort = success',
    'Humility is the true key to success',
    'Believe in yourself',
    'Break the rules',
    'Don\'t be afraid to fail',
    'Never listen to the naysayers',
    'Choose one word to stay active daily',
    'Y . O . L . O',
    'One man army',
    'Bad decisions make good memories',
    'Don\'t change the goal change the strategy',
    'Every person has a role to play',
    'It\'s wealth if  you make someone laugh',
    'You must have one power that no one has it must be irreplaceable.',
    'You don\'t have the idea of what is possible',
    'Act now',
    'The idea is not only to do good, do better!!, do your best!!!',
    'Rise and grind',
    'Assets put money in your pocket  liabilities takes money out of your pocket'
  ];

  @Input() init: number = null;
  public counter = 0;

  constructor() { }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000);
  }

  processCountdown() {
    if (this.counter === 0) {
      window.location.reload();
    } else {
      this.doCountdown();
    }
  }

  ngOnInit() {
    this.init = 30;
    this.getNewQuote();
    this.startCountdown();
  }

  getNewQuote() {
    const quoteText = document.querySelector('.quote-text');
    this.randomNumber = Math.floor(Math.random() * (this.quotes.length));
    quoteText.textContent = this.quotes[this.randomNumber];
  }

}
