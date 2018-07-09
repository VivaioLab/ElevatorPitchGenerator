import { Component, OnInit, NgZone, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core'
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Router } from '@angular/router';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question1: string; question2: string; question3: string; question4: string; question5: string;
  isquestion1 = false; isquestion2 = false; isquestion3 = false; isquestion4= false; isquestion5 = false;

  constructor(private router: Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private ngZone: NgZone, private modalService: BsModalService) {
    this.matIconRegistry.addSvgIcon(
      "elevetorly",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/elevatorlylogo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "menu icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "questions",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg")
    );
  }

  ngOnInit(
  ) {
    this.isquestion1 = true;
  }

  saveChanges1() {
    if (this.isquestion1 = true) {
      this.isquestion1 = false;
      this.isquestion2 = true;
      localStorage.setItem("question1", this.question1);
      console.log(localStorage.getItem("question1"));
    }
  }
  saveChanges2()
  {
    if (this.isquestion2 = true) {
      this.isquestion2 = false;
      this.isquestion3 = true;
      localStorage.setItem("question2", this.question2);
      console.log(localStorage.getItem("question2"));
    }
  }
  saveChanges3()
  {
    if (this.isquestion3 = true) {
      this.isquestion3 = false;
      this.isquestion4 = true;
      localStorage.setItem("question3", this.question3);
      console.log(localStorage.getItem("question3"));
    }
  }
  saveChanges4()
  {
    if (this.isquestion4 = true) {
      this.isquestion4 = false;
      this.isquestion5 = true;
      localStorage.setItem("question4", this.question4);
      console.log(localStorage.getItem("question4"));
    }
  }

  saveChanges5()
  {
    if (this.isquestion5= true) {
      this.isquestion5 = false;

      localStorage.setItem("question5", this.question5);
      console.log(localStorage.getItem("question5"));
      this.router.navigate(["/reviewpage"])
    }
  }
}
