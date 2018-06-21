import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {

  index = false;
  proof:string;
  constructor() { }

  ngOnInit() {
  }
  saveChanges(){
    
    localStorage.setItem('question5',JSON.stringify(this.proof) );

   
    console.log(localStorage.getItem('question5'));
  }
}
