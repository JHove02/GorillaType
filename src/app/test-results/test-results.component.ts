import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { TestService } from '../test.service';

import { UserService } from '../user.service';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.css']
})
export class TestResultsComponent implements OnInit {

  accuracy: number = 0;
  time: string = "00:00";
  incorrect: number = 0;
  correct: number = 0;
  wpm?: number;
  finishedPrompt?: Element;
  testLength: number = 0;
  temps: string = "";
  rounded: number = 0;

  constructor(
    private testService: TestService,
    private route: Router,
    private userServ: UserService
    ) { }

  ngOnInit(): void {
    // ADD THIS BACK IN WHEN DONE STYLING
    this.displayResults();
    let mins = parseInt(this.time);
    const seconds = parseInt(this.time.charAt(3) + this.time.charAt(4))
    mins += seconds / 60;
    this.wpm = (Math.ceil(this.correct / 5) - Math.ceil(this.incorrect / 5)) / mins;
    this.temps = this.wpm.toString();
    this.temps = parseFloat(this.temps).toFixed(2);
    this.rounded = parseFloat(this.temps);
    this.wpm = this.rounded;
    if(this.wpm < 0 || this.accuracy < .5) {
      //hide results, display error message for too low of accuracy, include next test button though
    }
    document.querySelectorAll('.word').forEach(element => this.testLength++);
    this.accuracy = Math.round(this.accuracy * 100)
    this.updateUserData();
  }

  displayResults(): void {
    if(this.testService.getTime() !== '') {
      console.log('here')
      this.correct = this.testService.getCorrect();
      this.incorrect = this.testService.getIncorrect();
      this.accuracy = this.correct / (this.incorrect + this.correct);
      this.time = this.testService.getTime();
      this.finishedPrompt = this.testService.getFinishedPrompt();
     
      document.querySelector('.label-container')?.appendChild(this.finishedPrompt);

    }
    else {
      this.route.navigate(['/test'])
    }
  }

  nextTest(): void {
    this.route.navigate(['/test']);
  }

  updateUserData(): void{
    console.log('outupdate')
    if( typeof this.wpm != "undefined"){
      //this.temps = this.wpm.toString();
     // this.temps = parseFloat(this.temps).toFixed(2);
     // this.rounded = parseFloat(this.temps);
      console.log('inupdate')
      if(this.testLength <25  ){
       // this.userServ.updateUserTenWPM(this.rounded);
        this.userServ.updateUserTenWPM(this.wpm);

      }
      if(this.testLength >24 && this.testLength < 50){
        //this.userServ.updateUserTwentyFiveWPM(this.rounded);
        this.userServ.updateUserTwentyFiveWPM(this.wpm);

      }
      if(this.testLength > 49){
        //this.userServ.updateUserFiftyWPM(this.rounded);
        this.userServ.updateUserFiftyWPM(this.wpm);

      }
    }
    
  }

  
}
