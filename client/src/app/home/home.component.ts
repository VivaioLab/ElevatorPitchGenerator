import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Quest} from '../../model/question-model';
import { QuestionsService } from '../../service/questions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  customers : Quest[];
  constructor(private router: Router,private questionService: QuestionsService) {
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
    this.router.navigate(['/questions', this.customers[0].id]);
  }

}
