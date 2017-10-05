import { Component, ViewChild, NgZone } from '@angular/core';
import { Platform, Nav, Loading, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { ProfileProvider } from '../providers/profile/profile';
import { OneSignal} from '@ionic-native/onesignal';
import { NativeMapContainerProvider } from '../providers/native-map-container/native-map-container';
import * as firebase from 'firebase/app';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
    public user: any;
    @ViewChild(Nav) nav: Nav;
    public fireAuth:firebase.auth.Auth;
    public rootPage: any = 'HomePage';
    public userProfile: any;
    phone: any;
    pages: Array<{title: string, component: any, icon: string}>

  constructor(public zone: NgZone, private cMap: NativeMapContainerProvider,  public loadingCtrl: LoadingController, private One: OneSignal, public ph: ProfileProvider, public auth: AuthProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp()
   
    this.pages = [
      { title: 'Promo', component: 'PromoPage', icon: "trophy" },
      { title: 'History', component: 'HistoryPage', icon: "clock" },
      { title: 'Payment', component: 'PaymentPage', icon: "card" },
      { title: 'Support', component: 'SupportPage', icon: "help-circle" },
      { title: 'About', component: 'AboutPage', icon: "information-circle" },
    ];

  }




  initializeApp(){
    this.platform.ready().then(() => {
   
      if (this.platform.is('cordova')) {
      this.One.startInit("61ee0e36-8694-4ec8-9436-29982b7f8d57", "890704209838");
      this.One.inFocusDisplaying(this.One.OSInFocusDisplayOption.Notification);
      this.One.setSubscription(true);
      this.One.endInit();  
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString("#BBBBBB");
      setTimeout(() => {
        this.splashScreen.hide();
      }, 500);
      
    }
    });
  }

  
    openPage(page) {
      this.nav.push(page.component);
    }

    gotoProfile(){
      this.nav.push('ProfilePage');
    }

  }