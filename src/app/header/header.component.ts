import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {

  constructor(private userServ: UserService) { }

  loggedIn?: boolean;

  ngOnChanges(): void{
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
