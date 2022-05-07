import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  loggedIn?: boolean = true;

  ngOnInit(): void {
  }

  signOut(): void {
    //do something
  }

}
