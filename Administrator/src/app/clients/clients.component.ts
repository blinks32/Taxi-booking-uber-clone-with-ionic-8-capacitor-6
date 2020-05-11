import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { ControlService } from '../services/control.service';
import { EmailService } from '../services/email.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  submitted: boolean = false;
  form: any;
  driverEmail:any;
  username: any;
  isDecided: boolean = false;
  id:any;
  message: any;
  isDecider2: boolean = false;
  displayedColumns = ['name', 'phone', 'rating', 'key'];
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
    this.ph._getUserProfile().on('value', snapshot => {
      this.items = [];
    //  this.pop.hideLoader()
      snapshot.forEach( snap => {
       
        this.items.push({
          key: snap.key,
          name: snap.val().name,
          phone: snap.val().phoneNumber,
         // pic: snap.val().picture,
          rating: snap.val().rating
        });
        this.dataSource = this.items
        return false

      
      });
    });
  }


  goto_Item(item){
    this.ctrl.cur_Item = item
    this.router.navigateByUrl('client_details').then(sucess =>{
    })
  }

   
gotoPage(item){
  window.open(item)
}

}



export interface Element {
  name: string;
  phone: any;
  // pic: any;
  rating: any;
  key: any;
}

const ELEMENT_DATA: Element[] = [

];