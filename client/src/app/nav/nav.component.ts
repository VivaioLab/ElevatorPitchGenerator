import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {LoginServiceService} from '../../service/login-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  login : boolean;
  @Output() navToggle = new EventEmitter<boolean>();
  constructor(private loginService : LoginServiceService, private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "menu icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg")
    );
   }


   navOpen() {
    this.navToggle.emit(true);
  }

  ngOnInit() {
    if(localStorage.getItem('currentUser'))
    {
      this.login = false;
    }
    else{
      this.login = true;
    }
  }
  logout(){
    this.loginService.logout();
    this.login = true;
  }

}
