import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { Question1Component } from './question1/question1.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    Question1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    FormsModule]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
