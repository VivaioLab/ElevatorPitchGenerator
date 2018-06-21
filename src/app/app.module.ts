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
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    FormsModule,
    StorageServiceModule]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
