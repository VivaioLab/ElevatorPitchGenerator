import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Question5Component} from './question5/question5.component';
import {ReviewpageComponent} from './reviewpage/reviewpage.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
import {QuestionsComponent} from './questions/questions.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component:HomeComponent, data: { state: 'home'}  },
    {path : 'questions/:id', component : QuestionsComponent, data: { state: 'questions'}},
    {path : 'question5', component : Question5Component, data: { state: 'question5'}},
    {path : 'reviewpage', component : ReviewpageComponent, data: { state: 'reviewpage'}},
    {path : 'thankyou', component : ThankyouComponent, data: { state: 'thankyou'}},
    {path : 'login', component : LoginComponent, data: { state: 'login'}},
    {path : 'register', component : RegisterComponent, data: { state: 'register'}},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { 
    
  });