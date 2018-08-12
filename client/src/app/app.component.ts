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
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
