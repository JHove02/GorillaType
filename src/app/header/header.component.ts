import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

  constructor(private userServ: UserService) { }

  loggedIn?: boolean;

  ngOnInnit():void{
    this.isLoggedIn();
  }

  ngDoCheck(): void{
    this.isLoggedIn();
  }

  

  isLoggedIn(){
    if(this.userServ.getUserId() != ""){
      this.loggedIn = true;
    }else{
      this.loggedIn =false;
    }
  }
  
  signOut(): void {
    window.location.reload()
  }

}
