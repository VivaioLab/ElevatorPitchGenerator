import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();
  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "elevetorly",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/elevetorlylogo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "menu icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg")
    );
   }
   navOpen() {
    this.navToggle.emit(true);
  }

  ngOnInit() {
  }

}
