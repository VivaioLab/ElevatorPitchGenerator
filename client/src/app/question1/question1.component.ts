import { Component, OnInit, NgZone,TemplateRef, ViewChild,ViewEncapsulation } from '@angular/core'
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Router} from '@angular/router';
@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./question1.component.css'],
  
})
export class Question1Component implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
 emptyAnswerError = false;
 index = false;
 name:string;
 show = true;
 wordnumber = false;
 words: number;
 isValid1 = true;
 isValid2 = false;
 isValid3 = false;
 isValid4 = false;
 isValid5 = false;
 review = false;
 modalRef: BsModalRef;
  constructor(private router : Router,private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer,private ngZone: NgZone,private modalService: BsModalService)
{
   
   this.content();
   this.matIconRegistry.addSvgIcon("problem-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/problem icon.svg"));
    
  
   
 
   }
   content(){
    this.matIconRegistry
    .addSvgIcon("elevetorly",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/elevatorlylogo.svg"))
    .addSvgIcon("menu icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg"))
    .addSvgIcon("questions",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg"))
    .addSvgIcon("name-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/nameicon.svg"))
    
    .addSvgIcon("solution-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/solution.svg"))
    .addSvgIcon("value-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/value icon.svg"))
    .addSvgIcon("proof-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/proof and ask.svg")); 
   }

   saveChanges(){
    if(!!this.name) {
      localStorage.setItem('question1', JSON.stringify(this.name) );
      this.router.navigate(['/question2']);
      console.log(JSON.parse(localStorage.getItem('question1')));
    } else {
      this.emptyAnswerError = true;
      setTimeout(() => this.emptyAnswerError = false, 1500);
    }
  }
  
  showWordCount(){
    this.words = this.wor(this.name);
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
    if(JSON.parse(localStorage.getItem('question1'))){
      this.name=JSON.parse(localStorage.getItem('question1'));
    }
    if(JSON.parse(localStorage.getItem('question2')))
    {
      this.isValid2 = true;
      console.log("question 1 =" + this.isValid2);
    }
    if(JSON.parse(localStorage.getItem('question3')))
    {
      this.isValid3 = true;
      console.log("question 3 =" + this.isValid3);
    }
    if(JSON.parse(localStorage.getItem('question4')))
    {
      this.isValid4 = true;
      console.log("question 3 =" + this.isValid4);
    }
    if(JSON.parse(localStorage.getItem('question4')))
    {
      this.isValid5 = true;
      console.log("question 3 =" + this.isValid5);
    }
    if(JSON.parse(localStorage.getItem('question1')) && 
       JSON.parse(localStorage.getItem('question2')) && 
       JSON.parse(localStorage.getItem('question3')) &&
       JSON.parse(localStorage.getItem('question4')) &&
       JSON.parse(localStorage.getItem('question5')))
    {
      this.review = true;
      console.log( "review" + this.review);
    }
    
    }

    reviewChanges(){
      this.router.navigate(['/reviewpage']);
    }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}

}
