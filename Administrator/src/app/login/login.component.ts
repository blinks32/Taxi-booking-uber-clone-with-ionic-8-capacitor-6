import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfileService } from '../services/profile.service';
import { ControlService } from '../services/control.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;
  powers: string[];
  num_times: number = 0;
  submitted: boolean = false;
  started: boolean = false;
  constructor(private ph: ProfileService, public ctrl:ControlService, public authS: AuthserviceService, public router: Router) {
    this.ctrl.pageName = 'Login'
   }

  ngOnInit() {
    this.ctrl.hasLoggedIn = false;
  }

  onSubmit(form: any)  {
    console.log(this.ph.dashboardProfile)
    this.ctrl.started = true
    this.ph.dashboardProfile.on('value', snap => {
      console.log(snap.val())
    if (snap.val() == null){
      console.log(snap)
      this.ph.dashboardProfile.update({
        code: form.name,
        perkm: 10,
        price: 100,
        loggedIn: true
      }).then(()=>{
        this.router.navigateByUrl('home').then(sucess =>{})
        this.started = true
      });
    }else{
    this.form = form;
  this.ph.dashboardProfile.on('value', Snap => {
  if (this.num_times < 5 )
    if (form.name == Snap.val().code){
      this.ph.dashboardProfile.update({
        loggedIn: true
      }).then(()=>{
        this.router.navigateByUrl('home').then(sucess =>{})
        console.log('has now logged in')
        this.ctrl.started = true
      });
    }else{
      console.log('That is very wrong' + Snap.val().code)
      this.submitted = true;
      this.num_times = this.num_times + 1
      this.ctrl.started = false;
    }

    this.ph.dashboardProfile.off('value')
  })
}
this.ph.dashboardProfile.off('value')
    })
  }

}
