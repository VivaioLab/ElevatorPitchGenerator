import { Input,Output,EventEmitter, Component, OnInit} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute ,Router } from '@angular/router';
import { QuestionsService } from '../../service/questions.service';
import {AnswerService} from '../../service/answer.service';
import {Quest} from '../../model/question-model';
import { Answer } from '../../model/answerModel';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
q_id : number;
questions : Quest[];
answers : Answer[];
isActive : false;
current_id : number;
isCurrent : false;
id : number;
isValid : boolean;

  @Input('pitch_id') pitch_id : number;
  @Output() navToggle = new EventEmitter<boolean>();

  constructor(private answerService : AnswerService,private questionService : QuestionsService, private route: ActivatedRoute,private router : Router) {
     }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.q_id = params['id'];
      
      this.questionService.getQuestions()
    .subscribe(
      question => {
       this.questions = question
       console.log("Questions "+this.questions.length);
      }
     ); 
     this.answerService.getAnswers(JSON.parse(localStorage.getItem('pitch_id'))).then(
      data =>{
        if(data)
        {
          this.answers = data;
          console.log("Answers "+this.answers.length);
        }
         
      }
    );
    
    });
  
  }
  switchpage(id){
    this.router.navigate(['/questions',id]);
  }
  navClose() {
    this.navToggle.emit(false);
  }

  // isAnswered(question_ids)
  // {
  //   this.answerService.getAnswerByQuestion(JSON.parse(localStorage.getItem('pitch_id')),question_ids).then(
  //     data =>{
  //       console.log("inside");
  //       if(data)
  //       {
  //         console.log(data);
  //         return true;
         
  //       }
  //       else
  //       {
  //         return false;
  //       }
  //     }
  //   )

  // }



}