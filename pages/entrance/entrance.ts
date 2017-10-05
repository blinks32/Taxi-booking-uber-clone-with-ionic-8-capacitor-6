import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the EntrancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrance',
  templateUrl: 'entrance.html',
})
export class EntrancePage {

  constructor(public navCtrl: NavController, public load: LoadingController,  public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.presentRouteLoader('Please Wait..')
  }


presentRouteLoader(message) {
  let loading = this.load.create({
    content: message
  });

  loading.present();

  let myTimeout = setTimeout(() => {
    loading.dismiss();
   this.navCtrl.setRoot('SignupPage')
    clearTimeout(myTimeout)
    
  }, 1000);
}

}
