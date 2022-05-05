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
  loggedIn?: boolean;
  
  defaultClick():void{
    document.documentElement.style.setProperty('--nav-button', '#BBB');
    document.documentElement.style.setProperty('--button', '#BBB');
    document.documentElement.style.setProperty('--text-color', '#BBB');
    document.documentElement.style.setProperty('--incorrect-color', 'rgb(180, 85, 85)');
    document.documentElement.style.setProperty('--background-color', '#656565');
    document.documentElement.style.setProperty('--accent-color', 'rgb(62, 227, 172)');
    document.documentElement.style.setProperty('--header-background', '#444');
    document.documentElement.style.setProperty('--black-or-white', '#ffffff');
    document.documentElement.style.setProperty('--accent-light', 'rgb(54, 252, 239)');
  }

  redBlackClick():void{
    document.documentElement.style.setProperty('--nav-button', '#BBB');
    document.documentElement.style.setProperty('--button', '#BBB');
    document.documentElement.style.setProperty('--text-color', '#BBB');
    document.documentElement.style.setProperty('--incorrect-color', '#656565');
    document.documentElement.style.setProperty('--background-color', '#1E1B18');
    document.documentElement.style.setProperty('--accent-color', '#D8315B');
    document.documentElement.style.setProperty('--header-background', '#2A2A2E');
    document.documentElement.style.setProperty('--black-or-white', '#ffffff');
    document.documentElement.style.setProperty('--accent-light', '#FFFAFF');
  }

  monkeyClick():void{
    document.documentElement.style.setProperty('--nav-button', '#BBB');
    document.documentElement.style.setProperty('--button', '#BBB');
    document.documentElement.style.setProperty('--text-color', '#BBB');
    document.documentElement.style.setProperty('--incorrect-color', 'rgb(180, 85, 85)');
    document.documentElement.style.setProperty('--background-color', '#444');
    document.documentElement.style.setProperty('--accent-color', '#F8EE33');
    document.documentElement.style.setProperty('--header-background', '#333');
    document.documentElement.style.setProperty('--black-or-white', '#ffffff');
    document.documentElement.style.setProperty('--accent-light', '#FFFFF');
  }

  miamiClick(): void{
    document.documentElement.style.setProperty('--button', '#f890e7');
    document.documentElement.style.setProperty('--nav-button', '#f890e7');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--incorrect-color', '#f890e7');
    document.documentElement.style.setProperty('--background-color', '#ffffff');
    document.documentElement.style.setProperty('--accent-color', '#0bd3d3');
    document.documentElement.style.setProperty('--header-background', '#777');
    document.documentElement.style.setProperty('--accent-light', '#eee');
    document.documentElement.style.setProperty('--black-or-white', '#000000');
  }

  blueClick():void{
    document.documentElement.style.setProperty('--button', '#dcdcdc');
    document.documentElement.style.setProperty('--nav-button', '#78A2CC');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--incorrect-color', 'rgb(180, 85, 85)');
    document.documentElement.style.setProperty('--background-color', '#78A2CC');
    document.documentElement.style.setProperty('--accent-color', '#144B86');
    document.documentElement.style.setProperty('--header-background', '#AECBD6');
    document.documentElement.style.setProperty('--black-or-white', '#ffffff');
    document.documentElement.style.setProperty('--accent-light', '#000000');
  }

  lightClick():void{
    document.documentElement.style.setProperty('--button', '#000000');
    document.documentElement.style.setProperty('--nav-button', '#eee');
    document.documentElement.style.setProperty('--incorrect-color', 'rgb(180, 85, 85)');
    document.documentElement.style.setProperty('--background-color', '#FFFFFF');
    document.documentElement.style.setProperty('--accent-color', 'rgb(62, 227, 172)');
    document.documentElement.style.setProperty('--header-background', '#888');
    document.documentElement.style.setProperty('--black-or-white', '#000000');
    document.documentElement.style.setProperty('--accent-light', '#000000');
  }

}
