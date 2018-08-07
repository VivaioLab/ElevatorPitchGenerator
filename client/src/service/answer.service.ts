import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import {Answer} from '../model/answerModel';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  answerURL ='http://localhost:8080/api/answers/create-answer';

  constructor(private http: HttpClient,    private route: ActivatedRoute,
    private router: Router) { }


    saveAnswers(answers : Answer) : Observable<Answer>{
      return this.http.post<Answer> (this.answerURL,answers,httpOptions);
    }
}
