import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicPage } from 'ionic-angular';
import { BrowserTab} from '@ionic-native/browser-tab';
@IonicPage()

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public iab: InAppBrowser, public browsertab: BrowserTab, public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoSite(){
    const browser = this.iab.create('https://taxihub.com.ng/');
    // this.browsertab.openUrl('https://taxihub.com.ng/').then(suc=>{
    //   console.log('hurray!! it works')
    // })
  }

  gotoSite2(){
    this.browsertab.openUrl('https://chineduetoh.com/')
  }

}
