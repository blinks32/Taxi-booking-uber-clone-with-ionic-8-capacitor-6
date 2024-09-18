import { Component, NgZone } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { AvatarService } from './services/avatar.service';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Auth } from '@angular/fire/auth';
import { Router, NavigationEnd } from '@angular/router';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Payment', url: 'payment', icon: 'card', color: 'primary' },
    { title: 'Promotion', url: 'promotion', icon: 'pricetag', color: 'primary' },
    { title: 'Ride History', url: 'history', icon: 'timer', color: 'primary' },
    { title: 'Support', url: 'support', icon: 'chatbubbles', color: 'primary' },
    { title: 'About', url: 'about', icon: 'information-circle', color: 'primary' },
  ];
  source: string;
  user: import("@angular/fire/auth").User;
  profile: { [x: string]: any; };
  loading: boolean = true; // Add loading state

  constructor(
    private platform: Platform,
    private ngZone: NgZone,
    public avatar: AvatarService,
    private auth: Auth,
    private nav: NavController,
    private router: Router
  ) {
    this.initialize();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended:', event);
      }
    });
  }

  async initialize() {
    this.platform.ready().then(async (readySource: string) => {
      this.source = readySource;
      this.auth.onAuthStateChanged(async (user) => {
        this.user = user;
        console.log('Auth state changed:', user);
        
        if (user) {
          // User is signed in
          console.log('User is signed in:', user);
        } else {
          // User is signed out
          console.log('User is signed out');
        }

        if (readySource != 'dom') {
          await StatusBar.setBackgroundColor({ color: '#3880ff' });
          StatusBar.setStyle({ style: Style.Light });
        }
        await this.LoadSplash();
        this.loading = false; // Set loading to false after initialization
      });

      // await this.initializeOneSignal();
    });
  }

  // private async initializeOneSignal() {
  //   if (this.platform.is('cordova')) {
  //     await OneSignal.initialize('ba7d77ed-1525-416c-9ac5-7b5d36e68740');
      
  //     OneSignal.Notifications.addEventListener('foregroundWillDisplay', (event) => {
  //       this.ngZone.run(() => {
  //         console.log('Notification received in foreground:', event);
  //         // Handle received notification
  //       });
  //     });

  //     OneSignal.Notifications.addEventListener('click', (openedEvent) => {
  //       this.ngZone.run(() => {
  //         console.log('Notification opened:', openedEvent);
  //         // Handle opened notification
  //       });
  //     });

  //     await OneSignal.User.pushSubscription.optIn();
  //   }
  // }

  async LoadSplash() {
    await SplashScreen.show();

    if (this.source != 'dom')
      await StatusBar.setOverlaysWebView({ overlay: true });
  }

  gotoProfile() {
    this.nav.navigateForward('profile');
  }

  gotoPage(p) {
    this.nav.navigateForward(p);
  }
}
