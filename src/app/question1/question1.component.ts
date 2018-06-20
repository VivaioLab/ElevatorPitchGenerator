import { Component, OnInit } from '@angular/core'
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css'],
  
})
export class Question1Component implements OnInit {
 index = false;
  constructor() { }

  ngOnInit() {
    this.index = true;
  }

}
