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
  getUserByEmailURL='http://localhost:8080/api/questions/get-user-by-email';
  userURL ='http://localhost:8080/api/questions/create-user';
  pitchURL ='http://localhost:8080/api/questions/link-pitch'
  constructor(private http: HttpClient,    private route: ActivatedRoute,
    private router: Router) {
  }
  getUserByEmail(email:string) : Promise<any>{
    let promise = new Promise((resolve, reject) => {

        this.http.post<any>(this.getUserByEmailURL,{email:email})
        .subscribe(data => { 
          resolve(data);
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
}
