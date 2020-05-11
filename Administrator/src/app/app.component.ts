import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AuthserviceService } from './services/authservice.service';
import { ControlService } from './services/control.service';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: Observable<firebase.User>;
  msgVal: string = '';
  pages: any;
  isDarkTheme: boolean = false;
  constructor(public afAuth: AngularFireAuth, private ph:ProfileService, public ctrl: ControlService, public router: Router, public af: AngularFireDatabase) {
  
    this.ph.dashboardProfile.on('value', snap => {
      if(snap.val() == null){

      }else{
      
         
        this.router.navigateByUrl('').then(sucess =>{})
    }
    })
    this.router.navigateByUrl('').then(sucess =>{})
    
 this.pages = [
  {name: 'Dashboard', url: 'home'},
  {name: 'Requests', url: 'driver_pending'},
  {name: 'Drivers', url: 'driver'},
  {name: 'Users', url: 'client'}, 
  {name: 'Feedbacks', url: 'feed'}, 
 ]
  }

  ngOnInit() {

  }

  hideBar(){
    console.log("can go home")
    this.ctrl.sidemenu_toggle = false
  }
  
  sideNav(){
    this.ctrl.canShowNav = true;
  }
  
  
  openChange(){
      this.router.navigateByUrl('change_code').then(sucess =>{ 
    
      })
    
  }
  
  gotoPage(page){
    this.router.navigateByUrl(page).then(sucess =>{ 
      // document.getElementById("container").style.color = "red";
    })
  }
  
  logOut(){
    this.ph.dashboardProfile.update({
      loggedIn: false
    }).then(()=>{
      this.router.navigateByUrl('').then(sucess =>{ this.ctrl.hasLoggedIn = false})
    });
  }

}
