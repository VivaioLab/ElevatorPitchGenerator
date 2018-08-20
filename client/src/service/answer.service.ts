import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import {Answer} from '../model/answerModel';
import { Pitch } from '../model/pitchModel';
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
  answerURL ='https://salty-temple-18987.herokuapp.com/api/answers/create-answer';
  pitchAnswersURL = 'https://salty-temple-18987.herokuapp.com/api/answers/get-answers-by-pitchID';
  questionAnswersURL = 'https://salty-temple-18987.herokuapp.com/api/answers/get-answers-by-pitchID-and-QuestionID';
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
    saveAnswers(answer:string,question_id:number,pitch_id:number) : Promise<any>{
      let promise = new Promise((resolve, reject) => {
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
    updateAnswer(answer: Answer) : Promise<any>{
      let promise = new Promise((resolve, reject) => {
          this.http.put<any>(this.answerURL,answer)
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
