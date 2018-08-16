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
  pitchURL ='https://salty-temple-18987.herokuapp.com/api/questions/link-pitch'

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
    console.log(pitch);
    return this.http.put(this.pitchURL,pitch, httpOptions);
  }
  // updatePitch(pitch:Pitch) : Promise<any>{
  //   let promise = new Promise((resolve, reject) => {
  
  //       this.http.post<any>(this.pitchURL,{pitch})
  //       .subscribe(data => { 
  //         resolve(data);
  //       },
  //       error => {
  //         reject(error);
  //       });  
  //   });
  //   return promise;
  // }
}
