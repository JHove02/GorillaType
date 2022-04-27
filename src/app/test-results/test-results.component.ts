import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.css']
})
export class TestResultsComponent implements OnInit {

  accuracy?: number;
  time?: string;
  incorrect?: number;
  correct?: number;
  finishedPrompt?: Element;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.displayResults();
  }

  displayResults(): void {
    this.correct = this.testService.getCorrect();
    this.incorrect = this.testService.getIncorrect();
    this.accuracy = this.correct / (this.incorrect + this.correct);
    this.time = this.testService.getTime();
    this.finishedPrompt = this.testService.getFinishedPrompt();
    document.querySelector('.info')?.appendChild(this.finishedPrompt);
  }
}
