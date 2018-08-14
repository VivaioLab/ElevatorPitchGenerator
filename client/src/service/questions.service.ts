import { Injectable, Input } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Questions} from '../model/questionsModel';
import {Quest} from '../model/question-model';
import {Pitch} from '../model/pitchModel';
import {Email} from '../model/loginModel';
import { Observable } from 'rxjs/internal/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questionsURL ='http://localhost:8080/api/questions/createQuestion/getMethod';
  fetchQuestionURL = 'http://localhost:8080/api/questions/create-question';
  fetchUserURL = 'http://localhost:8080/api/questions/create-user'
  fetchPitchURL = 'http://localhost:8080/api/model/pitch-model'
  pitchURL ='http://localhost:8080/api/questions/link-pitch'
  userURL ='http://localhost:8080/api/questions/create-user'
  getUserByEmailURL='http://localhost:8080/api/questions/get-user-by-email'
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

  getQuestions (): Observable<Quest[]> {
    return this.http.get<Quest[]>(this.fetchQuestionURL);
  }

  getEmails ():Observable<Email[]>{
    return this.http.get<Email[]>(this.fetchUserURL);
  }

  getPitch ():Observable<Pitch[]>{
    return this.http.get<Pitch[]>(this.fetchPitchURL);
  }

}
