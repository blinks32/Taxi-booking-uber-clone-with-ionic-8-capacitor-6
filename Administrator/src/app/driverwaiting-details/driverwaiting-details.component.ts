import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from '../services/control.service';
import { ProfileService } from '../services/profile.service';
import { EmailService } from '../services/email.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-driverwaiting-details',
  templateUrl: './driverwaiting-details.component.html',
  styleUrls: ['./driverwaiting-details.component.scss']
})
export class DriverwaitingDetailsComponent implements OnInit {

  driverEmail: any;
  form:any;
  username: any;
  isDecided: boolean = false;
  id: any;
  allowed: boolean = true
  snap: any;
  constructor( public email: EmailService, public dialog: MatDialog, public router: Router, public ctrl: ControlService, public ph: ProfileService) { 
    ctrl.pageName = 'Drivers Pending Details'
  }


  ngOnInit() {
    this.ph.getDriverProfile(this.ctrl.cur_Item).on('value', snapshot => {
      
     
          this.snap = snapshot.val()
           
         
 
         console.log(this.snap)
       });
  }

  login() {
    this.router.navigateByUrl('driver');
  }


  openDialog(): void {
    this.ctrl.name = 'Are You Sure To Reject Request?'
   let dialogRef = this.dialog.open(DialogComponent, {
     width: '250px',
   });

   dialogRef.afterClosed().subscribe(result => {
    if (!this.ctrl.state_1){
      this.Delete();
      this.ctrl.state_1 = true
   }
   });
 }


 Delete(){
  console.log(this.ctrl.cur_Item)
  this.ph.getDriverProfile(this.ctrl.cur_Item).remove().then(f =>{
    this.openDialog3('Driver Deleted Succefully')
    this.allowed = false;
    this.router.navigateByUrl('driver_pending').then(sucess =>{
      this.allowed = true
    })
  })
}




openDialog2(): void {
  this.ctrl.name = 'Are You Want To Accept This Driver?'
 let dialogRef = this.dialog.open(DialogComponent, {
   width: '250px',
 });

 dialogRef.afterClosed().subscribe(result => {
  if (!this.ctrl.state_1){
    this.Accept();
    this.ctrl.state_1 = true
 }
 });
}



openDialog3(g): void {
  this.ctrl.name = g
 let dialogRef = this.dialog.open(DialogComponent, {
   width: '250px',
 });

 dialogRef.afterClosed().subscribe(result => {
 
 });
}



  Accept() {
   let state = this.ph.updateState(this.ctrl.cur_Item)
   if (state != null){
    this.openDialog3('You Have Added This Driver To Your Team.')
    this.allowed = false
   }
  }
    
 
  

  
   // this.openDialog3('You Have Added This Driver To Your Team.')
   // });



Mail(email, name){
  this.driverEmail = email
  let myText = 'Hi '+ name + ', '
 // this.ctrl.canHide = true
  this.username = name
  window.open("mailto:"+email+'?cc='+'&subject='+'Message From Admin'+'&body='+ myText);
}

onSubmit(form: any ) {
  this.form = form;
  this.email.send('Message From Admin', form.name, this.driverEmail)
  console.log(this.driverEmail)
} 


gotoPage(item){
  window.open(item.license_picture)
}



}
