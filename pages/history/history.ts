import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  public eventList: Array<any>;

  constructor(public navCtrl: NavController, public eventProvider: EventProvider) {}

  ionViewDidEnter() {
    this.eventProvider.getEventList().on('value', snapshot => {
      this.eventList = [];
      snapshot.forEach( snap => {
        this.eventList.push({
          id: snap.key,
          name: snap.val().name,
          price: snap.val().price,
          date: snap.val().date,
          location: snap.val().location,
          destination: snap.val().destination
        });
        return false
      });
    });
  }

  goToEventDetail(eventId){
  //  this.navCtrl.push('history-details', { 'eventId': eventId });
  }

}