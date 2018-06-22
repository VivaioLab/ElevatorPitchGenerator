import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {

  index = false;
  value:string;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  saveChanges(){
    
    localStorage.setItem('question4',JSON.stringify(this.value) );

   
    console.log(localStorage.getItem('question4'));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}

}
