import { Component} from '@angular/core';
import { NavController, MenuController, ModalController, Platform, AlertController, LoadingController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { MapContainerProvider } from '../../providers/map-container/map-container';
import { NativeMapContainerProvider } from '../../providers/native-map-container/native-map-container';
import { ProfileProvider } from '../../providers/profile/profile';
import { AnimControlProvider } from '../../providers/anim-control/anim-control';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { DirectionserviceProvider } from '../../providers/directionservice/directionservice';
import { OnesignalProvider } from '../../providers/onesignal/onesignal';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { AutocompletePage } from '../autocomplete/autocomplete';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';
import { Vibration } from '@ionic-native/vibration';
import { IonicPage } from 'ionic-angular';
import { RatePage } from '../../pages/rate/rate';
import { Diagnostic } from '@ionic-native/diagnostic';
import { StatusBar } from '@ionic-native/status-bar';
declare var google;


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NativeMapContainerProvider, MapContainerProvider, ProfileProvider, AnimControlProvider, PopUpProvider, DirectionserviceProvider, OnesignalProvider, GeocoderProvider ],
})

export class HomePage {
  address: any;
  userProfile: any;
  public location;
  public plate;
  public carType;
  public name;
  public seat;
  public rating;
  public picture;
  public number;
  public canStopCheck: boolean = false;
  public canStop: boolean = false
  public onGpsEnabled: boolean = true;
  public toggleMore: boolean = false;
  userDestName: any;
  returningUser: boolean = false;
  started: boolean = false;
  NotifyTimes: number = -1;
  timerBeforeNotify: number = 30000;
  timeTonotify: any;
  uid: any
  driverLocationName: any;
  startedNavigation: boolean = false;
  destinationSetName: any;
  added: boolean = true;
  lat: any;
  lng: any;
  price: any;
  constructor(public storage: Storage, public stB: StatusBar, public geolocation: Geolocation, public loadingCtrl: LoadingController, private vibration: Vibration, public diagnostic: Diagnostic, public alert: AlertController,  public cMap: NativeMapContainerProvider, private callNumber: CallNumber, public myGcode: GeocoderProvider, public dProvider: DirectionserviceProvider, public platform: Platform, public OneSignal: OnesignalProvider, public modalCtrl: ModalController, public menu: MenuController, public pop: PopUpProvider, public anim: AnimControlProvider, public ph: ProfileProvider, public myMap: MapContainerProvider,  public navCtrl: NavController, public eventProvider: EventProvider) {
  menu.swipeEnable(false, 'menu1');
  this.address = {
    place: ''
  };

}



