import { Component, OnInit, NgZone,TemplateRef, ViewChild,ViewEncapsulation } from '@angular/core'
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./question1.component.css'],
  
})
export class Question1Component implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
 index = false;
 name:string;
 show = true;
 wordnumber = false;
 words: string;
 modalRef: BsModalRef;
  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer,private ngZone: NgZone,private modalService: BsModalService)
   {
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


  
  showWordCount(){
    this.words = this.wordCount(this.name);
    this.wordnumber = true;
  }
  wordCount(s) {
    if (!s) {
      return 0;
    }
    return s.split(' ').length;
  }

  ngOnInit() {
    this.wordnumber = false;
    }

   

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
}
