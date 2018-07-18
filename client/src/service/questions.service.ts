import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Questions} from '../model/questionsModel';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questionsURL ='/questions';
  getUserURL = "/getUser"

  constructor(private http: HttpClient,    private route: ActivatedRoute,
    private router: Router) {
  }
  saveQuestions(questions : Questions=null) : Promise<any>{

    let promise = new Promise((resolve, reject) => {
      this.http.post<Questions>(this.questionsURL,{questions: questions})
      .subscribe(data => {
        resolve(data);
      },
      error => {
        
        reject(error);
      });
    });
    return promise;
  }
  getUsers(){
    let promise = new Promise((resolve, reject) => {
      this.http.get<Array<Questions>>(this.getUserURL)
      .subscribe(data => {
        resolve(data);
        console.log("all users:"+data);
      },
      error => {
       
        reject(error);
      });
    });
    return promise;
  }
}
