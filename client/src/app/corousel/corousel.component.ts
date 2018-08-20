import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../../service/questions.service';
import {Quest} from '../../model/question-model';
import {AnswerService} from '../../service/answer.service';
import { Answer } from '../../model/answerModel';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.css']
})

export class CorouselComponent implements OnInit {
  @Input('isCurrent1') isCurrent1 : boolean;
  @Input('isCurrent2') isCurrent2 : boolean;
  @Input('isCurrent3') isCurrent3 : boolean;
  @Input('isCurrent4') isCurrent4 : boolean;
  @Input('isCurrent5') isCurrent5 : boolean;

  isValid1 = false;
  isValid2 = false;
  isValid3 = false;
  isValid4 = false;
  isValid5 = false;
  review = false;
  q_id: number;
  icon: string;
  image: string;
  questions : Quest[];
  current_quest: string;
  answers: Answer[];

  
  constructor(private answerService: AnswerService,private router: Router,private route: ActivatedRoute,private questionService: QuestionsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.q_id = params['id'];
      
      this.questionService.getQuestions()
    .subscribe(
      question => {
       this.questions = question
      }
     ); 
     this.answerService.getAnswers(JSON.parse(localStorage.getItem('pitch_id'))).then(
      data =>{
        if(data)
        {
          this.answers = data;
        }
         
      }
    );
    
    });
  }
}