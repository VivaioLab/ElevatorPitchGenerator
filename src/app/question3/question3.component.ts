import { Input, Component, OnInit, TemplateRef, ViewChild,ViewEncapsulation } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';



@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {
  wordLimit = 120;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  index = false;
  solution:string;
  wordnumber = false;
  words: number;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) { 
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
    this.words = this.wor(this.solution);
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
    if(JSON.parse(localStorage.getItem('question3'))){
      this.solution=JSON.parse(localStorage.getItem('question3'));
    }
    if(JSON.parse(localStorage.getItem('question1')))
    {
      this.isValid1 = true;
    }
    if(JSON.parse(localStorage.getItem('question3')))
    {
      this.isValid3 = true;
    }
    if(JSON.parse(localStorage.getItem('question4')))
    {
      this.isValid4 = true;
    }
    if(JSON.parse(localStorage.getItem('question4')))
    {
      this.isValid5 = true;
    }
  }
  
  @Input()
  get totalWords() {
    return this.wor(this.solution || '') - 1;
  }
  
  @Input()
  get maxwordsError() {
    return this.totalWords > this.wordLimit;
  }
  
  saveChanges(){
    
    if(!!this.solution && !this.maxwordsError) {
      localStorage.setItem('question3', JSON.stringify(this.solution) );
    }

   
    console.log(localStorage.getItem('question3'));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
}
