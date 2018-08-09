import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Quest} from '../../model/question-model';
import {Pitch} from '../../model/pitchModel';
import { QuestionsService } from '../../service/questions.service';
import { PitchService } from '../../service/pitch-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  customers : Quest[];
  constructor(private router: Router,private questionService: QuestionsService, private pitchService:PitchService) {
   }

  ngOnInit() {
    this.questionService.getCustomers()
               .subscribe(
                 customers => {
                  this.customers = customers
                 }
                );
  }

  clickButton()
  {
    this.pitchService.createNewPitch().then(
      data => {
        let newPitch = data.id;
        console.log(data);
        localStorage.setItem('pitch_id',newPitch);
        console.log(localStorage.getItem('pitch_id'));
      });
    this.router.navigate(['/questions', this.customers[0].id]);
    
  }
}
