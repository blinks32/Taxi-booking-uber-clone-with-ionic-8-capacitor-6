import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Stripe } from '@ionic-native/stripe/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonicRatingModule } from 'ionic4-rating';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Firebase } from '@ionic-native/firebase/ngx';
import * as firebase from 'firebase';
import { IonicStorageModule } from '@ionic/storage';

export const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXX",
  databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXXX"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [ AppComponent,],
  entryComponents: [],
  imports: [
    IonicRatingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    Vibration,
    HTTP,
    SplashScreen,
    SocialSharing,
    Firebase,
    LocationAccuracy,

    InAppBrowser,
    BrowserTab,
    Camera,
    OneSignal,
    CallNumber,
    Stripe,
    BackgroundMode,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
