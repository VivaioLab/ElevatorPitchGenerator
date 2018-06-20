import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Question1Component} from './question1/question1.component'

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component:HomeComponent, data: { state: 'home'}  },
    {path : 'question1', component : Question1Component, data: { state: 'question1'}},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { 
    useHash: true
  });