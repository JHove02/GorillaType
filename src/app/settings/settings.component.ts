import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  defaultClick():void{
    document.documentElement.style.setProperty('--button', '#BBB');
    document.documentElement.style.setProperty('--incorrect-color', 'rgb(180, 85, 85)');
    document.documentElement.style.setProperty('--background-color', '#656565');
    document.documentElement.style.setProperty('--accent-color', 'rgb(62, 227, 172)');
    document.documentElement.style.setProperty('--header-background', '#444');
    document.documentElement.style.setProperty('--accent-light', 'rgb(54, 252, 239)');
  }

  redBlackClick():void{
    document.documentElement.style.setProperty('--button', '#BBB');
    document.documentElement.style.setProperty('--incorrect-color', '#656565');
    document.documentElement.style.setProperty('--background-color', '#1E1B18');
    document.documentElement.style.setProperty('--accent-color', '#D8315B');
    document.documentElement.style.setProperty('--header-background', '#2A2A2E');
    document.documentElement.style.setProperty('--accent-light', '#FFFAFF');
  }

  monkeyClick():void{
    document.documentElement.style.setProperty('--button', '#BBB');
    document.documentElement.style.setProperty('--incorrect-color', 'rgb(180, 85, 85)');
    document.documentElement.style.setProperty('--background-color', '#444');
    document.documentElement.style.setProperty('--accent-color', '#F8EE33');
    document.documentElement.style.setProperty('--header-background', '#444');
    document.documentElement.style.setProperty('--accent-light', '#FFFFF');
  }

  OrangeClick(): void{
    document.documentElement.style.setProperty('--button', '#000000');
    document.documentElement.style.setProperty('--incorrect-color', '#656565');
    document.documentElement.style.setProperty('--background-color', '#FF5F1A');
    document.documentElement.style.setProperty('--accent-color', '#FFFFFF');
    document.documentElement.style.setProperty('--header-background', '#4C86A8');
    document.documentElement.style.setProperty('--accent-light', '#FFFFFF');
  }

  blueClick():void{
    document.documentElement.style.setProperty('--button', '#000000');
    document.documentElement.style.setProperty('--incorrect-color', 'rgb(180, 85, 85)');
    document.documentElement.style.setProperty('--background-color', '#0CBABA');
    document.documentElement.style.setProperty('--accent-color', '#FFFFFF');
    document.documentElement.style.setProperty('--header-background', '#234AA6');
    document.documentElement.style.setProperty('--accent-light', '#000000');
  }

}
