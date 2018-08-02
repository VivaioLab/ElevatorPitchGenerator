import { Component ,OnInit} from '@angular/core';
import { routerTransition } from './router.animations';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   constructor(private router : Router){

   }
   
  ngOnInit(){
    localStorage.clear();
    // this.router.navigate(['/home'])
    // localStorage.setItem('question1',"Hi, my name is");
    // localStorage.setItem('question2',"I noticed");
    // localStorage.setItem('question3',"The problem can be solved");
    // localStorage.setItem('question4',"In this way");
    // localStorage.setItem('question5',"We are looking for");
    
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
