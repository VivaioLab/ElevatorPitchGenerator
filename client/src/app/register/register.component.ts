import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginServiceService} from '../../service/login-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  email : string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginServiceService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', Validators.required],
        // lastName: ['', Validators.required],
        user_name: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
get f() { return this.registerForm.controls; }
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  this.loading = true;
  this.loginService.checkifemailexists(this.registerForm.value).then(data =>{
    if(!data)
    {
      this.loginService.register(this.registerForm.value)
      .then(
          data => {
            console.log(data);
              alert('Registration successful');
              this.router.navigate(['/login']);
          },
          error => {
            alert('Registration  not successful');
              this.loading = false;
          });
    }
    if(data)
    {
      alert("email already exists");
      this.loading = false;
    }
    });
  
}
}
