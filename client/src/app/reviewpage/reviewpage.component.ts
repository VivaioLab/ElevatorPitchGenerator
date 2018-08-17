import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Questions } from '../../model/questionsModel';

import { QuestionsService } from '../../service/questions.service';
import { LoginServiceService } from '../../service/login-service.service';
import { PitchService } from '../../service/pitch-service.service';
import { AnswerService } from '../../service/answer.service';

import { Email } from '../../model/loginModel';
import { Pitch } from '../../model/pitchModel';
import { Quest } from '../../model/question-model';
import { Answer } from '../../model/answerModel';

@Component({
  selector: 'app-reviewpage',
  templateUrl: './reviewpage.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reviewpage.component.css']
})
export class ReviewpageComponent implements OnInit {
  pitch_name : string;
  isCurrent = true;
  customers: Quest[];
  answers : Answer[];
  emails: Email[];
  user_id: number;
  email_id: string;
  pitch: Pitch[];
  answer: Answer[];
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  answer1: string;
  modalRef: BsModalRef;
  questionsModel: Questions;
  pitchModel: Pitch;
  quest_id: number;
  value : string;
  mask : string;
  get saveQuestion1() {

    this.question2 = localStorage.getItem('question2');
    return this.question2;

    
  }
  
  get saveQuestion2() {
    this.question2 = localStorage.getItem('question2');
    return this.question2;
  }

  get saveQuestion3() {
    this.question3 = localStorage.getItem('question3');
    return this.question3;
  }

  get saveQuestion4() {
    this.question4 = localStorage.getItem('question4');
    return this.question4;
  }
  get saveQuestion5() {
    this.question5 = localStorage.getItem('question5');
    return this.question5;
  }
  
  constructor(private answerService:AnswerService,private pitchService:PitchService,private questionService: QuestionsService, private loginService: LoginServiceService,
    private modalService: BsModalService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("close-popup", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/close icon popup.svg"))
      .addSvgIcon("edit-icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/edit icon.svg"));
  }

  ngOnInit() {
    this.answerService.getAnswers(JSON.parse(localStorage.getItem('pitch_id'))).then(
      answers =>{
        if(answers)
        {
          this.answer = answers;
          console.log(this.answer);
        }
        
        
      }
    );
    this.questionService.getQuestions()
      .subscribe(
      customers => {
        console.log(customers);
        this.customers = customers
      }
      );

  }
  
  savToBackend() {

    if (this.questionsModel) {

      this.questionService.saveQuestions(this.questionsModel).subscribe();

    }

  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  emailtoUs() {
//     this.loginService.getUserByEmail(this.email_id).then(
//       login => {
      
//         if (login) {
//           let newPitch = this.prepareSavePitch(login.id);
//           console.log(newPitch);
//           this.pitchService.updatePitch(newPitch).subscribe(
//             pitch => {
//               console.log(pitch);
//             });
          
//         }
//         else {
//           this.loginService.createNewUser(this.email_id).then(
//             data => {
//               let newPitch = this.prepareSavePitch(data.id);
//           this.pitchService.updatePitch(newPitch).subscribe(
//             pitch => {
//               console.log(pitch);
//             });
        

//       });
        
//   }
// })
}

  

  // prepareSavePitch(data): Pitch {
  //   const pitch: Pitch = {
  //     id: JSON.parse(localStorage.getItem('pitch_id')),
  //     user_id: data
  //   }
  //   return pitch;
  // }
  savePitchName(){
   localStorage.setItem('pitch_name',this.pitch_name);
   console.log(this.pitch_name);
  }
  
}

