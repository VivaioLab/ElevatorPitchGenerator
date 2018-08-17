import { Injectable } from '@angular/core';
import {Pitch} from '../model/pitchModel';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PitchService {
  pitchURL ='https://salty-temple-18987.herokuapp.com/api/questions/link-pitch';
  getPitchesbyEmailURL = 'https://salty-temple-18987.herokuapp.com/api/questions/get-pitch-by-email';

  constructor(private http: HttpClient,    private route: ActivatedRoute,
    private router: Router) { }

  createNewPitch() : Promise<any>{
    let promise = new Promise((resolve, reject) => {
  
        this.http.post<any>(this.pitchURL,{})
        .subscribe(data => { 
          resolve(data);
        },
        error => {
          reject(error);
        });  
    });
    return promise;
  }
  updatePitch (pitch:Pitch): Observable<any> {
    return this.http.put(this.pitchURL,pitch, httpOptions);
  }
  // getAllPitchofCurrentUser (email:string): Observable<any> {
  //   return this.http.post(this.getPitchesbyEmailURL,email, httpOptions);
  // }

  getAllPitchofCurrentUser(email:string) : Promise<any>{
    let promise = new Promise((resolve, reject) => {
  
        this.http.post<any>(this.getPitchesbyEmailURL,{email : email})
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
