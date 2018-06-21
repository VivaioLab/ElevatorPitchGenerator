import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {

  index = false;
  solution:string;
  constructor() { }

  ngOnInit() {
  }
  saveChanges(){
    
    localStorage.setItem('question3',JSON.stringify(this.solution) );

   
    console.log(localStorage.getItem('question3'));
  }
}
