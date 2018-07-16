import { Input, Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question5',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {
  @Input()
  get totalWords() {
    return this.wor(this.proof || '') - 1;
  }

  @Input()
  get maxwordsError() {
    return this.totalWords > this.wordLimit;
  }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  value: string;
  proof: string;
  words: number;
  modalRef: BsModalRef;
  wordLimit = 120;
  isCurrent = true;
  emptyAnswerError = false;
  index = false;
  wordnumber = false;
  isValid1 = false;
  isValid2 = false;
  isValid3 = false;
  isValid4 = false;
  isValid5 = false;
  review = false;
  constructor(private router: Router, private modalService: BsModalService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("menu icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg"))
      .addSvgIcon("questions", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg"));
  }
  showWordCount() {
    this.words = this.wor(this.proof);
    this.wordnumber = true;
  }
  wor(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === " " || s[i] === "," || s[i] === "." || s[i] === "\n" || s[i] === "  ") {
        count = count + 1;
      }
    }
    return count + 1;
  }

  ngOnInit() {
    this.wordnumber = false;
    this.loading();
  }

  loading() {
    if (JSON.parse(localStorage.getItem('question5'))) {
      this.proof = JSON.parse(localStorage.getItem('question5'));
    }
    if (JSON.parse(localStorage.getItem('question1'))) {
      this.isValid1 = true;
    }
    if (JSON.parse(localStorage.getItem('question3'))) {
      this.isValid3 = true;
    }
    if (JSON.parse(localStorage.getItem('question4'))) {
      this.isValid4 = true;
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
      console.log("review" + this.review);
    }
  }


  saveChanges() {
    // white-space: pre-line;
    // pitch@vivaiolab.com
    // Pitch Submition
    if (!!this.proof && !this.maxwordsError) {
      localStorage.setItem('question5', JSON.stringify(this.proof));
      this.router.navigate(['/reviewpage']);
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
