import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ReviewpageComponent} from './reviewpage/reviewpage.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
import {QuestionsComponent} from './questions/questions.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PitchListComponent} from './pitch-list/pitch-list.component';
import  {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {AuthGuard} from './auth.guard';
 const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component:HomeComponent, data: { state: 'home'}  },
    {path : 'questions/:id', component : QuestionsComponent, data: { state: 'questions'}},
    {path : 'reviewpage', component : ReviewpageComponent, data: { state: 'reviewpage'}},
    {path : 'thankyou', component : ThankyouComponent, data: { state: 'thankyou'}},
    {path : 'login', component : LoginComponent, data: { state: 'login'}},
    {path : 'register', component : RegisterComponent, data: { state: 'register'}},
    {path : 'forgot-password', component : ForgotPasswordComponent, data: { state: 'forgot-password'}},
    {path : 'userprofile', component : UserprofileComponent, data: { state: 'userprofile'},canActivate: [AuthGuard]},
    {path : 'pitch-list', component : PitchListComponent, data: { state: 'pitch-list'},canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { 
    
  });