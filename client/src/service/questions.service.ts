import { Injectable, Input } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Questions} from '../model/questionsModel';
import {Quest} from '../model/question-model';
import { Observable } from 'rxjs/internal/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questionsURL ='http://localhost:8080/api/questions/createQuestion/getMethod';
  fetchQuestionURL = 'http://localhost:8080/api/questions/createQuestion';
  
  getUserURL = "https://salty-temple-18987.herokuapp.com/getUser";

  constructor(private http: HttpClient,    private route: ActivatedRoute,
    private router: Router) {
  }

  saveQuestions(questions : Questions) : Observable<Questions>{
    return this.http.post<Questions> (this.questionsURL,questions,httpOptions);
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

  // findAllQuestions()
  // {
  //  return fetch('http://localhost:8080/api/questions/createQuestion').then(response => response.json())
  // }

  getCustomers (): Observable<Quest[]> {
    return this.http.get<Quest[]>(this.fetchQuestionURL);
  }
    // saveQuestions(questions : Questions=null) : Promise<any>{

  //   let promise = new Promise((resolve, reject) => {
  //     console.log(questions);
  //     this.http.post<Questions>(this.questionsURL,questions,httpOptions)
  //     .subscribe(data => {
        
  //       resolve(data);
  //     },
  //     error => {
        
  //       reject(error);
  //     });
  //   });
  //   return promise;
  // }
}
