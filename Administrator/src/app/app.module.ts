import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule }   from '@angular/forms';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { FeedbackDriverComponent } from './feedback-driver/feedback-driver.component';
import { FeedbackUserComponent } from './feedback-user/feedback-user.component';
// components
import { AppComponent } from './app.component';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { DriversComponent } from './drivers/drivers.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { DriversWaitingComponent } from './drivers-waiting/drivers-waiting.component';
import { LoginComponent } from './login/login.component';
import { ControlService } from './services/control.service';
import { EmailService } from './services/email.service';
import { AuthserviceService } from './services/authservice.service';
import { ProfileService } from './services/profile.service';
import { UploadServiceService } from './services/upload-service.service';
import { ChangeCodeComponent } from './change-code/change-code.component';
import { AdditemComponent } from './additem/additem.component';
import { MoreitemComponent } from './moreitem/moreitem.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DriverwaitingDetailsComponent } from './driverwaiting-details/driverwaiting-details.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXX",
  databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXX"
};



export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'driver', component : DriversComponent },
  { path: 'driver_details', component : DriverDetailsComponent },
  { path: 'client_details', component : ClientDetailsComponent },
  { path: 'additem', component : AdditemComponent },
  { path: 'moreitem', component : MoreitemComponent },
  { path: 'home', component: HomeComponent },

  { path: 'feed_driver', component : FeedbackDriverComponent },
  { path: 'feed_user', component : FeedbackUserComponent },
  { path: 'feed', component: FeedbacksComponent },

  { path: 'driver_pending', component: DriversWaitingComponent },
  { path: 'driver_pending_details', component: DriverwaitingDetailsComponent },
  { path: 'client', component: ClientsComponent },
  { path: 'change_code', component: ChangeCodeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    ClientsComponent,
    HomeComponent,
    DriversWaitingComponent,
    NgDropFilesDirective,
    DialogComponent,
    LoginComponent,
    ChangeCodeComponent,
    AdditemComponent,
    MoreitemComponent,
    DriverDetailsComponent,
    DriverwaitingDetailsComponent,
    ClientDetailsComponent,
    FeedbackDriverComponent,
    FeedbackUserComponent,
    FeedbacksComponent
    //AppModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {useHash : true}),
  ],
  providers: [ControlService, FormBuilder, AuthserviceService, UploadServiceService, EmailService, ProfileService],
  bootstrap: [AppComponent],
  entryComponents: [ DialogComponent, ]
})
export class AppModule { }
