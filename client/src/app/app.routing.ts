import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Question1Component} from './question1/question1.component';
import {Question2Component} from './question2/question2.component';
import {Question3Component} from './question3/question3.component';
import {Question4Component} from './question4/question4.component';
import {Question5Component} from './question5/question5.component';
import {ReviewpageComponent} from './reviewpage/reviewpage.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
import {ConfirmpageComponent} from './confirmpage/confirmpage.component';
import {FinalversionComponent} from './finalversion/finalversion.component';
import {Home2Component} from './home2/home2.component';
const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component:HomeComponent, data: { state: 'home'}  },
    {path : 'home2', component : Home2Component, data: { state: 'home2'}},
    {path : 'question1', component : Question1Component, data: { state: 'question1'}},
    {path : 'question2', component : Question2Component, data: { state: 'question2'}},
    {path : 'question3', component : Question3Component, data: { state: 'question3'}},
    {path : 'question4', component : Question4Component, data: { state: 'question4'}},
    {path : 'question5', component : Question5Component, data: { state: 'question5'}},
    {path : 'reviewpage', component : ReviewpageComponent, data: { state: 'reviewpage'}},
    {path : 'thankyou', component : ThankyouComponent, data: { state: 'thankyou'}},
    {path : 'confirmpage', component : ConfirmpageComponent, data: { state: 'confirmpage'}},
    {path : 'finalversion', component : FinalversionComponent, data: { state: 'finalversion'}},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { 
    
  });