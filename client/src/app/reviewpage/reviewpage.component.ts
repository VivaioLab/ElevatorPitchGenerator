import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Questions } from '../../model/questionsModel';
import {Quest} from '../../model/question-model';
import { QuestionsService } from '../../service/questions.service';

@Component({
  selector: 'app-reviewpage',
  templateUrl: './reviewpage.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reviewpage.component.css']
})
export class ReviewpageComponent implements OnInit {
  get saveQuestion1()
  {
   this.question1 = localStorage.getItem('question1');
   
   return this.question1;
  }
  get ans1()
  {
    this.answer1 = localStorage.getItem('name');
    return this.answer1;
  }
  get saveQuestion2()
  {
    this.question2 = localStorage.getItem('question2');
    return this.question2;
  }
   
  get saveQuestion3()
  {
    this.question3 = localStorage.getItem('question3');
    return this.question3;
  }
   
  get saveQuestion4()
  {
    this.question4 = localStorage.getItem('question4');
    return this.question4;
  }
  get saveQuestion5()
  {
    this.question5 = localStorage.getItem('question5');
    return this.question5;
  }
   
  //  this.answer1 = localStorage.getItem('answer1');
  //  return this.answer1;
  

  isCurrent = true;
  customers : Quest[];
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  answer1: string;
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
    // this.loading();
    this.questionService.getCustomers()
               .subscribe(
                 customers => {
                  console.log(customers);
                  this.customers = customers
                 }
                );

  }
  // loading() {
  //   this.question1 = JSON.parse(localStorage.getItem('question1'));
  //   this.question2 = JSON.parse(localStorage.getItem('question2'));
  //   this.question3 = JSON.parse(localStorage.getItem('question3'));
  //   this.question4 = JSON.parse(localStorage.getItem('question4'));
  //   this.question5 = JSON.parse(localStorage.getItem('question5'));
  // }

  savToBackend() {


   // this.questionsModel = this.prepareSaveQuestions();


    if (this.questionsModel) {

      this.questionService.saveQuestions(this.questionsModel).subscribe();

    }

  }
  // prepareSaveQuestions(): Questions {

  //   const saveQues: Questions = {
  //     question1: JSON.parse(localStorage.getItem('questt')+JSON.parse(localStorage.getItem('answer1'))),
  //     question2: JSON.parse(localStorage.getItem('question2')),
  //     question3: JSON.parse(localStorage.getItem('question3')),
  //     question4: JSON.parse(localStorage.getItem('question4')),
  //     question5: JSON.parse(localStorage.getItem('question5'))
  //   };
  //   return saveQues;
  // }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  

}
