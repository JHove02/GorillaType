import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';

import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private userId: string ="";

  setUserId(id: string){
    this.userId = id;
  }
  getUserId(){
    return this.userId;
  }
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
  /*
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
  */
  deleteUser(username: string){
    return this.http.delete(`https://gorillatype-47b71-default-rtdb.firebaseio.com/user/-N0gHHUwElbRvZWsNNkB.json`).subscribe();
  }
  
  logIn(username: string, password: string){
     //this.id = Object.values(data)[0]
    

    return this.http.get<User[]>('https://gorillatype-47b71-default-rtdb.firebaseio.com/' + 'user.json')
    .pipe(map(responseData => {
      let signedId:string = ''
      console.log(responseData);
      for(const key in responseData){
        console.log(key);
        if(username == responseData[key].username && password == responseData[key].password){
          console.log(key);
          signedId = key;
        }
        
        
       

      }
      this.userId = signedId;
      return signedId;
      
    })
    );
    

  }
  private getCurrentUserSubscription(){
    console.log('THis is the current userId: ' +this.userId);
    return this.http.get<User>(`https://gorillatype-47b71-default-rtdb.firebaseio.com/user/${this.userId}.json`).pipe(map(responseData => {
      return responseData;
    }));
  }
  getCurrentUser(){
    let currentUser: User ={username:'',password:'', TenWPM : -1, TwentyFiveWPM: -1, FiftyWPM: -1};
    this.getCurrentUserSubscription().subscribe(data =>{
      currentUser = data;
    });
    return currentUser;
    
  }

  
  
}

