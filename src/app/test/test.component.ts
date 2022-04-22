import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService) { }

  promptLength!: number;
  prompt: string = "";
  userInput: string = "hello";
  time!: number;

  ngOnInit(): void {
    this.promptLength = 10;
    const buttons = document.querySelectorAll('.toggle-length-button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    document.querySelector('.toggle-length-button')?.classList.add('active');
    this.getWords(this.promptLength);
    this.addPrompt(this.prompt);
    this.time = 30;
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

  /*=================================== SOME EXPLANATION OF APPROACH I GUESS ==============================================
    taking user input: have the prompt be a char array. For every char, add an html element just containing that
    char, could be a <span> or a <div> or whatever. Then, for every character typed, we can check what the user typed
    at a specific index, and then get the nth html element containing a char (they can all have some kinda class like
    character or something) in document query selector, add the 'correct' class or 'incorrect' class if they type it wrong
  */
  addPrompt(prompt: string): void {
    const container = document.querySelector('.test-content');
    document.querySelectorAll('.character').forEach(element => {
      container?.removeChild(element);
    });
    for (let i = 0; i < prompt.length; i++) {
      const element = document.createElement('span');
      element.innerHTML = prompt.charAt(i);
      element.classList.add('character');
      container?.appendChild(element);
    }
  }

  input(input: string): void {
    let currentIndex: number = input.length - 1;
    if (currentIndex > -1) {
      const prompt = document.querySelectorAll('.character');
      prompt.forEach((element, index) =>{
        if(index > currentIndex)
          element.classList.remove('incorrect', 'correct');
      });
      const currentChar = prompt[currentIndex];
      if (input.charAt(currentIndex) !== currentChar.innerHTML) {
        currentChar.classList.remove('correct');
        currentChar.classList.add('incorrect');
      }
      else {
        currentChar.classList.add('correct');
        currentChar.classList.remove('incorrect');
      }
    }
    else {
      document.querySelectorAll('.character').forEach(element => {
        element.classList.remove('correct', 'incorrect');
      });
    }
  }


  countdown(): void{
      const interval = setInterval(() => {
        this.time--;
        if (this.time <= 0){
          clearInterval(interval);
        }
      }, 1000);
  }

  started: boolean = false;
  startCountdown():void{
    if(this.started = false){
      this.countdown();
      this.started= true;
    }
  }


}
