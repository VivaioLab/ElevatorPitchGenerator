import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import {Answer} from '../model/answerModel';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key' })
};
@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  answerURL ='http://localhost:8080/api/answers/create-answer';
  pitchAnswersURL = 'http://localhost:8080/api/answers/get-answers-by-pitchID';
  questionAnswersURL = 'http://localhost:8080/api/answers/get-answers-by-pitchID-and-QuestionID';
  constructor(private http: HttpClient,    private route: ActivatedRoute,
    private router: Router) { }


    // getAnswers(pitch_id) : Observable<any>{
    //   return this.http.post<any> (this.pitchAnswersURL,pitch_id,httpOptions);
    // }
    getAnswers(pitch_id) : Promise<any>{
      let promise = new Promise((resolve, reject) => {
  
          this.http.post<any>(this.pitchAnswersURL,{pitch_id})
          .subscribe(data => { 
            resolve(data);
          },
          error => {
            reject(error);
          });  
      });
      return promise;
    }
    getAnswerByQuestion(pitch_id,question_id) : Promise<any>{
      let promise = new Promise((resolve, reject) => {
  
          this.http.post<any>(this.questionAnswersURL,{pitch_id,question_id})
          .subscribe(data => { 
            resolve(data);
          },
          error => {
            reject(error);
          });  
      });
      return promise;
    }
    saveAnswers(answers:Answer) : Promise<any>{
      let promise = new Promise((resolve, reject) => {
  let answer = answers.answer;
  let question_id = answers.question_id;
  let pitch_id =answers.pitch_id;
          this.http.post<any>(this.answerURL,{answer,question_id,pitch_id})
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
