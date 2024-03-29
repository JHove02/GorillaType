import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { ConditionalExpr } from '@angular/compiler';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private users: User[] = [];
  public newUsername: string = "";
  public newPassword: string = "";
  public id: string = "d";
  public createdUser: boolean = false;
  public duplicateUser: boolean = false;
  public LogIn: boolean = true;
  public CreateUser: boolean = false;
  public logUsername: string = "";
  public logPassword: string = "";
  public signedIn: boolean = false;
  public incorrectLogin: boolean = false;
  public currentUser: User = { username: '', password: '', TenWPM: -1, TwentyFiveWPM: -1, FiftyWPM: -1, numtentests: -1, numtwentyfivetests: -1, numfiftytests: -1 };
  constructor(private userServ: UserService) { }
  fetchData() {
    this.userServ.getCurrentUser().subscribe(data => {
      this.currentUser = data;
      console.log(data);
    })
  }
  ngOnInit(): void {
    console.log('ngOninit')
    this.fetchData();

    this.isSignedIn()
    this.incorrectLogin = false;
    this.createdUser = false;

    this.id = this.userServ.getUserId();


  }

    login() {
    let id: string = "";
    document.querySelector('.login-button')?.classList.toggle('selected');
    setTimeout(() => {
      document.querySelector('.login-button')?.classList.toggle('selected');
    }, 2000);
    this.userServ.logIn(this.logUsername, this.logPassword).subscribe(data => {
      id = data;
      console.log('hello ' + data)
      this.userServ.setUserId(id);
      this.id = this.userServ.getUserId();
      this.isSignedIn();
      if (!this.signedIn) {
        this.incorrectLogin = true;
      } else {
        this.userServ.getCurrentUser().subscribe(data => {
          this.currentUser = data;
        });
      }
    });





  }
  addNewUser() {
    document.querySelector('.signin-button')?.classList.toggle('selected');
    setTimeout(() => {
      document.querySelector('.signin-button')?.classList.toggle('selected');
    }, 2000);
    const newUser: User = {
      username: this.newUsername,
      password: this.newPassword,
      TenWPM: 0,
      TwentyFiveWPM: 0,
      FiftyWPM: 0,
      numtentests: 0,
      numtwentyfivetests: 0,
      numfiftytests: 0
    }
    this.userServ.verifyUseroname(newUser).subscribe(data => {
      //THIS IS IMPORTANT VERY I MPORTANT
      let tempid = Object.values(data)[0];
      console.log(tempid);
      this.fetchData();
    })
  
    /*
      this.userServ.addUser(newUser).subscribe(data => {
        //THIS IS IMPORTANT VERY I MPORTANT
        let tempid = Object.values(data)[0];
        console.log(tempid);
        this.fetchData();
      })
      */
    this.createdUser = true;
    this.LogIn = true;
    this.CreateUser = false;
  }

  setLogin() {
    this.LogIn = true;
    this.CreateUser = false;
  }
  setCreateUser() {
    this.CreateUser = true;
    this.LogIn = false;
  }
  isSignedIn() {
    let id: string = this.userServ.getUserId()
    console.log('THis is the current userId in isSignedIn: ' + id);
    if (id == "") {
      this.signedIn = false;
      console.log('not signed in')
    } else {

      this.signedIn = true;
      this.createdUser = false;
      this.LogIn = false;
      this.CreateUser = false;
    }
  }
  signOut(){
    this.userServ.signOut();
    this.signedIn = false;
    this.LogIn = true;
    this.CreateUser = false;
  }






}
