import { Injectable } from '@angular/core';
import {Pitch} from '../model/pitchModel';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PitchService {
  pitchURL ='http://localhost:8080/api/questions/link-pitch'

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
}
