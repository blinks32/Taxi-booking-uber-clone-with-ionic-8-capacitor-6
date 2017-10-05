import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the RatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage {
  public uid: any;
  constructor(public navCtrl: NavController, public storage: Storage, public pop: PopUpProvider, public navParams: NavParams, public prof: ProfileProvider) {
  }

  onModelChange($event){
    var value = this.navParams.get('eventId')
      console.log(value)
      this.prof.RateDriver(value, true).then(suc =>{
      // this.pop.clearAll(value, true);
        this.navCtrl.pop();
        });
  
   
  }

}
