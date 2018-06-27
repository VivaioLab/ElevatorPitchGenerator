import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';



@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  index = false;
  problem:string;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) { 
    this.matIconRegistry.addSvgIcon(
      "elevetorly",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/elevetorlylogo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "menu icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/menu icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "questions",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/question info.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "name-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/nameicon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "problem-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/problem icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "solution-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/solution.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "value-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/value icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "proof-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/proof and ask.svg")
    );
  }

  ngOnInit() {
  }


  saveChanges(){
    
    localStorage.setItem('question2',JSON.stringify(this.problem) );

   
    console.log(localStorage.getItem('question2'));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
}
