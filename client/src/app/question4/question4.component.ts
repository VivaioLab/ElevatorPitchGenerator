import { Input, Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {
  @Input()
  get totalWords() {
    return this.wor(this.value || '') - 1;
  }

  @Input()
  get maxwordsError() {
    return this.totalWords > this.wordLimit;
  }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  buttonIsDisabled:boolean=true;
  wordLimit = 120;
  value: string;
  words: number;
  modalRef: BsModalRef;
  wordnumber = false;
  emptyAnswerError = false;
  isCurrent = true;
  isValid1 = false;
  isValid2 = false;
  isValid3 = false;
  isValid4 = false;
  isValid5 = false;
  review = false;
  constructor(private router: Router, private modalService: BsModalService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("close-popup", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/close icon popup.svg"))
      .addSvgIcon("questions", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg"));
  }

  showWordCount() {
    this.words = this.wor(this.value);
    this.wordnumber = true;
  }
  onTextEnter(event : string) : void {
    this.buttonIsDisabled =true;
    let passedString = event;
   if (/\S/.test(passedString)) {
       this.buttonIsDisabled=false;
   }
  }
  wor(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== " ") {
        if (s[i] !== ",") {
          if (s[i] !== "  ") {
            if (s[i] !== "\n") {
              if (s[i] !== ".") {
                count = count + 1;
              } 
            }
          }
        }
      }
    }
    return count + 1;
  }

  ngOnInit() {
    this.wordnumber = false;
    this.loading();
  }

  loading() {
    if (JSON.parse(localStorage.getItem('question4'))) {
      this.value = JSON.parse(localStorage.getItem('question4'));
    }
    if (JSON.parse(localStorage.getItem('question1'))) {
      this.isValid1 = true;
    }
    if (JSON.parse(localStorage.getItem('question3'))) {
      this.isValid3 = true;
    }
    if (JSON.parse(localStorage.getItem('question4'))) {
      this.isValid4 = true;
      this.buttonIsDisabled = false;
    }
    if (JSON.parse(localStorage.getItem('question4'))) {
      this.isValid5 = true;
    }
    if (JSON.parse(localStorage.getItem('question1')) &&
      JSON.parse(localStorage.getItem('question2')) &&
      JSON.parse(localStorage.getItem('question3')) &&
      JSON.parse(localStorage.getItem('question4')) &&
      JSON.parse(localStorage.getItem('question5'))) {
      this.review = true;
    }
  }

  

  saveChanges() {

    if (!!this.value && !this.maxwordsError && !this.buttonIsDisabled) {
      localStorage.setItem('question4', JSON.stringify(this.value));
      this.router.navigate(['/question5']);
    } else {
      this.emptyAnswerError = true;
      setTimeout(() => this.emptyAnswerError = false, 1500);
    }
  }
  reviewChanges() {
    this.router.navigate(['/reviewpage']);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
