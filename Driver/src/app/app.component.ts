import { Component, NgZone } from '@angular/core';

import { Platform, ModalController, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { SettingsService } from './services/settings.service';
import { LanguageService } from './services/language.service';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Earnings',
      url: '/history',
      icon: 'ios-card'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'ios-clock'
    },
    {
      title: 'Support',
      url: '/support',
      icon: 'ios-chatbubbles'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'ios-settings'
    },
   
    {
      title: 'Documents',
      url: '/documents',
      icon: 'ios-book'
    },
    {
      title: 'Wallet',
      url: '/wallet',
      icon: 'ios-briefcase'
    },
    {
      title: 'Select Zone',
      url: '/zone',
      icon: 'ios-map'
    }
  ];
  public user: any;
  showSplash = true;
  public userProfile: any;
  public phone: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public zone: NgZone, public set: SettingsService, public lp: LanguageService,
    public modalCtrl: ModalController, public loadingCtrl: LoadingController,
    private One: OneSignal, public ph: ProfileService, public auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.One.startInit(this.set.OnesignalAppID, this.set.CloudID);
      this.One.inFocusDisplaying(this.One.OSInFocusDisplayOption.Notification);
      this.One.setSubscription(true);
      this.One.endInit();
    });
  }
}
