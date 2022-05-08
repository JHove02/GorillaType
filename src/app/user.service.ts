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
    console.log('setUserId');
    this.userId = id;
  }
  getUserId(){
    console.log('getUserID');
    console.log('THis is the current userId: ' +this.userId);
    return this.userId;
  }
  addUser(newUser: User){
    console.log('addUser');
    
    return this.http.post('https://gorillatype-47b71-default-rtdb.firebaseio.com/'+ 'user.json', newUser);

  }
  getUsers(){
    console.log('getUsers');
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
    console.log('deleteUser');
    return this.http.delete(`https://gorillatype-47b71-default-rtdb.firebaseio.com/user/-N0gHHUwElbRvZWsNNkB.json`).subscribe();
  }
  
  logIn(username: string, password: string){
     //this.id = Object.values(data)[0]
     console.log('login');

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
  verifyUseroname(newUser: User){
    //this.id = Object.values(data)[0]
    console.log('verifyuser');
     
    return this.http.get<User[]>('https://gorillatype-47b71-default-rtdb.firebaseio.com/' + 'user.json')
    .pipe(map(responseData => {
      console.log(responseData);
      let exists: boolean = false;
      for(const key in responseData){
        console.log(key);
        if(newUser.username == responseData[key].username || newUser.username == ""){
          //console.log(key);
         exists = true;
        }
        else{
          console.log("something");
        }
      }
      if(exists == false){
       console.log("username is unique cool beans");
       this.addUser(newUser).subscribe(data => {
         //THIS IS IMPORTANT VERY I MPORTANT
         let tempid = Object.values(data)[0];
         console.log(tempid);
       })
      }
      else{
        console.log("duplicate username");
      }
      return exists;
     
    })
    );
     
     
     }
    
   getCurrentUser(){
    console.log('getcurrentuser');
    console.log('THis is the current userId: ' +this.userId);
    return this.http.get<User>(`https://gorillatype-47b71-default-rtdb.firebaseio.com/user/${this.userId}.json`).pipe(map(responseData => {
      return responseData;
    }));
  }

  updateUserTenWPM(newWPM: number){
    console.log('update10');
    this.getCurrentUser().subscribe(data => {
      let newavg = ((data.TenWPM*data.numtentests)+ newWPM)/(data.numtentests+1);
      
      console.log('New average' +newavg)
      
      this.http.patch(`https://gorillatype-47b71-default-rtdb.firebaseio.com/user/${this.userId}.json`, {"TenWPM" : newavg}).subscribe(data =>{
      
      });
      this.http.patch(`https://gorillatype-47b71-default-rtdb.firebaseio.com/user/${this.userId}.json`, {"numtentests" : data.numtentests +1}).subscribe(data =>{

      });
    });
    
  }

  updateUserTwentyFiveWPM(newWPM: number){
    console.log('update25');
    this.getCurrentUser().subscribe(data => {
      let newavg = ((data.TwentyFiveWPM*data.numtwentyfivetests)+ newWPM)/(data.numtwentyfivetests+1);
      
      
      
      this.http.patch(`https://gorillatype-47b71-default-rtdb.firebaseio.com/user/${this.userId}.json`, {"TwentyFiveWPM" : newavg}).subscribe(data =>{
      
      });
      this.http.patch(`https://gorillatype-47b71-default-rtdb.firebaseio.com/user/${this.userId}.json`, {"numtwentyfivetests" : data.numtentests +1}).subscribe(data =>{

      });
    });
    
  }
  updateUserFiftyWPM(newWPM: number){
    console.log('update50');
    this.getCurrentUser().subscribe(data => {
      let newavg = ((data.FiftyWPM*data.numfiftytests)+ newWPM)/(data.numfiftytests+1);
      
      
      
      this.http.patch(`https://gorillatype-47b71-default-rtdb.firebaseio.com/user/${this.userId}.json`, {"FiftyWPM" : newavg}).subscribe(data =>{
      
      });
      this.http.patch(`https://gorillatype-47b71-default-rtdb.firebaseio.com/user/${this.userId}.json`, {"numfiftytests" : data.numfiftytests +1}).subscribe(data =>{

      });
    });
    
  }
  signOut(){
    window.location.reload();
  }
  /*
  getCurrentUser(){
    let currentUser: User ={username:'',password:'', TenWPM : -1, TwentyFiveWPM: -1, FiftyWPM: -1};
    this.getCurrentUserSubscription().subscribe(data =>{
      currentUser = data;
    });
    return currentUser;
    
  }
  */
  
  
  
}

