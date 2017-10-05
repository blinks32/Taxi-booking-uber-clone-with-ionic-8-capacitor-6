import { Injectable, ViewChild, Injector} from '@angular/core';
import { AlertController, ModalController, LoadingController, Loading, NavController } from 'ionic-angular';
import { NativeMapContainerProvider } from '../../providers/native-map-container/native-map-container';
import { ProfileProvider } from '../../providers/profile/profile';
import { AnimControlProvider } from '../../providers/anim-control/anim-control';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { RatePage } from '../../pages/rate/rate';
/*
  Generated class for the PopUpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PopUpProvider {
  public onRequest: boolean = false;
  public mapComponent: any;
  public canDismiss: boolean = false;
  public calculateBtn: boolean = false;
  public price: number;
  public allowed: boolean = true;
  public uid: any;

  constructor( protected injector: Injector, public storage: Storage, public cMap: NativeMapContainerProvider,  public alert: AlertController, public ph: ProfileProvider, public load: LoadingController, public anim: AnimControlProvider) {
   
  }
   
  get navCtrl(): NavController {
    return this.injector.get(NavController);
  }

showAlertNormal(title, subtitle, network){
  let alert = this.alert.create({
    title: title,
    subTitle: subtitle,
    buttons: [ {
      text: "Try Again",
      role: 'cancel',
      handler: () => {
        if (network){
          this.clearAll(this.uid, true);
          }
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}


showAlert(title, subtitle){
  let alert = this.alert.create({
    title: title,
    subTitle: subtitle,
    buttons: [ {
      text: "Okay",
      role: 'cancel',
      handler: () => {
      
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}


pickup(){
  let alert = this.alert.create({
    title: "Have You Been Picked Up?",
    subTitle: "",
    buttons: [ {
      text: "No",
      role: 'cancel',
      handler: () => {
        this.ph.ApprovePickup(false, this.uid)
      }
    },
    {
      text: "Yes",
      handler: () => {
        this.ph.ApprovePickup(false, this.uid)
        this.allowed = false
       //picked up true, disable cancel of navigation
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}

dropoff(uid){
  let alert = this.alert.create({
    title: "Have You Arrived At Your Destination ?",
    subTitle: "",
    buttons: [ 
    {
      text: "Yes",
      handler: () => {
        this.ph.CanCharge(true, uid);
      //  this.ph.ApproveDrop(false, uid);
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}




showPayMentAlert(title, subtitle, canLeave ){
  let alert = this.alert.create({
    title: title,
    subTitle: subtitle,
    buttons: [ {
      text: "Okay",
      role: 'cancel',
      handler: () => {
       if (canLeave){
        this.navCtrl.push(RatePage);
       }
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}



showPomp(title, message ){
  let alert = this.alert.create({
    title: title,
    subTitle: message,
    buttons: [ {
      text: "Okay",
      role: 'cancel',
      handler: () => {
        this.clearAll(this.uid, true);
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}


showPimp(title ){
  let alert = this.alert.create({
    title: title,
    buttons: [ {
      text: "Okay",
      role: 'cancel',
      handler: () => {
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}



show(title ){
  let alert = this.alert.create({
    title: title,
    buttons: [ {
      text: "Okay",
      role: 'cancel',
      handler: () => {
        document.getElementById("destination").innerHTML = "Set A Closer Destination";
      }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}




Send(id) {
  let alert = this.alert.create({
    title: 'Write Your Short Message',
    inputs: [
      {
        name: 'message',
        placeholder: 'Message'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {    
         
        }
      },
      {
        text: 'Send',
        handler: data => {
          this.ph.SendMessage(data.message, id)
        }
      }
    ]
  });
  alert.present();
}



showEstimateAlert(title, subtitle){
  let alert = this.alert.create({
    title: title,
    subTitle: subtitle,
    buttons: [ {
      text: "OK",
      role: 'cancel',
      handler: () => {
        this.cMap.onDestinatiobarHide = false;
        this.calculateBtn = false;
        document.getElementById("destination").innerHTML = "Set Destination";
      }
    },],
    // enableBackdropDismiss: false 
  });
  
  alert.present();
}



GotoPage(){
  this.navCtrl.push(RatePage);
}

clearAll(uid, can){
  console.log(uid)
  let customer = firebase.database().ref(`Customer/${uid}`);
  customer.remove().then((success) =>{
    // this.cMap.toggleFlipAnim('flipped');
    // this.cMap.toggleFadeAnim('invisible');
    // this.cMap.toggleBounceAnim("out");
    this.cMap.onbar2 = false
    this.cMap.onbar3 = false
    this.cMap.isNavigate = false;
    this.cMap.map.clear().then(s=>{
      this.cMap.Reset();
      this.presentRouteLoader("Cancelling..."); 
    });
    //this.cMap.element = this.mapComponent
    this.cMap.hasRequested = false;
    this.onRequest = false;
    this.cMap.toggleBtn = false;
    this.cMap.onPointerHide = false;
    this.cMap.onDestinatiobarHide = false;
    this.allowed = true;
    this.cMap.map.setClickable(true);
    document.getElementById("header").innerHTML = "Confirmation";
    document.getElementById("header").style.textAlign = 'center';
    document.getElementById("header").style.fontSize = "1.34em";
    //this.cMap.map.setOptions({draggable: true});
    this.cMap.isCarAvailable = true;
    this.cMap.car_notificationIds = [];
    this.canDismiss = true
    this.storage.remove(`currentUserId`);
    this.cMap.cars = [];
  }).catch((error)=>{
   // this.showAlertNormal("Network Error", "please make sure you have a strong network and try Again", false)
  })
  if (can)
  document.getElementById("destination").innerHTML = 'Set Destination';
}


locatePosition(lat, lng){
 // this.cMap.map.setCenter(lat, lng);
}



presentRouteLoader(message) {
  let loading = this.load.create({
    content: message
  });

  loading.present();

  let myInterval = setInterval(() => {
  if (this.canDismiss){
    loading.dismiss();
    clearInterval(myInterval)
  }
    
  }, 1000);
}


showAlertComplex(title, message, accept, reject, iscancel){
  let alert = this.alert.create({
    title: title,
    message: message,
    inputs: [
      {
        name: 'long',
        label: 'Long Pickup',
        type: "checkbox",
        value: "true",
        checked: false
      },
      {
        name: 'incorrect',
        label: 'Incorrect Request',
        type: "checkbox",
        value: "false",
        checked: false
      }
    ],
    buttons: [
      {
        text: reject,
        role: 'cancel',
        handler: () => {
          
        }
      },
      {
        text: accept,
        handler: () => {
          if (iscancel){
            this.clearAll(this.uid, true);
          }
        }
      }
    ],
    enableBackdropDismiss: false 
  });
  alert.present();
}
  
}
