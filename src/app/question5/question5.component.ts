import { Component, OnInit, TemplateRef, ViewChild,ViewEncapsulation } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';



@Component({
  selector: 'app-question5',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  index = false;
  value:string;
  proof:string;
  modalRef: BsModalRef;
  wordnumber = false;
  words: number;
  constructor(private modalService: BsModalService,private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "elevetorly",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/elevetorlylogo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "menu icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "questions",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "name-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/nameicon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "problem-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/problem icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "solution-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/solution.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "value-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/value icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "proof-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/proof and ask.svg")
    );
   }
   showWordCount(){
    this.words = this.wor(this.value);
    this.wordnumber = true;
  }
  wor(s){
    let count =0;
    for(let i=0;i<s.length;i++)
    {
      if(s[i]===" " || s[i]==="," || s[i]==="." || s[i] ==="\n" || s[i]==="  " )
      {
        count = count +1;
      }
    }
    return count+1;
  }

  ngOnInit() {
    this.wordnumber = false;
    if(JSON.parse(localStorage.getItem('question5'))){
      this.value=JSON.parse(localStorage.getItem('question5'));
    }
  }
  saveChanges(){
    // white-space: pre-line;
    // pitch@vivaiolab.com
    // Pitch Submition
    if(!!this.proof) {
      localStorage.setItem('question5', JSON.stringify(this.proof) );
    }

   
    console.log(localStorage.getItem('question5'));
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
}
