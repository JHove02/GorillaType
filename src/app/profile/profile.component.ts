import { Component, OnInit } from '@angular/core';
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
  public LogIn: boolean = true;
  public CreateUser: boolean = false;
  public logUsername: string = "";
  public logPassword: string = "";
  public signedIn: boolean = false;
  public incorrectLogin: boolean = false;
  public currentUser: User = { username: '', password: '', TenWPM: -1, TwentyFiveWPM: -1, FiftyWPM: -1 };
  constructor(private userServ: UserService) { }
  fetchData() {
    this.userServ.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    })
  }
  ngOnInit(): void {
    this.isSignedIn()
    this.incorrectLogin = false;
    this.createdUser = false;
    this.fetchData();

    this.id = this.userServ.getUserId();


  }
  login() {
    let id: string = "";
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
//--------------------------------------------------------
//user authentication testing please disregard

  getUsernames(s: string[]) {
    this.userServ.getUsers().subscribe(data => {
      this.users = data;
      for (let i = 0; i < data.length; i++) {
        let temp: string = "";

        for (let j = 0; j < Object.values(data[i].username).length; j++){
          temp += Object.values(data[i].username)[j];
        }
        s.push(temp)
      }
      //console.log(s);
    })
  }

test(){
  let s: string[] = [];
  this.getUsernames(s);
  console.log(s);
  console.log(s[1]);
}

//--------------------------------------------------------


  addNewUser() {

    const newUser: User = {
      username: this.newUsername,
      password: this.newPassword,
      TenWPM: 0,
      TwentyFiveWPM: 0,
      FiftyWPM: 0
    }
    // section for verifying username is not in use
    let duplicate: boolean = false; //if duplitcate is true no new account will be made and error message will appear
    let s: string[] = []; //stores result from getusernames()
    let temp: string[] =[]; //playing around with why it wont work
    temp[0] = newUser.username;
    this.getUsernames(s);
    //console.log(s);
    //console.log(temp);
    //console.log(s[0]);
    //console.log(s.length);
    for(let i = 0; i < s.length; i++) { //s.length is 0 which is causing problems
      console.log("--------------")
      console.log(temp[0]);
      console.log(s[i]);
      console.log("--------------")
      if (temp[0] == s[i]){
        console.log("duplicate found");
        duplicate = true;
      }
    }

    if (duplicate == true){
      console.log("username is a duplicate")
    }
    else{
      console.log("username is unique and will be created")
    this.userServ.addUser(newUser).subscribe(data => {
      //THIS IS IMPORTANT VERY I MPORTANT
      let tempid = Object.values(data)[0];
      console.log(tempid);
      this.fetchData();
    })
    this.createdUser = true;
    this.LogIn = true;
    this.CreateUser = false;
  }
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
  deleteCarson() {
    this.userServ.deleteUser("asdf");
  }






}
