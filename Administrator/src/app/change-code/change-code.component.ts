import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { ControlService } from '../services/control.service';

@Component({
  selector: 'app-change-code',
  templateUrl: './change-code.component.html',
  styleUrls: ['./change-code.component.scss']
})
export class ChangeCodeComponent implements OnInit {
 
  form: any;
  powers: string[];
  submitted: boolean = false;
  submitted2: boolean = false;
  submitted3: boolean = false;

  constructor(public authS: AuthserviceService, public ctrl: ControlService, public router: Router, public ph: ProfileService) { 
    this.ctrl.pageName = 'Settings'
  }
     
  ngOnInit() {

  }

  onSubmit(form: any ) {
    this.form = form;
    return this.ph.dashboardProfile.update({
      code: form.name,
    }).then(d =>{
      this.submitted = true;
      console.log(d)
    });
  } 


  onSubmit2(form: any ) {
     this.form = form;
     return this.ph.dashboardProfile.update({
       price: form.name,
     }).then(()=>{
       this.submitted2 = true;
     });
   } 

   onSubmit3(form: any ) {
    this.form = form;
    return this.ph.dashboardProfile.update({
      perKm: form.name,
    }).then(()=>{
      this.submitted3 = true;
    });
  } 
 

}
