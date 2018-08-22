import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import {Pitch} from '../../model/pitchModel';
import {PitchService} from '../../service/pitch-service.service';
import {AnswerService} from '../../service/answer.service';
import { LoginServiceService } from '../../service/login-service.service';
import {Answer} from '../../model/answerModel';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-pitch-list',
  templateUrl: './pitch-list.component.html',
  styleUrls: ['./pitch-list.component.css']
})
export class PitchListComponent implements OnInit {
  answerBol = false;
pitches : Pitch[];
showingPitchNumbers : number[];
pitchSaved = false;
answers : Answer[];
megaAnswers : string[];
pitchid : number;
currentUser : string;
  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer:DomSanitizer, private router : Router,private pitchService : PitchService,private answerService : AnswerService,private loginService : LoginServiceService) {
    this.matIconRegistry.addSvgIcon("close-popup", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/close icon popup.svg"))
      .addSvgIcon("edit-icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/edit icon.svg"))
      .addSvgIcon("trash", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/edit icon.svg"));
  }

  ngOnInit() {
    this.pitchid = JSON.parse(localStorage.getItem('pitch_id'));
    if(this.pitchid && localStorage.getItem('pitch_name'))
    {
      let UpdatedPitch = this.prepareSavePitch(JSON.parse(localStorage.getItem('currentUser')).id);
      this.pitchService.updatePitch(UpdatedPitch).subscribe(
        data =>{
          this.pitchSaved = true;
          
          localStorage.removeItem('pitch_id');
          localStorage.removeItem('pitch_name');

        }
      )
    }


    this.currentUser = JSON.parse(localStorage.getItem('currentUser')).email;
  
    this.pitchService.getAllPitchofCurrentUser(this.currentUser).then(
      data =>{
        this.pitches = data; 
        console.log((this.pitches.length));  
        for(var i =0;i<(this.pitches).length;i++)
        {
          this.answerService.getAnswers(this.pitches[i].id).then(
            
              data => {
                this.answers = data;
                console.log(this.answers)
              }
            
          )
        } 
        }
    )
   
  }
  prepareSavePitch(data): Pitch {
    const pitch: Pitch = {
      id: this.pitchid,
      pitch_name : localStorage.getItem('pitch_name'),
      user_id: data
    }
    return pitch;
  }
  showPitchdetail(id)
{
  this.answerService.getAnswers(id).then(
    data =>{
      this.answers = data;
      this.answerBol = true;
    }
  )
}
  showAllpitches()
  {
    console.log(this.pitches);
  }
  logout()
  {
    this.loginService.logout();
    this.router.navigate(['/home']);

  }

  
}