  ionViewDidLoad(){
   
    if (!this.platform.is('cordova')){
      let centerBar = document.getElementById("onbar")
      centerBar.style.display = 'block'
      let bottomBar1 = document.getElementById("bar2").style.display = 'none'
      }else{
      let centerBar = document.getElementById("onbar")
      centerBar.style.display = 'none'
      let bottomBar1 = document.getElementById("bar2").style.display = 'none'
      }
   
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.navCtrl.setRoot('LoginEntrancePage');
        unsubscribe();
        this.stB.hide(); 
      }else{
        unsubscribe(); 
        this.userProfile = firebase.database().ref(`userProfile/${user.uid}`);
        this.ph.getUserProfile().on('value', userProfileSnapshot => {
        let phone = userProfileSnapshot.val().phoneNumber

        if (phone == null || phone == undefined)
          this.navCtrl.setRoot('PhonePage');
          this.stB.show();
      })
      
      

      this.cMap.loadMap();
      this.WaitForGeolocation();
    }
    });
    
  }



  WaitForGeolocation(){
  //   console.log(this.cMap.lat)
    let location_tracker_loop = setTimeout(()=>{
      if (this.cMap.hasShown){
        clearTimeout(location_tracker_loop)
        this.showMap();
        console.log("connected")
      }else{
       this.WaitForGeolocation()
      }
      }, 1000)
   }

  
   toggleMoreBtn(){
    this.toggleMore = this.toggleMore ? false : true
   }

   callDriver(){
     console.log(this.number);
     window.open("tel:" + this.number);
   }


   sendMessage(){
     let id = this.uid
     this.pop.Send(id)
   }


  showMap(){
    this.lat = this.cMap.lat;
    this.lng = this.cMap.lng;
    this.CheckForPreviousData();
    console.log('woe');
  }


  showAddressModal (selectedBar) {
    clearTimeout(this.cMap.timer1)
    console.log(this.myGcode.locationName)
    let modal = this.modalCtrl.create('AutocompletePage');
    modal.onDidDismiss(data => {
      this.address.place = data;
    if (selectedBar == 1 && data != null){
      if (!this.startedNavigation){
      document.getElementById("location").innerText = data;
      this.myGcode.locationName = data
      this.cMap.RefreshMap(data)
      }
    }
    if (selectedBar == 2 && data != null){
      document.getElementById("destination").innerText = data;
      this.destinationSetName = data
      let myPos = new google.maps.LatLng(this.cMap.lat, this.cMap.lng)
      this.myGcode.geocoder.geocode( { 'address': data}, (results, status) => {
        if (status == 'OK') {
          var position = results[0].geometry.location
          let calPos = new google.maps.LatLng(position.lat(), position.lng())
          if (!this.dProvider.calculateBtn){
            this.dProvider.calcRoute(myPos, calPos, false, true, data)
            console.log(data);
            
             }else{
               console.log(data);
              this.dProvider.calcRoute(myPos, calPos, false, false, data)
          }
        } else {
         // alert('Geocode was not successful for the following reason: ' + status);
        }
      });
      
    }
    });
    modal.present();
  }




  estimate(){
    this.cMap.onDestinatiobarHide = true;
    this.dProvider.calculateBtn = true;
  }



  CheckForPreviousData(){
    this.storage.get('currentUserId').then((value) => {
    if (value != null){
     this.uid = value;
     this.startWaitingForResponse();
     this.hideFunctions();
     this.returningUser = true;
     this.pop.uid = this.uid;
     this.dProvider.id = this.uid;
    }else{
     this.storage.remove(`currentUserId`);
    }

  }).catch(er=>{console.log("error")});
    
  }

  
  pickLocation(){
    let bottomBar1 = document.getElementById("bar2").style.display = 'block'
  }


  hideFunctions(){
    let bottomBar1 = document.getElementById("bar2").style.display = 'none'
    this.cMap.onbar2 = true
   
    let centerBar = document.getElementById("onbar")
    centerBar.style.display = 'none'
   
    document.getElementById("destination").innerHTML = 'Set Destination';
    this.cMap.map.setCameraZoom(6);
    this.startedNavigation = true;
    this.pop.onRequest = true;
    this.cMap.hasRequested = true;
    this.cMap.isCarAvailable = false;
    this.dProvider.calculateBtn = false;
   
    this.ph.getAllDrivers().off("child_added");
    this.ph.getAllDrivers().off("child_changed");
    this.cMap.map.clear();
  }
  
  
  StartListeningForChanges(){
    this.hideFunctions()
    this.returningUser = false;
    var image = this.ph.user.photoURL
    var name = this.ph.user.displayName
    var pay = this.ph.paymentType
    this.pop.calculateBtn = false;
    clearTimeout(this.cMap.timer1)

    if (image == null){
     image = 'https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-10-128.png'
    }
      
    if (name == null){
      name = this.ph.user.email
    }

    if (pay == null){
      pay = 1
    }

    if (this.cMap.lat == null && this.cMap.lng == null){
      var pos = this.cMap.location;
      this.cMap.lng = pos.lng;
      this.cMap.lat = pos.lat;
    }

    this.createUserInformation(name, image, this.cMap.lat, this.cMap.lng, this.myGcode.locationName, pay  );
  }


  cancelRequest(){
  clearTimeout(this.timeTonotify);
  this.NotifyTimes = -1;
  if (this.pop.allowed)
  this.pop.showAlertComplex('Why Do You Want To Cancel?', 'Please Choose An Option', 'Accept', 'Reject', true)
  }


  gotoPayment(){
    this.navCtrl.push('PaymentPage');
  }


  createUserInformation(name: string, picture: any, 
    lat: number, lng: number, locationName: any, payWith: any) {
      this.NotifyTimes++
      let driver_id = this.cMap.car_notificationIds[this.NotifyTimes];
      if (driver_id != null){
      let selected_driver = driver_id.toString();
      console.log(selected_driver);
      this.pop.uid = selected_driver;
      this.dProvider.id = selected_driver;
      this.uid = selected_driver;
      let dest = 'Waiting For Input..';
      if (this.destinationSetName != null){
        dest = this.destinationSetName
      }

    let CustomerRef = firebase.database().ref(`Customer/${selected_driver}`);
    return CustomerRef.child("/client").set({
      Client_username: name,
      Client_location: [lat, lng],
      Client_locationName: locationName,
      Client_paymentForm: payWith,
      Client_picture: picture,
      Client_destinationName: dest,
      Client_CanChargeCard: false,
      Client_PickedUp: false,
      Client_Dropped: false,
      Client_HasRated: false
   
    }).then(suc=>{

        this.CreatePushNotification();
    })
  }else{
    clearTimeout(this.timeTonotify);
    this.pop.clearAll(this.uid, true);
    console.log(this.NotifyTimes);
    this.pop.show('All Our Drivers Are Busy, Please Try Again. Sorry For The Incovenience.')
    this.NotifyTimes = -1;
  }
    
  }


  CreatePushNotification(){
  let current_id = this.cMap.car_notificationIds[this.NotifyTimes]

  if (this.platform.is('cordova'))
  this.OneSignal.sendPush(current_id)

  console.log(this.cMap.car_notificationIds.length, this.NotifyTimes)
  if ( this.NotifyTimes < this.cMap.car_notificationIds.length){
    this.startWaitingForResponse();
    this.timeTonotify = setTimeout(()=>{
      this.ClearInformation()
     }, this.timerBeforeNotify)
  }else{
    clearTimeout(this.timeTonotify)
    this.pop.clearAll(this.uid, true);
    console.log(this.NotifyTimes)
   
  }
  }


  ClearInformation(){
    let customer = firebase.database().ref(`Customer/${this.uid}`);
    customer.remove().then((success) =>{
      this.returningUser = false;
      var image = this.ph.user.photoURL;
      var name = this.ph.user.displayName;
      var pay = this.ph.paymentType;
      this.pop.calculateBtn = false;
  
      if (image == null){
       image = 'https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-10-128.png'
      }
        
      if (name == null){
        name = this.ph.user.email
      }
  
      if (pay == null){
        pay = 1
      }
  
      if (this.cMap.lat == null && this.cMap.lng == null){
        this.cMap.lat = this.lat 
        this.cMap.lng = this.lng
      }
  
      this.createUserInformation(name, image, this.cMap.lat, this.cMap.lng, this.myGcode.locationName, pay);
    })
  }




  startWaitingForResponse(){
    var connectedRef = firebase.database().ref(".info/connected");
    let CustomerRef = firebase.database().ref(`Customer/${this.uid}/`);
    let connect_change = true
    let picked_up = true
    let dropped = true
    let rated = true
    clearTimeout(this.cMap.timer1)
    CustomerRef.on('child_added', customerSnapshot => {
 
    if (this.returningUser){
     if (customerSnapshot.val().Driver_location){
      this.presentRouteLoader('Waiting...');
      this.vibration.vibrate(1000);
      this.DriverFound(customerSnapshot.val().Driver_location,
      customerSnapshot.val().Driver_plate, 
      customerSnapshot.val().Driver_carType,
      customerSnapshot.val().Driver_name, 
      customerSnapshot.val().Driver_seat,
      customerSnapshot.val().Driver_locationName, 
      customerSnapshot.val().Driver_rating, 
      customerSnapshot.val().Driver_picture, 
      customerSnapshot.val().Driver_number,
      customerSnapshot.val().Client_locationName,
      customerSnapshot.val().Client_location[0],
      customerSnapshot.val().Client_location[1]

      
     );

     this.cMap.onDestinatiobarHide = true;

    //  if (customerSnapshot.val().Client_PickedUp && picked_up){
    //   picked_up = false
    //   document.getElementById("header").innerHTML = "Your Journey Has Started.";
    //   document.getElementById("header").style.textAlign = 'center';
    //   document.getElementById("header").style.fontSize = "1.34em";

    //  } else if (customerSnapshot.val().Client_Dropped && dropped){
    //   dropped = false
    //   document.getElementById("header").innerHTML = "Your Journey Has Started.";
    //   document.getElementById("header").style.textAlign = 'center';
    //   document.getElementById("header").style.fontSize = "1.34em";

    //  } else if (!customerSnapshot.val().Client_HasRated && rated){
    //   if (this.ph.paymentType != 1){
    //     console.log(this.ph.card, this.ph.month, this.ph.cvc, this.ph.year, customerSnapshot.val().Client_price, this.ph.email)
    //    this.price = customerSnapshot.val().Client_price
    //    this.showPayAlert(this.price)
    //    } else{
    //     this.showPayCash('Pay NGN ' + customerSnapshot.val().Client_price + ' To This Driver.')
    //    }
    //    rated = false
    //   }

     
    }

    let driverPos = new google.maps.LatLng(customerSnapshot.val().Driver_location[0], customerSnapshot.val().Driver_location[1])
    let userPos = new google.maps.LatLng(customerSnapshot.val().Client_location[0], customerSnapshot.val().Client_location[1])
    this.dProvider.calcRoute(userPos, driverPos, true, false, 'ghjtfd')
}
    });



    
    
    CustomerRef.on('child_changed', customerSnapshot => {
      
    if (customerSnapshot.val().Client_PickedUp && picked_up){
      this.presentRouteLoader('Waiting...');
      clearInterval(this.cMap.detectCarChange);
      this.cMap.toggleBtn = false;
      document.getElementById("header").innerText = "Your Journey Has Started.";
      this.toggleMore = true;
      if ( customerSnapshot.val().Client_price == null){
        this.presentRouteLoader('Waiting...');
        this.cMap.toggleBtn = false;
        this.toggleMore = true;
        picked_up = false;
        this.pop.showAlert("Please Add Your Destination", 'We Need This To Process Your Charge');
      }
    }
  
    if (customerSnapshot.val().Client_Dropped && dropped){
      this.presentRouteLoader('Waiting...')
      document.getElementById("header").innerText = "Your Journey Has Ended.";
      if (!customerSnapshot.val().Client_CanChargeCard){
       this.pop.dropoff(this.uid);
       this.ph.uid = this.uid
       dropped = false;
      }
    }

    if (customerSnapshot.val().Client_CanChargeCard){
      this.presentRouteLoader('Waiting...');
      
      if (!customerSnapshot.val().Client_HasRated && rated){
      if (this.ph.card != null){
        console.log(this.ph.card, this.ph.month, this.ph.cvc, this.ph.year, customerSnapshot.val().Client_price, this.ph.email)
       this.price = customerSnapshot.val().Client_price
       this.showPayAlert(this.price)
       } else{
        this.showPayCash('Pay NGN ' + customerSnapshot.val().Client_price + ' To This Driver.')
       }
       rated = false
      }
    }

    if (connect_change){
      this.presentRouteLoader('Waiting...')
      
      this.vibration.vibrate(1000);
      connect_change = false
      this.pop.uid = this.uid
      this.DriverFound(customerSnapshot.val().Driver_location,
      customerSnapshot.val().Driver_plate, 
      customerSnapshot.val().Driver_carType,
      customerSnapshot.val().Driver_name, 
      customerSnapshot.val().Driver_seat,
      customerSnapshot.val().Driver_locationName, 
      customerSnapshot.val().Driver_rating, 
      customerSnapshot.val().Driver_picture, 
      customerSnapshot.val().Driver_number,
      customerSnapshot.val().Client_locationName,
      customerSnapshot.val().Client_location[0],
      customerSnapshot.val().Client_location[1]
     )

     this.storage.set(`currentUserId`, this.uid)
     this.cMap.onDestinatiobarHide = true;

    }

    this.userDestName = customerSnapshot.val().Client_destinationName;
    this.dProvider.name =  customerSnapshot.val().Driver_name;
    this.number = customerSnapshot.val().Driver_number
    this.pop.uid = this.uid
    if (customerSnapshot.val().Client_HasRated){
      this.presentRouteLoader('Waiting...')
      
       this.pop.clearAll(this.uid, true);
    
    }
     

     this.cMap.D_lat = customerSnapshot.val().Driver_location[0]
     this.cMap.D_lng = customerSnapshot.val().Driver_location[1]
     let userPos = new google.maps.LatLng(customerSnapshot.val().Client_location[0], customerSnapshot.val().Client_location[1])
     let driverPos = new google.maps.LatLng(customerSnapshot.val().Driver_location[0], customerSnapshot.val().Driver_location[1])
     console.log(this.myGcode.locationName, customerSnapshot.val().Driver_locationName)
     this.driverLocationName = customerSnapshot.val().Driver_locationName
     this.dProvider.calcRoute(userPos, driverPos, true, false, 'wertyrw')
    
    });

    CustomerRef.on('child_removed', customerSnapshot => {
      clearInterval(this.cMap.detectCarChange);
      CustomerRef.off('child_added');
      CustomerRef.off('child_changed');
      CustomerRef.off('child_removed');
      connectedRef.off('value');
      this.startedNavigation = false;
      this.storage.remove(`currentUserId`);
      connect_change = true;
     });


    
     connectedRef.on("value", (snap) => {
       if (snap.val() === true) {
         this.eventProvider.UpdateNetworkSate(true, this.uid);
       } else {
       // this.pop.showPimp("Connection Lost!. Please connect to the Internet.");
        this.eventProvider.UpdateNetworkSate(false, this.uid);
       }
     });

  }



  showPayCash(title ){
    let alert = this.alert.create({
      title: title,
      subTitle: "Please Setup Your Card Payment",
      buttons: [ {
        text: "Okay",
        role: 'cancel',
        handler: () => {
          this.navCtrl.push(RatePage, { 'eventId': this.uid });
        }
      },],
      enableBackdropDismiss: false 
    });
    alert.present();
  }



   hideFunctionsOnDriverFound()
   {
    this.cMap.onbar2 = false
    this.cMap.onbar3 = true
  
    this.cMap.toggleBtn = true;
    this.cMap.onPointerHide = true;
   
    this.cMap.car_notificationIds = [];
    clearTimeout(this.timeTonotify)
    this.NotifyTimes = -1
   }  



   DriverFound(location, plate, carType, name, seat, locationName, rating, picture, number, userPos, client_lat, client_lng): Promise <any>{
    this.location = location; this.plate = plate; this.carType = carType; this.name = name; this.seat = seat; this.rating = rating; this.picture = picture;
  
    this.hideFunctionsOnDriverFound();
    
    this.cMap.lat = client_lat; 
    this.cMap.lng = client_lng;
   
       
    //this.calcRoute(userPos, locationName)
    

    this.cMap.D_lat = location[0]
    this.cMap.D_lng = location[1]
   
   // this.cMap.moveDriver(this.cMap.D_lat, this.cMap.D_lng);
   
    this.cMap.setMarkers(location, this.uid)
    return
    }
  

   ChargeCard(card, month, cvc, year, amount, email){
    let loading = this.loadingCtrl.create({
      content: 'Processing Charge...'
    });
  
    loading.present();
        this.platform.ready().then(() => {
          if (this.platform.is('cordova')) {
          // Now safe to use device APIs
          (<any>window).window.PaystackPlugin.chargeCard(
            (resp) =>{
              loading.dismiss();
              //this.pop.showPayMentAlert("Payment Was Successful", "We will Now Refund Your Balance");
              console.log('charge successful: ', resp);
              this.navCtrl.push(RatePage, { 'eventId': this.uid });
            },
            (resp) =>{
              loading.dismiss();
              this.showPayMentErrorAlert('We Encountered An Error While Charging Your Card Pay Cash Of NGN ' + this.price )
            },
            {
              cardNumber: card, 
              expiryMonth: month, 
              expiryYear: year, 
              cvc: cvc,
              email: email,
              amountInKobo: amount,
          });
        }else{
         
        }
      })
  
  
  }

  
 
  showPayAlert(price){
    let alert = this.alert.create({
      title: 'Charge For This Trip is ' + price,
      subTitle: 'From ' + this.myGcode.locationName + ' To ' + this.userDestName + ' at 72NGN per KM.',
      buttons: [ 
        {
          text: "Checkout",
          handler: () => {
   
          this.ChargeCard(this.ph.card, this.ph.month, this.ph.cvc, this.ph.year, price*100,  this.ph.email)
            
          }
      },],
      enableBackdropDismiss: false 
    });
    alert.present();
  }



 showPayMentErrorAlert(title){
  let alert = this.alert.create({
    title: title,
    subTitle: "",
    buttons: [ 
      {
        text: "Okay",
        handler: () => {
 
          this.navCtrl.push(RatePage, { 'eventId': this.uid });
 
        }
    },],
    enableBackdropDismiss: false 
  });
  alert.present();
}


  

presentRouteLoader(message) {
  let loading = this.loadingCtrl.create({
    content: message
  });

  loading.present();

  let myInterval = setInterval(() => {
    loading.dismiss();
 
    clearInterval(myInterval)
    
  }, 500);
}


}
