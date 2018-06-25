import { Component, OnInit, TemplateRef } from '@angular/core'
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css'],
  
})
export class Question1Component implements OnInit {
 index = false;
 name:string;
 modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {
   
   }

  ngOnInit() {
    this.index = true;
  
  }

  saveChanges(){
    
    localStorage.setItem('question1',JSON.stringify(this.name) );

   
    console.log(localStorage.getItem('question1'));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
}
