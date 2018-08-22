import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {LoginServiceService} from '../../service/login-service.service';
import {Email} from '../../model/loginModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
updatesuccess :boolean;
edit_username : boolean;
username : string;
password : string;
email : string;
edit_email : boolean;
edit_password : boolean;
  constructor( private router : Router,private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer,private loginService :LoginServiceService) {
    this.matIconRegistry
      .addSvgIcon("edit-icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/edit icon.svg"))
      .addSvgIcon("logout", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/login.svg"));
}


  ngOnInit(
  ) {
    this.updatesuccess = false;
    this.edit_username = false;
    this.username = JSON.parse(localStorage.getItem("currentUser")).user_name;
    this.email = JSON.parse(localStorage.getItem("currentUser")).email;
    this.password = JSON.parse(localStorage.getItem("currentUser")).password;
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

editUsername(){
  this.edit_username =true;
}
editEmail(){
  this.edit_email =true;
}
editPassword(){
  this.edit_password =true;
}
undoUsername(){
  this.edit_username =false;
  this.username =JSON.parse(localStorage.getItem("currentUser")).user_name;
}
undoEmail(){
  this.edit_email =false;
  this.email =JSON.parse(localStorage.getItem("currentUser")).email;
}
undoPassword(){
  this.edit_password=false;
  this.password =JSON.parse(localStorage.getItem("currentUser")).password;
}
saveUsername(){
  this.edit_username =false;
  let updatedLogin = this.prepareUpdateUser();
  this.loginService.updatePassword(updatedLogin).subscribe(
    login =>{
      console.log(login);
      localStorage.setItem("currentUser",JSON.stringify(login));
      this.updatesuccess = true;
    }
  )

}
prepareUpdateUser() : Email{
  const login : Email = {
    id : JSON.parse(localStorage.getItem("currentUser")).id,
    user_name : this.username,
    email : this.email,
    password : this.password
  }
  return login;
}
}
