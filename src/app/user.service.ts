import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';

import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  addUser(newUser: User){
    return this.http.post('https://gorillatype-47b71-default-rtdb.firebaseio.com/'+ 'user.json', newUser);

  }
  getUsers(){
    return this.http.get<User[]>('https://gorillatype-47b71-default-rtdb.firebaseio.com/' + 'user.json')
    .pipe(map(responseData => {
      const userArray: User[] = [];
      for(const key in responseData){
        userArray.push(responseData[key]);
      }
      return userArray;
    })
    );
  }
  deleteCurrentUser(){
    return this.http.get<User[]>('https://gorillatype-47b71-default-rtdb.firebaseio.com/' + 'user.json')
    .pipe(map(responseData => {
      const userArray: User[] = [];
      for(const key in responseData){
        //console.log(responseData[key])
        userArray.push(responseData[key]);
      }
      return userArray;
    })
    );
  }
  deleteUser(username: string){
    return this.http.delete(`https://gorillatype-47b71-default-rtdb.firebaseio.com/user/-N0gHHUwElbRvZWsNNkB.json`).subscribe();
  }
  
}

