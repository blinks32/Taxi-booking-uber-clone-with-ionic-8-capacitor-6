//native modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
// import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { Facebook } from '@ionic-native/facebook';
import { Vibration } from '@ionic-native/vibration';
import { BrowserTab} from '@ionic-native/browser-tab';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as firebase from 'firebase/app'
import { OneSignal} from '@ionic-native/onesignal';
import { Diagnostic } from '@ionic-native/diagnostic';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';
import { Ionic2RatingModule } from 'ionic2-rating';
//other
import { MyApp } from './app.component';

//providers
import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';
import { RatePage } from '../pages/rate/rate';
import { MapContainerProvider } from '../providers/map-container/map-container';
import { GeocoderProvider } from '../providers/geocoder/geocoder';
import { DirectionserviceProvider } from '../providers/directionservice/directionservice';
import { AnimControlProvider } from '../providers/anim-control/anim-control';
import { PopUpProvider } from '../providers/pop-up/pop-up';
import { OnesignalProvider } from '../providers/onesignal/onesignal';
import { NativeMapContainerProvider } from '../providers/native-map-container/native-map-container';

export const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    RatePage,
   

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    IonicStorageModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RatePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    AuthProvider, 
    EventProvider, 
    ProfileProvider,
    // BackgroundGeolocation,
    BrowserTab,
    Geolocation,
    MapContainerProvider,
    Facebook,
    GeocoderProvider,
    DirectionserviceProvider,
    AnimControlProvider,
    PopUpProvider,
    OnesignalProvider,
    OneSignal,
    Diagnostic,
    InAppBrowser,
    CallNumber,
    RatePage,
    NativeMapContainerProvider,
    GoogleMaps,
    Vibration
  ]
})
export class AppModule {}
