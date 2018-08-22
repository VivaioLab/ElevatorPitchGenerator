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
import { ReviewpageComponent } from './reviewpage/reviewpage.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {MatToolbarModule,MatButtonModule,MatInputModule,MatIconModule, MatSidenavModule} from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CorouselComponent } from './corousel/corousel.component';
import {QuestionsComponent} from './questions/questions.component';
import { QuestionsService } from '../service/questions.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PitchListComponent } from './pitch-list/pitch-list.component';
import {AuthGuard} from './auth.guard';
import {LoginServiceService} from '../service/login-service.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ReviewpageComponent,
    ThankyouComponent,
    SidenavComponent,
    CorouselComponent,
    QuestionsComponent,
    LoginComponent,
    RegisterComponent,
    PitchListComponent,
    ForgotPasswordComponent,
    UserprofileComponent,
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
  providers: [
    AuthGuard,
    LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class App {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
