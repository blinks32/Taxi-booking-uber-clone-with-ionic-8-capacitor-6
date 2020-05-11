import { Component, ViewChild, NgZone } from '@angular/core';
import { Platform, ModalController, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { SettingsService } from './services/settings.service';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { LanguageService } from './services/language.service';
import { NativeMapContainerService } from './services/native-map-container.service';
import { Environment } from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public user: any;


  // for the purpose of effective lazy loading of pages make your rootPage directed at homepage.
  public rootPage: any;
  showSplash = true;
  public userProfile: any;
  phone: any;

  public appPages = [
    {
      title: 'Payment',
      url: '/payment',
      icon: 'ios-card'
    },
       
    {
      title: 'Language',
      url: '/settings',
      icon: 'ios-settings'
    },
   
    {
      title: 'About',
      url: '/about',
      icon: 'ios-information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public zone: NgZone, public dg: LocationAccuracy, public set: SettingsService,
    public cMap: NativeMapContainerService, public lp: LanguageService, public modalCtrl: ModalController,
    public loadingCtrl: LoadingController, private One: OneSignal, public ph: ProfileService, public auth: AuthService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
   
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
