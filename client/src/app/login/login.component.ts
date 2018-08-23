import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {LoginServiceService} from '../../service/login-service.service';
 
import {Email} from '../../model/loginModel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  data : Email;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService : LoginServiceService) {}

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // reset login status
      this.loginService.logout();

      // get return url from route parameters or default to '/'
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loginService.login(this.f.username.value, this.f.password.value)
        .then(
            data => {
                this.data = data;
                console.log(data)
        
                if(data)
                {
                alert("successfully logged in")
                this.router.navigate(['/pitch-list']);
                }
                
               
            },
            error => {
            });
         
}

}
