import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';



@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  index = false;
  solution:string;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "questions",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/question info.svg")
    );
   }

  ngOnInit() {
  }
  saveChanges(){
    
    localStorage.setItem('question3',JSON.stringify(this.solution) );

   
    console.log(localStorage.getItem('question3'));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
}
