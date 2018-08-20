import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

import { LoginServiceService} from '../../service/login-service.service';

import {Email} from '../../model/loginModel';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
 passwordUpdated : boolean;
 emailExists : boolean;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  matcher = new MyErrorStateMatcher();
  constructor(private formBuilder: FormBuilder,private loginService : LoginServiceService,private router : Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.checkPasswords });

  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true }
  }
  get f() { return this.loginForm.controls; }
  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
  this.loginService.getUserByEmail(this.loginForm.controls.email.value).then(
    data =>{
      if(data)
      {
        this.emailExists= false;
        let prepLogin = this.prepareUpdatePassword(data);
        this.loginService.updatePassword(prepLogin).subscribe(
          updatedLogin  =>{
            if(updatedLogin)
            {
              this.passwordUpdated = true;
              this.router.navigate(['/login'])
            }
            else{
            }
          }
        )
      }
      else{
        this.emailExists = true;
      }
    }
  )

  }
   prepareUpdatePassword(data): Email {
    const login: Email = {
     id : data.id,
     user_name: data.user_name,
    password: this.loginForm.controls.password.value,
    email: data.email 
    }
    return login;
  }

}
