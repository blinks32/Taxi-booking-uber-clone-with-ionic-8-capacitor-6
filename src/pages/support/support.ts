import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
@IonicPage()
/**
 * Generated class for the SupportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public call: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

  callNow(){
    window.open("tel:" + '08093716253');
  }

  mail(){
    window.open("mailto:" + 'taxihub24@gmail.com');
  }
}
