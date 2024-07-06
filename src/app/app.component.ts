import { Component, NgZone } from '@angular/core';
import { NavController, Platform, IonicModule } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { AvatarService } from './services/avatar.service';
import { StatusBar, Style } from '@capacitor/status-bar';
import { timer } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { App } from '@capacitor/app';


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
  constructor(public avatar: AvatarService, private auth: Auth, private platform: Platform, private nav: NavController) {
    this.initialize()

  }

  async initialize() {

    this.platform.ready().then(async (readySource) => {
      this.initializeBackButtonCustomHandler();
      this.auth.onAuthStateChanged(async (user)=>{
      this.user = user;
      console.log(user);

      
      this.source = readySource
     
      if (readySource != 'dom'){
      await StatusBar.setBackgroundColor({color: '#3880ff'})
      }
      await this.LoadSplash();
      

    })

    

      });
  }

  initializeBackButtonCustomHandler(): void {
    App.addListener('backButton', ({ canGoBack }) => {
      if (!canGoBack) {
        if (confirm('Are you sure you want to exit the app?')) {
          App.exitApp();
        }
      } else {
        window.history.back();
      }
    });
  }

  async LoadSplash(){
    await SplashScreen.show();

    if (this.source != 'dom')
    await StatusBar.setOverlaysWebView({ overlay: true });

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
 
     this.toggleDarkTheme(prefersDark.matches);

     if (this.source != 'dom')
    await StatusBar.setOverlaysWebView({ overlay: true });
  }


  toggleDarkTheme(shouldAdd) {
    if (shouldAdd){
      StatusBar.setStyle({ style: Style.Dark });
    }else{
     StatusBar.setStyle({ style: Style.Light });
    }
  }

  gotoProfile(){
    this.nav.navigateForward('profile');
  }

  gotoPage(p){
    this.nav.navigateForward(p);
  }

  

}
