import { Input, Component, OnInit} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  modalRef: BsModalRef;
  @Input('isCurrent1') isCurrent1 : boolean;
  @Input('isCurrent2') isCurrent2 : boolean;
  @Input('isCurrent3') isCurrent3 : boolean;
  @Input('isCurrent4') isCurrent4 : boolean;
  @Input('isCurrent5') isCurrent5 : boolean;
  @Input('isCurrentReview') isCurrentReview : boolean;
  isValid1 = false;
  isValid2 = false;
  isValid3 = false;
  isValid4 = false;
  isValid5 = false;
  isReview = false;
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.content();
     }

  ngOnInit() {
    this.onLoading();
    
  }
  content(){
    this.matIconRegistry
    .addSvgIcon("problem-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/problem icon.svg"))
    .addSvgIcon("questions",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg"))
    .addSvgIcon("name-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/nameicon.svg"))
    .addSvgIcon("solution-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/solution.svg"))
    .addSvgIcon("value-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/value icon.svg"))
    .addSvgIcon("proof-icon",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/proof and ask.svg")); 
   }
onLoading()
{
  if(localStorage.getItem("question"))
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
      this.isReview = true;
    }
}
}
