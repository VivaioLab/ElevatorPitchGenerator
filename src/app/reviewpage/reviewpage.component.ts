import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-reviewpage',
  templateUrl: './reviewpage.component.html',
  styleUrls: ['./reviewpage.component.css']
})
export class ReviewpageComponent implements OnInit {
question1 : string;
question2 : string;
question3 : string;
question4 : string;
question5 : string;
  constructor() { }

  ngOnInit() {
    this.question1 = localStorage.getItem('question1');
    this.question2 = localStorage.getItem('question2');
    this.question3 = localStorage.getItem('question3');
    this.question4 = localStorage.getItem('question4');
    this.question5 = localStorage.getItem('question5');
  }
  saveChanges(){
    
    console.log(this.question1);
    console.log(this.question2);
    console.log(this.question3);
    console.log(this.question4);
    console.log(this.question5);

   
    
  }
}
