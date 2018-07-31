import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Questions } from '../../model/questionsModel';
import { QuestionsService } from '../../service/questions.service';

@Component({
  selector: 'app-reviewpage',
  templateUrl: './reviewpage.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reviewpage.component.css']
})
export class ReviewpageComponent implements OnInit {
  isCurrent = true;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  modalRef: BsModalRef;
  questionsModel: Questions;
  constructor(private questionService: QuestionsService,
    private modalService: BsModalService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("close-popup", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/close icon popup.svg"))
      .addSvgIcon("edit-icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/edit icon.svg"));
  }

  ngOnInit() {
    this.loading();

  }
  loading() {
    this.question1 = JSON.parse(localStorage.getItem('question1'));
    this.question2 = JSON.parse(localStorage.getItem('question2'));
    this.question3 = JSON.parse(localStorage.getItem('question3'));
    this.question4 = JSON.parse(localStorage.getItem('question4'));
    this.question5 = JSON.parse(localStorage.getItem('question5'));
  }

  savToBackend() {


    this.questionsModel = this.prepareSaveQuestions();


    if (this.questionsModel) {

      this.questionService.saveQuestions(this.questionsModel).subscribe();

    }

  }
  prepareSaveQuestions(): Questions {

    const saveQues: Questions = {
      question1: JSON.parse(localStorage.getItem('question1')),
      question2: JSON.parse(localStorage.getItem('question2')),
      question3: JSON.parse(localStorage.getItem('question3')),
      question4: JSON.parse(localStorage.getItem('question4')),
      question5: JSON.parse(localStorage.getItem('question5'))
    };
    return saveQues;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
