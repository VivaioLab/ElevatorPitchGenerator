import { Component, OnInit, TemplateRef,ViewChild } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import{CdkTextareaAutosize} from "@angular/cdk/text-field";

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  modalRef: BsModalRef;
  ques:string;
  constructor(private modalService: BsModalService, private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) { 
    this.matIconRegistry.addSvgIcon(
      "elevetorly",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/elevetorlylogo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "menu icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/menu icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "thanks",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/thanks.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "problem-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/problem icon.svg")
    );
  }
  @ViewChild('autosize') autosize : CdkTextareaAutosize;

  ngOnInit() {
    this.ques="Ciao, My name is "+ localStorage.getItem('question1') +"I got really frustrated when "+ localStorage.getItem('question2')+"With our product "+ localStorage.getItem('question3')+"Ultimately the biggest value for the customer is that "+ localStorage.getItem('question4')+"Right now "+ localStorage.getItem('question5');
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
}
