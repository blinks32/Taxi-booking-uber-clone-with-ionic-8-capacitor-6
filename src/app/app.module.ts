import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, FacebookAuthProvider, GoogleAuthProvider} from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { Capacitor } from '@capacitor/core';
import { indexedDBLocalPersistence, initializeAuth } from 'firebase/auth';
import { getApp } from 'firebase/app';
import { OtpComponent } from './otp/otp.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { Client} from "@googlemaps/google-maps-services-js";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CountrySearchModalComponent } from './country-search-modal/country-search-modal.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { EnrouteChatComponent } from './enroute-chat/enroute-chat.component';
@NgModule({
  declarations: [AppComponent, OtpComponent, CountrySearchModalComponent, AddCardComponent, AutocompleteComponent, EnrouteChatComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    NgOtpInputModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      if (Capacitor.isNativePlatform()) {
        return initializeAuth(getApp(), {
          persistence: indexedDBLocalPersistence,
        });
      } else {
        return getAuth();
      }
    }),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  GoogleAuthProvider, FacebookAuthProvider, Client],
  bootstrap: [AppComponent],
})
export class AppModule {}
