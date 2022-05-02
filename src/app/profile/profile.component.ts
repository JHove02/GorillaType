import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private users: User[] =[];
  public newUsername: string = "";
  public newPassword: string = "";
  public id: string = "d";
  public createdUser: boolean = false;
  public LogIn: boolean =true;
  public CreateUser: boolean = false;
  public logUsername: string = "";
  public logPassword: string = "";
  public signedIn: boolean = false;
  public incorrectLogin: boolean = false;
  constructor(private userServ:UserService) { }
  fetchData(){
    this.userServ.getUsers().subscribe(data =>{
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
  login(){
    let id: string = "";
    this.userServ.logIn(this.logUsername,this.logPassword).subscribe(data =>{
      id = data;
      console.log('hello '+ data)
      this.userServ.setUserId(id);
      this.id = this.userServ.getUserId();
      this.isSignedIn();
      if(!this.signedIn){
        this.incorrectLogin = true;
      }
    });
    
    
    
    
    
  }

  addNewUser(){
   
    const newUser: User = {
      username: this.newUsername,
      password: this.newPassword,
      TenWPM: 0,
      TwentyFiveWPM: 0,
      FiftyWPM: 0
    }
    this.userServ.addUser(newUser).subscribe(data =>{
      //THIS IS IMPORTANT VERY I MPORTANT
      let tempid = Object.values(data)[0];
      console.log(tempid );
      this.fetchData();
    })
    this.createdUser = true;
    this.LogIn = true;
    this.CreateUser = false;
  }
  setLogin(){
    this.LogIn = true;
    this.CreateUser = false;
  }
  setCreateUser(){
    this.CreateUser = true;
    this.LogIn = false;
  }
  isSignedIn(){
    let id: string= this.userServ.getUserId()
    if(id == ""){
      this.signedIn = false;
      console.log('not signed in')
    }else{
      this.signedIn = true;
      this.createdUser = false;
    this.LogIn = false;
    this.CreateUser = false;
    }
  }
  deleteCarson(){
    this.userServ.deleteUser("asdf");
  }
  



  

}
