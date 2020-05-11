import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from '../services/control.service';
import { ProfileService } from '../services/profile.service';
import { EmailService } from '../services/email.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  submitted: boolean = false;
  form: any;
  driverEmail:any;
  username: any;
  isDecided: boolean = false;
  snap: any;
  id:any;
  //item: any;
  allowed: boolean = true
  message: any;
  isDecider2: boolean = false;
  public item: Array<any>;
  constructor(public router: Router, public dialog: MatDialog, public email: EmailService, public ctrl: ControlService, public ph:ProfileService) {
    ctrl.pageName = 'Drivers_Details'
   }

  ngOnInit() {
    this.ph.getUserProfile(this.ctrl.cur_Item).on('value', snapshot => {
     
    
         this.snap = snapshot.val()
          
        

        console.log(this.snap)
      });
  
   }
 
   
  
   openDialog(): void {
     this.ctrl.name = 'Are You Sure To Delete?'
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




  openDialog3(g): void {
    this.ctrl.name = g
   let dialogRef = this.dialog.open(DialogComponent, {
     width: '250px',
   });

   dialogRef.afterClosed().subscribe(result => {
   
   });
 }
 
 
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
 
 
 
   login() {
     this.router.navigateByUrl('client');
   }
 
 
 
   Delete(){
     this.ph.getUserProfile(this.ctrl.cur_Item).remove().then(f =>{
      this.openDialog3('User Removed Successfully')
      this.allowed = false;
      this.router.navigateByUrl('client').then(sucess =>{
        this.allowed = true
      })
     })
   }

 
 
 gotoPage(item){
   window.open(item.picture)
 }
 
}


