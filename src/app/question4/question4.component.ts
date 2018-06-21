import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {

  index = false;
  value:string;
  constructor() { }

  ngOnInit() {
  }
  saveChanges(){
    
    localStorage.setItem('question4',JSON.stringify(this.value) );

   
    console.log(localStorage.getItem('question4'));
  }

}
