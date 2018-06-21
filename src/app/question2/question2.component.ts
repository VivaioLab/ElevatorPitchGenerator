import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  index = false;
  problem:string;
  constructor() { }

  ngOnInit() {
  }

  saveChanges(){
    
    localStorage.setItem('question2',JSON.stringify(this.problem) );

   
    console.log(localStorage.getItem('question2'));
  }

}
