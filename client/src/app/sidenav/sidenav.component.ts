import { Input, Component, OnInit} from '@angular/core';
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

  // isValid1 = false;
  // isValid2 = false;
  // isValid3 = false;
  // isValid4 = false;
  // isValid5 = false;
  // isReview = false;
  // current_id: number;
  constructor(private answerService : AnswerService,private questionService : QuestionsService, private route: ActivatedRoute,private router : Router) {
      // this.content();
    
     }

  ngOnInit() {
    // this.onLoading();
  
    this.route.params.subscribe(params => {
      this.q_id = params['id'];
      
      this.questionService.getCustomers()
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



}