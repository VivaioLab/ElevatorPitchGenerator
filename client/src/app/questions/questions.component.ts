import { Component, OnInit, Input, NgZone, TemplateRef, ViewChild, ViewEncapsulation  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Router } from '@angular/router';
import { QuestionsService } from '../../service/questions.service';
import { Questions } from '../../model/questionsModel';
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
  id : number ;
  question : string;
  questionsModel: Questions;
  q_id: number;
  some_id : number;



  constructor(private route: ActivatedRoute,private questionService: QuestionsService,private router: Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private ngZone: NgZone, private modalService: BsModalService) {
    this.matIconRegistry.addSvgIcon("questions", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg"))
    .addSvgIcon("close-popup", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/close icon popup.svg"));
  }

  ngOnInit() {
     this.q_id = +this.route.snapshot.paramMap.get('id');
    
   

   
      this.isValid1 = true;
      this.questionService.getCustomers()
               .subscribe(
                 customers => {
                  this.customers = customers
                  this.label = this.customers[this.q_id-1].question;
                  this.placeholder = this.customers[this.q_id-1].hint;
                 }
                );

                
this.some_id = this.q_id;
           
                
                
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  saveChanges()
  {
    if(this.some_id!==(this.customers).length){
    this.router.navigate(['/questions', this.customers[this.some_id].id]);
    this.label = this.customers[this.some_id].question;
    this.placeholder = this.customers[this.some_id].hint;
    
      this.some_id++;
    }
     else{
      this.router.navigate(['/reviewpage']);
     }
    
  }
  // saveChanges(id) {

    
  
  //   // // localStorage.setItem('question1', JSON.stringify(this.name));
  //   if(this.isValid1)
  //     {
  //       this.isValid1 = false;
  //       this.isValid2 = true;
  //       this.label = "";
  //       localStorage.setItem('answer1',this.name);
       
  //       this.router.navigate(['/questions', this.customers[1].id]);
  //       this.label = this.customers[1].question;
  //       if(localStorage.getItem('answer2'))
  //       {
  //         this.name = localStorage.getItem('answer2');
  //       }
  //       else{
  //         this.name = "";
  //       }
        
  //     }
  //     else if(this.isValid2)
  //     {
        
  //       this.isValid2 = false;
  //       this.isValid3 = true;
  //       this.label = "";
  //       localStorage.setItem('answer2',this.name);
  //       this.label =  this.customers[2].question;
  //       if(localStorage.getItem('answer3'))
  //       {
  //         this.name = localStorage.getItem('answer3');
  //       }
  //       else{
  //         this.name = "";
  //       }
  //     }
  //     else if(this.isValid3)
  //     {
        
  //       this.isValid3 = false;
  //       this.isValid4 = true;
  //       this.label = "";
  //       localStorage.setItem('answer3',this.name);
  //       this.label =  this.customers[3].question;
  //       if(localStorage.getItem('answer4'))
  //       {
  //         this.name = localStorage.getItem('answer4');
  //       }
  //       else{
  //         this.name = "";
  //       }
  //     }
  //     else if(this.isValid4)
  //     {
        
  //       this.isValid4 = false;
  //       this.isValid5 = true;
  //       this.label = "";
  //       localStorage.setItem('answer4',this.name);
  //       this.label =  this.customers[4].question;
  //       if(localStorage.getItem('answer5'))
  //       {
  //         this.name = localStorage.getItem('answer5');
  //       }
  //       else{
  //         this.name = "";
  //       }
  //     }
  //     else if(this.isValid5)
  //     {
  //       localStorage.setItem('answer5',this.name);
  //       this.isValid5=false;
  //       this.router.navigate(['/reviewpage']);
  //     }
  // }

  onTextEnter(event : string) : void {
    this.buttonIsDisabled =true;
    let passedString = event;
   if (/\S/.test(passedString)) {
       this.buttonIsDisabled=false;
   }
  }

}
