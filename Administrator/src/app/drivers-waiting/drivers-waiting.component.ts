import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from '../services/control.service';
import { ProfileService } from '../services/profile.service';
import { EmailService } from '../services/email.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-drivers-waiting',
  templateUrl: './drivers-waiting.component.html',
  styleUrls: ['./drivers-waiting.component.scss']
})
export class DriversWaitingComponent implements OnInit {
  submitted: boolean = false;
  form: any;
  driverEmail:any;
  username: any;
  isDecided: boolean = false;
  id:any;
  allowed: boolean = true
  message: any;
  isDecider2: boolean = false;
  displayedColumns = ['name', 'phone', "pic", 'key'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  public items: any;
  constructor(public router: Router, public email: EmailService, public ctrl: ControlService, public ph:ProfileService) {
    ctrl.pageName = 'Drivers'
   
   }


@ViewChild(MatPaginator) paginator: MatPaginator;

     /**
      * Set the paginator after the view init since this component will
      * be able to query its view for the initialized paginator.
      */
     ngAfterViewInit() {
       this.dataSource.paginator = this.paginator;
     }

  ngOnInit() {
    this.ph._getDriverProfile().on('value', snapshot => {
      this.items = [];
    //  this.pop.hideLoader()
      snapshot.forEach( snap => {
        if (snap.val().active_state == false){
        this.items.push({
          key: snap.key,
          state: snap.val().active_state,
          name: snap.val().name,
          phone: snap.val().phoneNumber,
          pic: snap.val().license_picture,
          rating: snap.val().rating
        });
        this.dataSource = this.items
        return false

      }
      });
    });
  }


  goto_Item(item){
    this.ctrl.cur_Item = item
    this.router.navigateByUrl('driver_pending_details').then(sucess =>{
    })
  }

   
gotoPage(item){
  window.open(item)
}

  goto_Edit(item){
    this.ctrl.cur_Item = item
    console.log(this.ctrl.cur_Item)
    this.router.navigateByUrl('driver_pending_details').then(sucess =>{
      this.ctrl.prevScenedrivers = true;
      this.ctrl.newScene = false;
    })
  }
}



export interface Element {
  name: string;
  phone: any;
  pic: any;
  key: any;
}

const ELEMENT_DATA: Element[] = [

];