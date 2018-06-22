import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {

  index = false;
  proof:string;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  saveChanges(){
    
    localStorage.setItem('question5', JSON.stringify(this.proof) );

   
    console.log(localStorage.getItem('question5'));
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
}
