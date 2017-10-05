import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { IonicPage } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-history-details',
  templateUrl: 'history-details.html',
})
export class HistoryDetailsPage {
  public currentEvent: any = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public eventProvider: EventProvider) {}

  ionViewDidEnter(){
    this.eventProvider.getEventDetail(this.navParams.get('eventId'))
    .on('value', eventSnapshot => {
      this.currentEvent = eventSnapshot.val();
      this.currentEvent.id = eventSnapshot.key;
    });
  }

  
}
