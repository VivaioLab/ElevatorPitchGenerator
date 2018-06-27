import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  
  selector: 'app-finalversion',
  templateUrl: './finalversion.component.html',
  styleUrls: ['./finalversion.component.css'],
  exportAs: 'child'
})
export class FinalversionComponent implements OnInit {

  modalRef: BsModalRef;
  ques:string;
  constructor(private modalService: BsModalService) { 
    
  }
  saveChanges()
  {

  }

  
  ngOnInit() {
    this.ques="Hi Vivaio Team"
              +"My name is "+ localStorage.getItem('question1')
              +"\n Here is my pitch\n" 
              +"I got really frustrated when "+ localStorage.getItem('question2')+"With our product "+ localStorage.getItem('question3')+"Ultimately the biggest value for the customer is that "+ localStorage.getItem('question4')+"Right now "+ localStorage.getItem('question5') 
              + "\n looking forward to hearing from you.\n"
              + "Thanks\n"
              +"Name:";
  
  }

  

}

