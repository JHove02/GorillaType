import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.css']
})
export class TestResultsComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    
  }

  accuracy?: number;
  time?: string;


}
