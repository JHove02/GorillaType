import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private userServ: UserService) { }
  public listofUsers: User[]= [];
  public topTen: User[] = [];
  public topTwentyFive: User[] = [];
  public topFifty: User[] = [];
  ngOnInit(): void {
    this.getAllUsers();
    
    
  }
  getAllUsers(): void{
    this.userServ.getUsers().subscribe(data =>{
      this.listofUsers= data;
      this.topTen = this.listofUsers;
    this.topTwentyFive = this.listofUsers;
    this.topFifty = this.listofUsers;

    this.topTen.sort((a,b) => (b.TenWPM - a.TenWPM));
    this.topTwentyFive.sort((a,b) => (b.TwentyFiveWPM - a.TwentyFiveWPM));
    this.topFifty.sort((a,b) => (b.FiftyWPM - a.FiftyWPM));
    });

  }



}
