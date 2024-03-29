import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private userServ: UserService, private http: HttpClient) { }

  loggedIn?: boolean;
  public newUsername: string = "";
  public newPassword: string = "";
  public currentUser: User = { username: '', password: '', TenWPM: -1, TwentyFiveWPM: -1, FiftyWPM: -1, numtentests: -1, numtwentyfivetests: -1, numfiftytests: -1 };
  invalid: boolean = false;

  ngOnInit(): void {
    //temporary
    this.isLoggedIn();
    //TO BE IMPLEMENTED UPON COMPLETION OF USER SERVICE
    // if(this.userService.getUserId()){
    //   this.loggedIn = true;
    // }
    // else{
    //   this.loggedIn = false;
    //   console.log(this.userService.getUserId()) 
    // }
  }
  isLoggedIn(){
    if(this.userServ.getUserId() != ""){
      this.loggedIn = true;
    }else{
      this.loggedIn =false;
    }
  }

  changePassword(currentPassword: string, newPassword: string) {
    document.querySelector('.password-submit')?.classList.toggle('selected');
    setTimeout(() => {
      document.querySelector('.password-submit')?.classList.toggle('selected');
    }, 2000)
    this.userServ.getCurrentUser().subscribe(data => {
      console.log("database password " + data.password);
      console.log("current password " + currentPassword);

      if (currentPassword == data.password) {
        console.log("changing password");
        this.userServ.updatePassword(newPassword);
        this.invalid = false;
      }
      else {
        console.log("invalid password, cannot change.");
        this.invalid = true;
      }

    })

  }


  defaultClick(): void {
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

  redBlackClick(): void {
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

  monkeyClick(): void {
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

  miamiClick(): void {
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

  blueClick(): void {
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

  lightClick(): void {
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
