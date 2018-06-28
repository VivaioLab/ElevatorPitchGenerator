import { Component, OnInit} from '@angular/core';
// import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

// const query = (s,a,o={optional:true}) => q(s,a,o);



// const homeTransition = trigger('homeTransition', [
//   transition(':enter', [
//     query('.block', style({ opacity: 0 }), {optional:true}),
//     query('.block', stagger(300, [
//       style({ transform: 'translateY(100px)' }),
//       animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
//     ]), {optional:true}),
//   ]),
//   transition(':leave', [
//     query('.block', stagger(300, [
//       style({ transform: 'translateY(0px)', opacity: 1 }),
//       animate('3s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
//     ]), {optional:true}),        
//   ])
// ]);
// debugger
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [ homeTransition ],
  // host: {
  //   '[@homeTransition]': ''
  // }
})
export class HomeComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "elevetorly",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/elevatorly logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "menu-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/menu icon.svg")
    );
   }

  ngOnInit() {
  }

}
