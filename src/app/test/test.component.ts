import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { TestService } from '../test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private testService: TestService,
    private route: Router,
  ) { }

  promptLength!: number;
  prompt: string = "";
  userInput: string = "";
  minutesDisplay: string = "00";
  secondsDisplay: string = "00";
  minutes!: number;
  clock!: number;
  firstInput: boolean = true;
  interval: any;
  in!: string;
  currentIndex: number = 0;

  ngOnInit(): void {
    this.promptLength = 10;
    const buttons = document.querySelectorAll('.toggle-length-button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    document.querySelector('.toggle-length-button')?.classList.add('active');
    this.getWords(this.promptLength);
    this.addPrompt(this.prompt);
    this.clock = 0;
    this.minutes = 0;
  }

  getWords(promptLength: number): void {
    this.prompt = this.testService.givePrompt(promptLength);
  }

  lengthChange(element: any) {
    const buttons = document.querySelectorAll('.toggle-length-button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    element.classList.add('active');
    if (element.classList.contains('10'))
      this.promptLength = 10;
    else if (element.classList.contains('25'))
      this.promptLength = 25;
    else
      this.promptLength = 50;
    this.getWords(this.promptLength);
    this.addPrompt(this.prompt);
  }

  addPrompt(prompt: string): void {
    const container = document.querySelector('.test-content');
    document.querySelectorAll('.character').forEach(element => {
      element.remove();
    });
    console.log(prompt)
    for (let i = 0; i < prompt.length; i++) {
      const word = document.createElement('div');
      word.classList.add('word');
      const space = document.createElement('span');
      space.innerHTML = " ";
      space.classList.add('character');
      while (prompt.charAt(i) != ' ' && i < prompt.length) {
        const element = document.createElement('span');
        element.innerHTML = prompt.charAt(i);
        element.classList.add('character');
        if (i == 0) {
          element.classList.add('current');
        }
        word.appendChild(element);
        console.log(prompt.charAt(i));
        i++;
      }
      container?.appendChild(word);
      container?.appendChild(space);
    }
  }

  input(input: string): void {
    if (this.firstInput) {
      this.firstInput = false;
      this.startTimer();
    }
    console.log(this.prompt)
    this.currentIndex = input.length - 1;
    if (this.currentIndex > -1 && this.currentIndex < this.prompt.length) {
      const prompt = document.querySelectorAll('.character');
      prompt.forEach((element, index) => {
        element.classList.remove('current');
        if (index > this.currentIndex)
          element.classList.remove('incorrect', 'correct');
      });
      const currentChar = prompt[this.currentIndex];
      let nextChar = currentChar;
      if (this.currentIndex < this.prompt.length - 1)
        nextChar = prompt[this.currentIndex + 1]
      nextChar.classList.add('current');
      if (input.charAt(this.currentIndex) !== currentChar.innerHTML) {
        currentChar.classList.remove('correct');
        currentChar.classList.add('incorrect');
      }
      else {
        currentChar.classList.add('correct');
        currentChar.classList.remove('incorrect');
        if (this.currentIndex + 1 == this.prompt.length) {
          this.completeTest();
        }
      }
    }
    else {
      document.querySelectorAll('.character').forEach(element => {
        element.classList.remove('correct', 'incorrect');
      });
    }
  }

  completeTest(): void {
    let incorrect: number = document.querySelectorAll('.incorrect').length;
    let correct: number = document.querySelectorAll('.correct').length;
    let time: string = this.minutesDisplay + ':' + this.secondsDisplay;
    document.querySelectorAll('.character').forEach(element => element.classList.remove('current'));
    let finishedPrompt: Element = document.querySelector('.test-content')!;
    this.testService.sendResults(incorrect, correct, time, finishedPrompt);
    this.route.navigate(['/results'])
  }

  formatClock(): void {
    if (this.clock < 10) {
      this.secondsDisplay = "0" + this.clock;
    }
    else {
      this.secondsDisplay = this.clock.toString();
    }
    if (this.minutes < 10) {
      this.minutesDisplay = "0" + this.minutes;
    }
    else {
      this.minutesDisplay = this.minutes.toString();
    }

  }

  startTimer(): void {
    document.querySelector('.test-header-timer')?.setAttribute('style', 'color: var(--accent-color)');
    document.querySelector('.test-header-title')?.setAttribute('style', 'color: var(--button)');
    this.interval = setInterval(() => {
      this.clock++;
      if (this.clock == 60) {
        this.clock = 0;
        this.minutes += 1;
      }
      this.formatClock();
    }, 1000);
  }

  stopTest(): void {
    this.clock = 0;
    this.minutes = 0;
    this.minutesDisplay = this.secondsDisplay = '00';
    this.formatClock();
    this.getWords(this.promptLength);
    this.addPrompt(this.prompt);
    clearInterval(this.interval);
    document.querySelector('.test-header-timer')?.setAttribute('style', 'color: var(--light-gray)');
    document.querySelector('.test-header-title')?.setAttribute('style', 'color: var(--accent-color)');
    this.in = "";
    this.userInput = "";
    this.firstInput = true;
  }

  checkEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.currentIndex == this.prompt.length - 1) {
      this.completeTest();
      console.log('here')
    }
  }
}