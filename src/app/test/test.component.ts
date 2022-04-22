import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService) { }

  promptLength: number = 10;
  prompt: string = "";

  ngOnInit(): void {
    this.getWords(this.promptLength);
  }

  getWords(promptLength: number): void {
    this.prompt = this.testService.givePrompt(promptLength);
  }

  onClick(element: any) {
    const buttons = document.querySelectorAll('.toggle-length-button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    element.classList.add('active');
    if(element.classList.contains('10'))
      this.promptLength = 10;
    else if(element.classList.contains('25'))
      this.promptLength = 25;
    else
      this.promptLength = 50;
    this.getWords(this.promptLength);
  }
}
