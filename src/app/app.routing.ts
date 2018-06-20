import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Question1Component} from './question1/question1.component';
import {Question2Component} from './question2/question2.component';
import {Question3Component} from './question3/question3.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component:HomeComponent, data: { state: 'home'}  },
    {path : 'question1', component : Question1Component, data: { state: 'question1'}},
    {path : 'question2', component : Question2Component, data: { state: 'question2'}},
    {path : 'question3', component : Question3Component, data: { state: 'question3'}},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { 
    useHash: true
  });