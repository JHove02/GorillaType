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

  listofUsers: User[] = [];
  topTen: any[] = [];
  topTwentyFive: any[] = [];
  topFifty: any[] = [];
  leaderboards: any[] = [];

  ngOnInit(): void {
    this.getData();
    document.querySelector('.ten')?.classList.add('active');
  }

  getData(): void {
    this.userServ.getUsers().subscribe(data => {
      this.listofUsers = data;
      this.topTen = this.listofUsers.map(({TenWPM, username}) => ({wpm: TenWPM, username }));
      this.topTwentyFive = this.listofUsers.map(({TwentyFiveWPM, username}) => ({wpm: TwentyFiveWPM, username }));
      this.topFifty = this.listofUsers.map(({FiftyWPM, username}) => ({wpm: FiftyWPM, username }));
      console.log(this.topTen)
      this.topTen.sort((a, b) => {
        if(a.wpm < b.wpm) return -1;
        if(b.wpm > a.wpm) return 1;
        return 0;
      });
      this.topTwentyFive.sort((a, b) => {
        if(a.wpm < b.wpm) return -1;
        if(b.wpm > a.wpm) return 1;
        return 0;
      });
      this.topFifty.sort((a, b) => {
        if(a.wpm < b.wpm) return -1;
        if(b.wpm > a.wpm) return 1;
        return 0;
      });
      this.leaderboards = this.topTen;
    });
  }

  lengthChange(words: number) : void {
    if(words == 10) {
      document.querySelectorAll('.test-length').forEach(element => element.classList.remove('active'));
      document.querySelector('.ten')?.classList.add('active');
      this.leaderboards = this.topTen;
    }
    else if (words == 25) {
      document.querySelectorAll('.test-length').forEach(element => element.classList.remove('active'));
      document.querySelector('.twenty-five')?.classList.add('active');
      this.leaderboards = this.topTwentyFive;
    }
    else {
      document.querySelectorAll('.test-length').forEach(element => element.classList.remove('active'));
      document.querySelector('.fifty')?.classList.add('active');
      this.leaderboards = this.topFifty;
    }

  }

}
