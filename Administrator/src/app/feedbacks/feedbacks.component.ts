import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from '../services/control.service';
import { ProfileService } from '../services/profile.service';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
  public items: any;
  constructor(public ph: ProfileService, public router:Router) { }

  ngOnInit() {
    this.ph._getDriverProfile().on('value', snapshot => {
      this.items = [];
    //  this.pop.hideLoader()
      snapshot.forEach( snap => {
        this.items.push({
          key: snap.key,
          review: snap.val().active_state,
          email: snap.val().name,
        });
        return false

      
      });
    });
  }

  gotoPage(){
    this.router.navigateByUrl('feed_user').then(sucess =>{ 
      // document.getElementById("container").style.color = "red";
    })
  }

  gotoPage2(){
    this.router.navigateByUrl('feed_driver').then(sucess =>{ 
      // document.getElementById("container").style.color = "red";
    })
  }
}
