import { Component, OnInit, NgZone,TemplateRef, ViewChild,ViewEncapsulation } from '@angular/core'
import { FormControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Router} from '@angular/router';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private router : Router,private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer,private ngZone: NgZone,private modalService: BsModalService)
  {
   this.matIconRegistry.addSvgIcon(
     "elevetorly",
     this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/elevatorlylogo.svg")
   );
   this.matIconRegistry.addSvgIcon(
     "menu icon",
     this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg")
   );
  }

  ngOnInit() {
  }

}
