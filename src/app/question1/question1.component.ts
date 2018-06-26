import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';


@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css'],
  
})
export class Question1Component implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
 index = false;
 name:string;
 modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "questions",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/question info.svg")
    );
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
