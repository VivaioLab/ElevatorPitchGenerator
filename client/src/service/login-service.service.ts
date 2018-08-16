import { Injectable, Input } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Email} from '../model/loginModel';
import { Observable } from 'rxjs/internal/Observable';
import { Pitch } from '../model/pitchModel'; 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  getUserByEmailURL='https://salty-temple-18987.herokuapp.com/api/questions/get-user-by-email';
  userURL ='https://salty-temple-18987.herokuapp.com/api/questions/create-user';
  pitchURL ='https://salty-temple-18987.herokuapp.com/api/questions/link-pitch'
  constructor(private http: HttpClient,    private route: ActivatedRoute,
    private router: Router) {
  }
  getUserByEmail(email:string) : Promise<any>{
    let promise = new Promise((resolve, reject) => {
console.log(email);
        this.http.post<any>(this.getUserByEmailURL,{email:email})
        .subscribe(data => { 
          resolve(data);
          console.log(data);
        },
        error => {
          reject(error);
        });  
    });
    return promise;
}
createNewUser(email:string) : Promise<any>{
  let promise = new Promise((resolve, reject) => {

      this.http.post<any>(this.userURL,{email:email})
      .subscribe(data => { 
        resolve(data);
      },
      error => {
        reject(error);
      });  
  });
  return promise;
}
addPitch(user_id) : Promise<any>{
  let promise = new Promise((resolve, reject) => {

      this.http.post<any>(this.pitchURL,{user_id:user_id})
      .subscribe(data => { 
        resolve(data);
      },
      error => {
        reject(error);
      });  
  });
  return promise;
}
checkifemailexists(rege : Email) : Promise<any>{
  let promise = new Promise((resolve, reject) => {
console.log(rege);
      this.http.post<any>(this.getUserByEmailURL,{email:rege.email})
      .subscribe(data => { 
        resolve(data);
        console.log(data);
      },
      error => {
        reject(error);
      });  
  });
  return promise;
}
register(rege : Email) : Promise<any>{
  
  let promise = new Promise((resolve, reject) => {
      this.http.post<any>(this.userURL,{email:rege.email,user_name : rege.user_name,password : rege.password})
      .subscribe(data => { 
        resolve(data);
      },
      error => {
        reject(error);
      });  
  });
  return promise;
}

login(username :string,password : string)  : Promise<any>{
  let promise = new Promise((resolve, reject) => {

    this.http.post<any>(this.userURL,{email:username,password : password})
    .subscribe(data => { 
      if(data)
      {
        resolve(data);
        localStorage.setItem('currentUser',JSON.stringify(data));
      }
   
    },
    error => {
      reject(error);
    });  
});
return promise;

}
logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
}

}
