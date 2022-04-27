import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { userInfo } from 'os';
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
  
}

