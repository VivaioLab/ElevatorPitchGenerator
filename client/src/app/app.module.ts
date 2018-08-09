import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { ReviewpageComponent } from './reviewpage/reviewpage.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ConfirmpageComponent } from './confirmpage/confirmpage.component';
import {MatToolbarModule,MatButtonModule,MatInputModule,MatIconModule, MatSidenavModule} from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CorouselComponent } from './corousel/corousel.component';
import {QuestionsComponent} from './questions/questions.component';
import { QuestionsService } from '../service/questions.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    ReviewpageComponent,
    ThankyouComponent,
    ConfirmpageComponent,
    SidenavComponent,
    CorouselComponent,
    QuestionsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    FormsModule,
    StorageServiceModule,
    ModalModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule
  ]
  ,
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class App {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
