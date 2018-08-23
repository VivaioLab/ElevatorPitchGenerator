import { Injectable, Input } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
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
  questionsURL ='https://salty-temple-18987.herokuapp.com/api/questions/createQuestion/getMethod';
  fetchQuestionURL = 'https://salty-temple-18987.herokuapp.com/api/questions/create-question';
  fetchUserURL = 'https://salty-temple-18987.herokuapp.com/api/questions/create-user'
  fetchPitchURL = 'https://salty-temple-18987.herokuapp.com/api/model/pitch-model'
  pitchURL ='https://salty-temple-18987.herokuapp.com/api/questions/link-pitch'
  userURL ='https://salty-temple-18987.herokuapp.com/api/questions/create-user'
  getUserByEmailURL='https://salty-temple-18987.herokuapp.com/api/questions/get-user-by-email'
  getUserURL = "https://salty-temple-18987.herokuapp.com/getUser";

  constructor(private http: HttpClient,    private route: ActivatedRoute,
    private router: Router) {
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
