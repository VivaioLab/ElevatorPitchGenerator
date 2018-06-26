import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


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
modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.question1 = localStorage.getItem('question1');
    this.question2 = localStorage.getItem('question2');
    this.question3 = localStorage.getItem('question3');
    this.question4 = localStorage.getItem('question4');
    this.question5 = localStorage.getItem('question5');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
  
}
