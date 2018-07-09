import { Component, OnInit, TemplateRef,ViewEncapsulation } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-reviewpage',
  templateUrl: './reviewpage.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reviewpage.component.css']
})
export class ReviewpageComponent implements OnInit {
question1 : string;
question2 : string;
question3 : string;
question4 : string;
question5 : string;
modalRef: BsModalRef;
ques:string;
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
    this.matIconRegistry.addSvgIcon(
      "edit-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/edit icon.svg")
    );
  }

  ngOnInit() {
    this.ques="Hi Vivaio Team"
    +"My name is" + localStorage.getItem('question1')
    +"Here is my pitch"
    +"I got really frustrated when "+ localStorage.getItem('question2')+"With our product "+ localStorage.getItem('question3')+"Ultimately the biggest value for the customer is that "+ localStorage.getItem('question4')+"Right now "+ localStorage.getItem('question5') 
    +"looking forward to hearing from you."
    +"Thanks"
    +"Name:";

    this.question1 = (localStorage.getItem('question1'));
    this.question2 = (localStorage.getItem('question2'));
    this.question3 = (localStorage.getItem('question3'));
    this.question4 = (localStorage.getItem('question4'));
    this.question5 = (localStorage.getItem('question5'));

    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}


}
