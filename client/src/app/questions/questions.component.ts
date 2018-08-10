import { Component, OnInit, Input, NgZone, TemplateRef, ViewChild, ViewEncapsulation  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Router } from '@angular/router';
import { QuestionsService } from '../../service/questions.service';
import { AnswerService } from '../../service/answer.service';
import { Questions } from '../../model/questionsModel';
import { Answer } from '../../model/answerModel';

import {Quest} from '../../model/question-model';
 import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  // @Input()
  // get questt() {
  //    return this.label
  // }
  @Input()
  get totalWords() {
    return this.wor(this.name || '') - 1;
  }
  
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  isCurrent = true;
  emptyAnswerError = false;
  name: string;
  buttonIsDisabled:boolean=true;
  isValid1 = false;
  isValid2 = false;
  isValid3 = false;
  isValid4 = false;
  isValid5 = false;
  review = false;
  modalRef: BsModalRef;
  label :string;
  placeholder: string;
  customers : Quest[];
  answers : string;
  id : number ;
  question : string;
  questionsModel: Questions;
  answermodel: Answer;
  q_id: number;
  some_id : number;
  current_id : number;
  words: number;
  wordLimit = 120;
  wordnumber = false;
  icon: string;
  content: string;
  image: string;
 
  constructor(private answerService:AnswerService, private route: ActivatedRoute,private questionService: QuestionsService,private router: Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private ngZone: NgZone, private modalService: BsModalService) {
    this.matIconRegistry.addSvgIcon("questions", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg"))
    .addSvgIcon("close-popup", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/close icon popup.svg"));
  }
  showWordCount() {
    this.words = this.wor(this.name);
    this.wordnumber = true;
  }
  wor(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      count = count +1;
    }
    return count + 1;
  }
  ngOnInit() {
    this.wordnumber = false;
    this.q_id = +this.route.snapshot.paramMap.get('id');
      this.isValid1 = true;
      this.questionService.getCustomers()
               .subscribe(
                 customers => {
                  this.customers = customers
                  this.label = this.customers[this.q_id-1].question;
                  this.placeholder = this.customers[this.q_id-1].hint;
                  this.icon = this.customers[this.q_id-1].icon_name;
                  this.content  = this.customers[this.q_id-1].modal_text;
                  this.image = this.customers[this.q_id-1].image_url;
                 }
                );              
this.some_id = this.q_id;              
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  saveChanges()
  {
    let ans = this.prepareSaveAnswer();
    this.answerService.saveAnswers(ans).then(
      data => {
      });
  console.log("Modified answer :-" + this.label +" " + this.name);

  let testing = this.replaceString((" " + this.label), "", this.name);
console.log("Original answer :-" + testing);  
     
    if(this.some_id!==(this.customers).length){
    this.router.navigate(['/questions', this.customers[this.some_id].id]);
    this.name= "";
    this.label = this.customers[this.some_id].question;
    this.placeholder = this.customers[this.some_id].hint;
    this.icon = this.customers[this.some_id].icon_name;
    this.content  = this.customers[this.some_id].modal_text;
    this.image = this.customers[this.some_id].image_url;
      this.some_id++;
    }
     else{
      this.router.navigate(['/reviewpage']);
     } 
  }
  prepareSaveAnswer(): Answer {
    const answer: Answer = {
      answer:this.label + " " + this.name,
      question_id: this.some_id,
      pitch_id: JSON.parse(localStorage.getItem('pitch_id'))
    }
    return answer;
  }
  
  onTextEnter(event : string) : void {
    this.buttonIsDisabled =true;
    let passedString = event;
   if (/\S/.test(passedString)) {
       this.buttonIsDisabled=false;
   }
  }
  replaceString(oldS, newS, fullS) {
    for (var i = 0; i < fullS.length; ++i) {
      if (fullS.substring(i, i + oldS.length) == oldS) {
        fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
      }
    }
    return fullS;
  }

}
