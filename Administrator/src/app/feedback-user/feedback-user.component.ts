import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from '../services/control.service';
import { ProfileService } from '../services/profile.service';
import { EmailService } from '../services/email.service';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-feedback-user',
  templateUrl: './feedback-user.component.html',
  styleUrls: ['./feedback-user.component.scss']
})
export class FeedbackUserComponent implements OnInit {
  items:any;
  constructor(public router: Router, public dialog: MatDialog, public email: EmailService, public ctrl: ControlService, public ph:ProfileService) { }
  ngOnInit() {
    this.ph._getFeedUserProfile().on('value', snapshot => {
      this.items = [];
    //  this.pop.hideLoader()
      snapshot.forEach( snap => {

        this.items.push({
          key: snap.key,
          email: snap.val().email,
          review: snap.val().complain,
        });
        return false

      
      });
    });
  }





  
  openDialog(item): void {
    this.ctrl.name = 'Are You Sure To Delete?'
   let dialogRef = this.dialog.open(DialogComponent, {
     width: '250px',
   });

   dialogRef.afterClosed().subscribe(result => {
       if (!this.ctrl.state_1){
          this.Delete(item);
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


  Mail(email){
    let myText = 'Hi '+ name + ', '
    window.open("mailto:"+email+'?cc='+'&subject='+'Message From Admin'+'&body='+ myText);
  }



  Delete(item){
    this.ph.getFeedUserProfile(item).remove().then(f =>{
     this.openDialog3('Removed Successfully')
    })
  }



}



