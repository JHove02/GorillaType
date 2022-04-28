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
  public id: string = "";
  constructor(private userServ:UserService) { }
  fetchData(){
    this.userServ.getUsers().subscribe(data =>{
      this.users = data;
      console.log(data);
    })
  }
  ngOnInit(): void {
    console.log('hi')
    this.fetchData();
  }

  addNewUser(){
    console.log('hello');
    const newUser: User = {
      username: this.newUsername,
      password: this.newPassword,
      TenWPM: 0,
      TwentyFiveWPM: 0,
      FiftyWPM: 0
    }
    this.userServ.addUser(newUser).subscribe(data =>{
      //THIS IS IMPORTANT VERY I MPORTANT
      this.id = Object.values(data)[0];
      console.log(this.id );
      this.fetchData();
    })
  }
  deleteCarson(){
    this.userServ.deleteUser("asdf");
  }
}
