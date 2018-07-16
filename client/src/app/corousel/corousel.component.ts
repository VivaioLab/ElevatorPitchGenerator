import { Component, OnInit ,Input} from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.onLoading();
   
  }
  onLoading()
  {
    if(localStorage.getItem("question1"))
    {
      this.isValid1 = true;
    }
    if(localStorage.getItem("question2"))
    {
      this.isValid2 = true;
    }
    if(localStorage.getItem("question3"))
    {
      this.isValid3 = true;
    }
    if(localStorage.getItem("question4"))
    {
      this.isValid4 = true;
    }
    if(localStorage.getItem("question5"))
    {
      this.isValid5 = true;
    }
    if (JSON.parse(localStorage.getItem('question1')) &&
      JSON.parse(localStorage.getItem('question2')) &&
      JSON.parse(localStorage.getItem('question3')) &&
      JSON.parse(localStorage.getItem('question4')) &&
      JSON.parse(localStorage.getItem('question5'))) {
      this.review = true;
    }
  }
}
