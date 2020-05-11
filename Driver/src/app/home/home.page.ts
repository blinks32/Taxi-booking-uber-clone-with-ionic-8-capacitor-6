import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform, ModalController, LoadingController, Events } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { timer } from 'rxjs';
import { interval } from 'rxjs';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  LatLngBounds,
  LatLng
} from '@ionic-native/google-maps';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { SettingsService } from '../services/settings.service';
import { LocationTrackerService } from '../services/location-tracker.service';
import { DirectionserviceService } from '../services/directionservice.service';
import { OnesignalService } from '../services/onesignal.service';
import { LanguageService } from '../services/language.service';
import { GeocoderService } from '../services/geocoder.service';
import { PopUpService } from '../services/pop-up.service';
import { EventService } from '../services/event.service';
import { ProfileService } from '../services/profile.service';
import { NewsPage } from '../pages/news/news.page';
import { ChatPage } from '../pages/chat/chat.page';
import { PaymentpagePage } from '../pages/paymentpage/paymentpage.page';
import { AcceptPage } from '../pages/accept/accept.page';
declare var google;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  map: any;
  address: any;
  userProfile: any;
  paymentType: any;
  userProfileRefer: firebase.database.Reference;

  // tslint:disable-next-line: variable-name
  notification_Id: any;
  public toggleMore = false;
  // tslint:disable-next-line: new-parens
  public geocoder: any = new google.maps.Geocoder;
  gpsIson = false;
  public hideMe = false;
  public marker: any;
  public name2;
  public picture2;
  public location2;
  public destination2;
  public rating2;
  public hasArrived = false;
  public ratingText2;
  public poolRequest = false;
  public message2: any;
  public urPos2: any;
  public driverLoc2: any;
  // tslint:disable-next-line: variable-name
  hasAdded_Destination2 = false;
  hasPooled = true;
  poolEnd = true;
  name: any;
  watchId: any;
  hasDone = true;
  timeOut: any;
  lat: any;
  isBlocked = false;
  urPos: any;
  canLoad = true;
  lng: any;
  myAlert: any;
  timer: any;
  location: any;
  doneK = true;
  picture: any;
  canDO = true;
  destination: any;
  returningUser = true;
  NotifyTimes = -1;
  timerBeforeNotify = 2000;
  timeTonotify: any;
  mapSection = false;
  toggleButtons = false;
  moreText = 'Hide All';
  moreIcon: any = 'ios-arrow-up';
  canShowOther = false;
  public hasNotPicked = true;
  public hasNotPicked2 = true;
  public customerPhone: any;
  public customerPhone2: any;
  public hasPooled2 = true;
  hideNews = false;
  userLat: any;
  userLat2: any;
  notification = false;
  numSchedule: any;
  mapFalse = false;
  userLng: any;
  userLng2: any;
  driverLoc: any;
  connected = false;
  toggleStatus = false;
  // tslint:disable-next-line: variable-name
  notify_ID: any;
  userHasPhone = false;
  // tslint:disable-next-line: variable-name
  hasAdded_Destination = false;
  message: string;
  cartype: any;
  earnings: any;
  canEnd2 = true;
  public connect = false;
  canEnd = true;
  callback: any;
  public rating: any = 0;
  public ratingText: any = 'Cool';
  appReady = false;
  public hasSent = false;
  public canStopCheck = false;
  public canStop = false;
  isNetwork = true;
  greut = true;
  public called = true;
  customerID: any;
  public showGps = false;
  public hasEnded = true;
  public called2 = true;
  // tslint:disable-next-line: variable-name
  public called_2 = true;
  public news: any;
  public itsOver = true;
  // tslint:disable-next-line: variable-name
  public called_22 = true;
  public ridePrice: any;
  public newsti: any;
  public tacktime = true;
  public dropped = true;
  public dropped2 = true;
  cliet = true;
  public clientClrCheck = false;
  public PoolClrCheck = false;
  public done = true;
  public hasNotFoundMap = true;
  showPassenger2 = false;
  public scheduleList: Array<any>;
  public eventList: Array<any>;
  // tslint:disable-next-line: variable-name
  c_picked = true;
  // tslint:disable-next-line: variable-name
  c_dropped = true;
  // tslint:disable-next-line: variable-name
  c_ended = true;
  // tslint:disable-next-line: variable-name
  c_added = true;
  // tslint:disable-next-line: variable-name
  c_complete = true;
  mysheet: any;
  data: any;
  tracker: any;
  isInBooking = true;
  watchPositionSubscription: Geolocation;
  mapTracker: any;
  canListen = true;
  isPassengerCleared = true;
  // tslint:disable-next-line: variable-name
  passenger_Lat: any;
  // tslint:disable-next-line: variable-name
  passenger_Lng: any;
  hasG = true;
  isPickedDone = false;
  canStart = false;
  isUser = true;
  // tslint:disable-next-line: variable-name
  rating_positive: any = 0;
  // tslint:disable-next-line: variable-name
  rating_negative: any = 0;
  zoner = false;
  uid: any;
  constructor(private callNumber: CallNumber, private vibration: Vibration,
    private googleMaps: GoogleMaps, public lp: LanguageService, public modalCtrl: ModalController,
    public storage: Storage, public settings: SettingsService,
    private backgroundMode: BackgroundMode, public One: OneSignal,
    public statusBar: StatusBar, public loadingCtrl: LoadingController,
    public locationTracker: LocationTrackerService, public myGcode: GeocoderService,
    public dProvider: DirectionserviceService, public platform: Platform,
    // tslint:disable-next-line: no-shadowed-variable
    public OneSignal: OnesignalService, public alert: AlertController, public pop: PopUpService,
    public ph: ProfileService, public navCtrl: NavController, public eventProvider: EventService) {
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.ph.getUserProfile().once('value', us => {
      if (us.val().favoriteSeek) {

      }
      if (us.val().isOffline != null) {
        if (us.val().isOffline) {
          this.isBlocked = true;
          this.pop.loggedOff = true;
          console.log('The user is offline');
          this.pop.presentToast('You Are Offline, Will not recieve any jobs.');
        } else {
          this.isBlocked = false;
          console.log('The user is online');
        }
      }

      if (us.val().zone_lat) {
        this.isBlocked = true;
        this.ph.InActiveState();
        console.log('zoned');
        this.zoner = true;
        this.OneSignal.UpdateInfo(us.val().zone_lat, us.val().zone_lng, this.ph.carType);
      }
      this.ph.getUserProfile().off('value');
    });


    this.eventProvider.getUserProfiler().on('value', userProfileSnapshot => {
      console.log(userProfileSnapshot.val().userInfo);
      if (userProfileSnapshot.val().userInfo.rating_positive && userProfileSnapshot.val().userInfo.rating_negative) {
        this.rating_positive = userProfileSnapshot.val().userInfo.rating_positive;
        this.rating_negative = userProfileSnapshot.val().userInfo.rating_negative;
        this.ph.getUserProfile().off('child_added');
      }
    });

    if (this.platform.is('cordova')) {

      this.NowWaitingForID();
      console.log('fsfsfhjfshjhjfsfs');
      this.showLoadRefresh();
      this.locationTracker.loadMap();

    } else {

      this.locationTracker.hasShown = true;
      this.NowWaitingForID();

      this.showLoadRefresh();

      this.loadMapGoogle(this.locationTracker.lat, this.locationTracker.lng);
    }



    if (this.locationTracker.goto_passenger_watcher) {
      this.locationTracker.watchPositionSubscription.clearWatch(this.locationTracker.goto_passenger_watcher);
    }
    if (this.isInBooking) {
      this.platform.ready().then(() => {
        if (!this.platform.is('cordova')) {
          this.notify_ID = '43cd6829-4651-4039-bbc3-aace7fbe7d72';
          this.locationTracker.notifID = this.notify_ID;
          this.OneSignal.notif_id = this.notify_ID;
        } else {
          this.One.getIds().then(success => {
            this.notify_ID = success.userId;
            this.OneSignal.notif_id = success.userId;
            this.locationTracker.notifID = this.notify_ID;
          });
        }
        this.notify_ID = '43cd6829-4651-4039-bbc3-aace7fbe7d72';
        console.log('did enter');

        if (!this.platform.is('cordova')) {
          this.locationTracker.lat = 5.4975394;
          this.locationTracker.lng = 7.5029374;
        }

        if (this.appReady && this.locationTracker.lat !== 0) {
          console.log(this.settings.current_ID);
          if (!this.platform.is('cordova')) {
            if (this.hasEnded) {
              console.log('Updating car on database.');
            }
          }
          if (this.platform.is('cordova')) {

            if (this.hasEnded) {
              this.platform.backButton.subscribe(() => this.platform.pause);
              this.platform.backButton.subscribe(() => {
                // tslint:disable-next-line: no-string-literal
                navigator['app'].exitApp();
              });
            }

            if (this.settings.current_ID) {
              this.showLoadRefresh();
              this.notify_ID = this.settings.id;
              console.log('scheduling activated');
            }

          } else {
            if (this.settings.current_ID) {
              this.showLoadRefresh();
              this.notify_ID = this.settings.id;
              console.log('scheduling activated');
            }

          }
        }

      });
    }

  }



  RemoveZones() {
    this.ph.userProfile.child('zone_lat').remove();
    this.ph.userProfile.child('zone_lng').remove();

    this.ph.ActiveState().then(() => {
      this.pop.showPimp('Restart The App To Use Normal Mode.');
    });
  }







  async showMe(name, id) {
    const alert = await this.alert.create({
      header: name + ' Wants To Add You As A Favorite.',
      buttons: [{
        text: 'Yes',
        role: 'cancel',
        handler: () => {
          this.ph.doShit();
        }
      },
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          this.ph.RejectFavorite(id);
        }
      },
      ],
      backdropDismiss: true
    });
    alert.present();
  }




  toggleMapFalse() {
    this.mapFalse = this.mapFalse ? false : true;
  }

  async openNews() {
    const mod = await this.modalCtrl.create({
      component: NewsPage
    });
    mod.present();
    mod.onDidDismiss()
      .then(() => {
        this.hideNews = true;
        this.storage.set(`News`, this.news);
      });
  }


  togglePassengers() {
    this.showPassenger2 = this.showPassenger2 ? false : true;
    console.log('Now Toggling');
    // this.poolRequest = this.poolRequest ? false : true
  }


  gotoSupport() {
    this.navCtrl.navigateRoot('support');
    this.platform.backButton.subscribe(() => this.navCtrl.navigateBack('home'));
  }


  hoseMe() {
    this.hideMe = this.hideMe ? false : true;
  }

  showMoreRating() {
    this.pop.showPimp(this.ratingText);
  }

  showMoreMessage() {
    this.pop.showPimp(this.message);
  }


  gotoScheduled() {
    this.platform.backButton.subscribe(() => this.navCtrl.navigateBack('home'));
    // tslint:disable-next-line: max-line-length
    this.navCtrl.navigateRoot(['schedule', { lat: this.locationTracker.lat, lng: this.locationTracker.lng, notif: this.notify_ID }]); // Push your "OtherPage"
  }



  loadMapGoogle(lat, lng) {
    // tslint:disable-next-line: prefer-const
    let latLng = new google.maps.LatLng(lat, lng);

    // tslint:disable-next-line: prefer-const
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false
    };

    console.log('map called');

  }

  NowWaitingForID() {

    // tslint:disable-next-line: variable-name
    const location_locationTracker_loop = interval(3000).subscribe(() => {
      console.log('shfhfhsj');
      //   this.watchPositionSubscription.clearWatch(this.mapTracker)
      if (this.locationTracker.hasShown) {
        console.log('shfhfhsj');
        location_locationTracker_loop.unsubscribe();

        console.log('shfhfhsj');


        console.log(this.locationTracker.lng);
        // this.CheckForPreviousData();
        this.showGps = false;
        this.locationTracker.mapLoadComplete = true;
        this.toggleStatus = true;

        this.hasNotFoundMap = false;


        if (!this.isBlocked) {
          this.Register();
        }
      } else {
        this.NowWaitingForID();
        location_locationTracker_loop.unsubscribe();
      }


    });





  }
  Register() {
    this.pop.loggedOff = false;
    this.StartTracker();
    if (this.platform.is('cordova')) {
      // this.WaitForNotificationID();
      this.StartListeningForChanges(this.notify_ID);
    } else {
      this.StartListeningForChanges(this.notify_ID);
      console.log('waiting.....');
    }
    this.appReady = true;
    this.pop.presentToast('Now Online');
    console.log('connected');
    this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.ph.carType);
    this.myGcode.Reverse_Geocode(this.locationTracker.lat, this.locationTracker.lng, this.locationTracker.map1, false);
  }


  StartTracker() {

    console.log('start tracking..........');
    this.watchPositionSubscription = navigator.geolocation;
    this.mapTracker = this.watchPositionSubscription.watchPosition((position) => {
      console.log('position callback', position);
      // reset route points
      if (this.locationTracker.marker) {
        this.locationTracker.marker.setPosition(new LatLng(position.coords.latitude, position.coords.longitude));

        this.OneSignal.UpdateInfo(position.coords.latitude, position.coords.longitude, this.ph.carType);
        this.locationTracker.map1.moveCamera({
          target: new LatLng(position.coords.latitude, position.coords.longitude),
          zoom: 15,
          tilt: 0,
          bearing: 0,
          duration: 500
        });
      }

      console.log('Updating Your Location ....');

    }, (error) => {
      console.log(error);
    }, {
      enableHighAccuracy: true
    });

  }


  gotoProfile() {
    this.navCtrl.navigateRoot('profile');
    this.platform.backButton.subscribe(() => this.navCtrl.navigateBack('home'));
  }

  gotoEarnings() {
    this.navCtrl.navigateRoot('payment');
    this.platform.backButton.subscribe(() => this.navCtrl.navigateBack('home'));
  }

  async SendMessage() {
    const modal = await this.modalCtrl.create({
      component: ChatPage,
      componentProps: { id: this.notify_ID }
    });
    modal.present();
    modal.onDidDismiss()
      .then(() => {
        this.notification = false;
      });
  }


  gotoHistory() {
    this.navCtrl.navigateRoot('history');
    this.platform.backButton.subscribe(() => this.navCtrl.navigateBack('home'));
  }


  goOnline() {
    if (this.locationTracker.lat !== 0) {
      if (this.isBlocked) {
        this.Register();
        this.ph.ActiveState();
        this.pop.loggedOff = false;
        this.pop.presentToast(this.lp.translate()[0].e5);
        // this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.ph.carType);

      } else {
        this.pop.loggedOff = false;
        this.pop.presentToast(this.lp.translate()[0].e5);
        this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.ph.carType);

      }
    } else {
      this.pop.alertMe('No latitude and Longitude On Your Device. Are You running on an emulator?');
    }

    if (this.zoner) {
      this.RemoveZones();
    }

  }



  goOffline() {
    this.pop.GoOffline();
    this.watchPositionSubscription.clearWatch(this.mapTracker);
    this.pop.loggedOff = true;
    this.ph.InActiveState();
  }


  call() {
    window.open('tel:' + this.customerPhone);
  }


  clearConnection() {
    const customer = firebase.database().ref(`Customer/${this.notify_ID}`);
    customer.remove().then((success) => {
      this.pop.hasPicked = false;
      this.hasNotPicked = true;
      this.isPickedDone = false;
    });
  }

  //  showHelp(){
  //    this.pop.alertMe('PLEASE MAKE SURE YOU HAVE GOOGLE MAPS INSTALLED ON YOUR DEVICE. Click on start navigation, to drive to client. ')
  //  }


  async alertMe() {
    const alert = await this.alert.create({
      header: 'Are Sure You Want Cancel This Job?',
      buttons: [{
        text: 'Yes',
        role: 'cancel',
        handler: () => {
          this.HideFunk();
        }
      },
      {
        text: 'No',
        role: 'cancel',
        handler: () => {

        }
      },
      ],
      backdropDismiss: true
    });
    alert.present();
  }


  Arrived() {
    if (this.platform.is('cordova')) {
      this.sendPush(this.customerID);
    }
    this.hasArrived = false;
    this.eventProvider.ApprovedArrival(true, this.notify_ID);
  }

  sendPush(id) {
    // console.log('This is the push id', [id])
    const notificationObj: any = {
      include_player_ids: [id],
      contents: { en: 'Your Driver Has Arrived' },
    };

    this.One.postNotification(notificationObj).then(good => {
      console.log(good);
      // alert("Notification Post Success:\n" + id);
    }, error => {
      console.log(error);
      // this.pop.showPimp(error)
      // alert("Notification Post Failed:\n" + JSON.stringify(error));
      // alert("Notification Post Failed:\n" + id);
    });


  }



  Pickup() {
    this.locationTracker.isPickedUp = false;
    this.eventProvider.ApprovePickup(true, this.notify_ID);
    // this.locationTracker.watchPositionSubscription.clearWatch(this.locationTracker.goto_passenger_watcher);
    this.pop.hasPicked = true;
    this.isPickedDone = true;
    // this.hasNotPicked = false;
    if (this.platform.is('cordova')) {
      this.sendPush(this.customerID);
    }
    // this.locationTracker.hasTransactionEnded = false
    // clearTimeout(this.locationTracker.tracking_timeout)
    this.locationTracker.ClearDetection = true;
    // clearInterval(this.locationTracker.detectCarChange)
    this.myGcode.Reverse_Geocode(this.locationTracker.lat, this.locationTracker.lng, this.locationTracker.map1, false);
    // this.locationTracker.ResetMe()
    // this.pop.showLoader('fdgtedhhgdhd')
    if (this.platform.is('cordova')) {
      console.log('this detiny ' + this.destination);

      this.geocoder.geocode({ address: this.destination }, (results, status) => {
        if (status === 'OK') {
          const position = results[0].geometry.location;
          const lat = position.lat();
          const lng = position.lng();
          const location = [
            lat,
            lng
          ];


          const urPos = new google.maps.LatLng(lat, lng);
          const uLOC = new google.maps.LatLng(this.locationTracker.lat, this.locationTracker.lng);

          console.log(lat, lng);
          this.showLoadRefresh();
          this.locationTracker.setMarkersDestination(lat, lng, this.notify_ID);
          this.dProvider.calcDestRoute(this.name, uLOC, urPos, this.destination, this.notify_ID);

        }


      });
    } else {
      const urPos = new google.maps.LatLng(5.4975394, 7.5029374);
      const uLOC = new google.maps.LatLng(this.locationTracker.lat, this.locationTracker.lng);
      this.dProvider.calcDestRoute(this.name, uLOC, urPos, this.destination, this.notify_ID);
      this.pop.hideLoader();
    }
  }

  Drop() {

    const urPos = new google.maps.LatLng(this.locationTracker.myLat, this.locationTracker.myLng);
    const uLOC = new google.maps.LatLng(this.locationTracker.lat, this.locationTracker.lng);

    if (this.platform.is('cordova')) {
      console.log('this detiny ' + this.destination);

      const latlng = { lat: this.locationTracker.myLat, lng: this.locationTracker.myLng };
      this.geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === 'OK') {

          if (results[0]) {
            const desty = results[0].formatted_address;
            // this.cMap.locationName = this.locationName
            //  document.getElementById('locationButton').innerText = this.locationName
            this.dProvider.calcPrice(uLOC, urPos, desty, this.notify_ID);
          } else {

          }
        } else {
          // window.alert('Geocoder failed due to: ' + status);
        }



      });


    }

    clearTimeout(this.locationTracker.tracking_timeout);
    this.locationTracker.canTrack_ = false;
    this.locationTracker.hasTransactionEnded = false;
    this.locationTracker.hasCompleted = true;
    this.eventProvider.ApproveDrop(true, this.notify_ID).then(() => {
      this.isPassengerCleared = false;
      this.c_dropped = false;
      console.log('Ride Has Ended' + this.data.Client_paymentForm + this.data.Client_price);
      //  this.locationTracker.watchPositionSubscription.clearWatch(this.locationTracker.goto_passenger_watcher)
      this.ph.getUserAsClientInfo(this.notify_ID).off('child_removed');
      this.ph.getUserAsClientInfo(this.notify_ID).off('child_changed');
      this.ph.getUserAsClientInfo(this.notify_ID).off('child_added');

      console.log(this.locationTracker.goto_passenger_watcher);
      const obj = { payment_method: this.data.Client_paymentForm, amount: this.data.Client_price };
      this.mysheet = this.modalCtrl.create({
        component: PaymentpagePage,
        componentProps: { obj }
      });
      this.mysheet.onDidDismiss(data => {


        this.hasCompletedRide(this.data);

        // this.clearDuty();
        this.locationTracker.hasTransactionEnded = false;
        this.OneSignal.isInDeepSh_t = false;


        this.c_ended = false;

        this.canEnd = false;
      });
      this.mysheet.present();

    });

  }


  async ConfirmDrop() {
    const alert = await this.alert.create({
      message: this.lp.translate()[0].c5,
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].c7,
          handler: data => {
            this.Drop();
          }
        }
      ]
    });
    alert.present();
  }


  async ConfirmPickup() {
    const alert = await this.alert.create({
      message: this.lp.translate()[0].c5,
      buttons: [
        {
          text: this.lp.translate()[0].i8,
        },
        {
          text: this.lp.translate()[0].c7,
          handler: data => {
            this.Pickup();
          }
        }
      ]
    });
    alert.present();
  }



  StartListeningForChanges(id) {
    if (this.canListen) {

      this.notify_ID = id;
      console.log(this.notify_ID);

      if (this.settings.current_ID) {
        this.storage.set(`currentUserId`, this.notify_ID).then(() => {
          console.log('saved id');
        });

      }

      this.eventProvider.getChatList(this.notify_ID).on('child_added', snapshot => {
        if (this.canStart) {
          if (snapshot.val().Client_Message) {
            this.notification = true;
            this.pop.presentToast('New Message From Client');
            this.vibration.vibrate(1000);
          }
        }
      });

      this.ph.getUserAsClientInfo(this.notify_ID).on('child_added', driverSnp => {
        this.ph.getUserAsClientInfo(this.notify_ID).once('value', driverSnap => {
          console.log(driverSnap.val().client, 'Client has Been Added Now............');
          this.Client_Added(driverSnap.val().client, driverSnap.val().client.Client_username);
          this.hasEnded = false;

          if (this.canStart) {
            this.locationTracker.D_lat = driverSnap.val().client.Client_location[0];
            this.locationTracker.D_lat = driverSnap.val().client.Client_location[1];
          }
          // this.ph.getUserAsClientInfo(this.notify_ID).off('child_added');
          console.log('new user added');
          this.ph.getUserAsClientInfo(this.notify_ID).off('value');

        });
      });


      this.ph.getUserAsClientInfo(this.notify_ID).on('child_changed', driverSnp => {
        this.ph.getUserAsClientInfo(this.notify_ID).once('value', driverSnap => {

          if (this.canStart) {
            this.data = driverSnap.val().client;
            this.UserChanged(driverSnap.val().client);
            this.locationTracker.D_lat = driverSnap.val().client.Client_location[0];
            this.locationTracker.D_lat = driverSnap.val().client.Client_location[1];
            this.ph.getUserAsClientInfo(this.notify_ID).off('value');
          }
        });
      });

      this.ph.getUserAsClientInfo(this.notify_ID).on('child_removed', driverSnp => {
        this.ph.getUserAsClientInfo(this.notify_ID).once('value', () => {
          this.locationTracker.isPickedUp = false;
          if (this.canStart) {
            if (this.isPassengerCleared) {
              console.log('is passenger that cleared called.........');
              this.UserRemoved();
              if (this.isUser) {
                this.pop.showPimp('Passenger Ended The Trip');
              }
            } else {
              if (this.myAlert) {
                this.RejectJob();
                this.myAlert = false;
              }
              console.log('is not passenger that cleared called.........');
            }
            this.ph.getUserAsClientInfo(this.notify_ID).off('value');
          }
        });
      });

      this.canListen = false;

    }

  }











  async Client_Added(rp, f) {
    const obj = { info: f, loc: rp.Client_locationName, des: rp.Client_destinationName, charge: rp.Client_price };
    this.myAlert = await this.modalCtrl.create({
      component: AcceptPage,
      componentProps: { obj }
    });
    if (this.platform.is('cordova')) {
      this.vibration.vibrate(1000);
    }
    this.myAlert.onDidDismiss(data => {
      console.log('Accept page dismissed.......');
      if (data === 1 && !this.hasEnded) {
        this.ph.getUserAsClientInfo(this.notify_ID).once('value', driverSnap => {
          this.driverLoc = rp.Client_location;
          if (driverSnap.val() != null) {
            this.AcceptJob();
            this.canStart = true;
            this.locationTracker.marker = null;
            this.watchPositionSubscription.clearWatch(this.mapTracker);
            this.passenger_Lat = rp.Client_location[0];
            this.passenger_Lng = rp.Client_location[1];


            console.log('called');
            this.mapSection = true;
            this.canDO = true;

            this.hideNews = true;
            this.userHasPhone = true;

            // this.isNetwork = rp.Network_state
            this.c_added = false;
            console.log('driver location not null');
            this.customerPhone = rp.Client_phoneNumber;
            this.destination = rp.Client_destinationName;
            this.customerID = rp.Client_Notif;

            this.NewClientFound(
              rp.Client_locationName,
              rp.Client_location,
              rp.Client_username,
              rp.Client_picture,
              rp.Client_destinationName,
              rp.Client_Rating,
              rp.Client_RatingText,
              rp.Client_price
            );
          } else {
            this.pop.presentToast('You Lost the Job');
            this.RejectJob();
            this.canStart = false;
          }
          this.ph.getUserAsClientInfo(this.notify_ID).off('value');
        });
      } else {
        this.ph.Reject(this.notify_ID);
        this.RejectJob();
        this.canStart = false;
        console.log('Job was rejeceted');
        this.isUser = false;
      }
    });
    return await this.myAlert.present();


  }









  UserChanged(driverSnap) {

    if (driverSnap.Client_hasPaid) {
      console.log('Passenger 1 has paid');
      this.pop.hideLoader();
    }

    if (driverSnap.Pool_ended) {
      this.pop.presentToast('Passenger Has Cancelled Request');
    }







    if (driverSnap.Client_PickedUp && this.c_picked) {
      this.c_picked = false;
      this.pop.hasPicked = true;
      console.log('picked up passenger 1');
    }





  }


















  UserRemoved() {
    this.showLoadRefresh();
    this.HideFunk();
    // this.pop.hideLoader()
    console.log('Stopped The movement of driver towards user');
  }








  async showLoadRefresh() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myTimeout = setTimeout(() => {
      clearTimeout(myTimeout);
      loading.dismiss();
    }, 400);
  }





  // tslint:disable-next-line: variable-name
  NewClientFound(client_locationName, location, name, picture, destinationName, rate, ratingText, price) {
    this.name = name;
    this.picture = picture;
    this.location = client_locationName;
    this.destination = destinationName;
    this.rating = rate;
    this.ratingText = ratingText;
    this.ridePrice = price;

    this.isInBooking = false;
    // this.locationTracker.setMarkers(location)
    this.pop.GoOffline2();
    // this.canShowOther = true;
    const urPos = new google.maps.LatLng(location[0], location[1]);
    const uLOC = new google.maps.LatLng(this.locationTracker.lat, this.locationTracker.lng);
    // console.log(price)


    this.userLat = location[0];
    this.userLng = location[1];

    this.locationTracker.userLat = location[0];
    this.locationTracker.userLng = location[1];

    this.locationTracker.D_lat = location[0];
    this.locationTracker.D_lat = location[1];
    this.showLoadRefresh();
    this.dProvider.calcRoute(this.name, uLOC, urPos, this.location, false);

    this.myGcode.Reverse_Geocode(this.locationTracker.lat, this.locationTracker.lng, this.locationTracker.map1, false);


    console.log(location);
    console.log('Set Marker func called');


  }






  hasCompletedRide(driverSnap) {
    console.log('done user rated');
    if (this.c_complete) {
      this.showLoadRefresh();

      this.ph.getUserProfile().child('favorite').on('value', us => {
        console.log(us.val());
        if (us.val().favoriteSeek) {
          this.showMe(us.val().id[1], us.val().id[0]);
          this.ph.getUserProfile().off('value');
        }
      });
      // this.pop.loading.dismiss();
      const currentdate = new Date();
      const datetime = currentdate.getDate() + '/'
        + (currentdate.getMonth() + 1) + '/'
        + currentdate.getFullYear() + ' @ '
        + currentdate.getHours() + ':'
        + currentdate.getMinutes() + ':'
        + currentdate.getSeconds();

      // this.showLoadRefresh()
      this.ph.UpdateEarnings(driverSnap.Client_price).then(() => {
        // tslint:disable-next-line: max-line-length
        this.eventProvider.createHistory(driverSnap.Client_username, Math.floor(driverSnap.Client_price), datetime, driverSnap.Client_locationName, driverSnap.Client_destinationName).then(() => {
          // tslint:disable-next-line: max-line-length
          this.navCtrl.navigateRoot(['rate-me', { eventId: driverSnap.Client_ID, name: driverSnap.Client_username, lat: this.locationTracker.lat, lng: this.locationTracker.lng, cartype: this.ph.carType, positive_Rating: driverSnap.Client_Positive_rating, negative_Rating: driverSnap.Client_Negative_rating }]).then(() => {
            this.locationTracker.map1.clear().then(() => { });
            this.HideFunk();
            // this.locationTracker.watchPositionSubscription.clearWatch(this.locationTracker.goto_passenger_watcher)
          });
        });
      });
      this.c_complete = false;

    }
  }




  gotoMap() {
    if (this.platform.is('android')) {
      // tslint:disable-next-line: max-line-length
      window.open('geo://' + this.locationTracker.lat + ',' + this.locationTracker.lng + '?q=' + this.userLat + ',' + this.userLng + '(' + this.location + ')', '_system');
    }

    if (this.platform.is('ios')) {
      // tslint:disable-next-line: max-line-length
      window.open('maps://?q=' + this.location + '&saddr=' + this.locationTracker.lat + ',' + this.locationTracker.lng + '&daddr=' + this.userLat + ',' + this.userLng, '_system');
    }

    if (this.platform.is('mobileweb')) {
      // tslint:disable-next-line: max-line-length
      window.open('geo://' + this.locationTracker.lat + ',' + this.locationTracker.lng + '?q=' + this.userLat + ',' + this.userLng + '(' + this.location + ')', '_system');
    }

  }


  gotoDestination() {

    this.pop.showLoader(this.lp.translate()[0].e10);
    console.log('the result..........');
    this.geocoder.geocode({ address: this.destination }, (results, status) => {
      if (status === 'OK') {
        const position = results[0].geometry.location;
        const lat = position.lat();
        const lng = position.lng();
        console.log('This is the result..........');
        this.pop.hideLoader();
        if (this.platform.is('android')) {
          window.open('geo://' + lat + ',' + this.locationTracker.lng + '?q=' + lat + ',' + lng + '(' + this.destination + ')', '_system');
        }

        if (this.platform.is('ios')) {
          // tslint:disable-next-line: max-line-length
          window.open('maps://?q=' + this.destination + '&saddr=' + this.locationTracker.lat + ',' + this.locationTracker.lng + '&daddr=' + lat + ',' + lng, '_system');
        }

        if (this.platform.is('mobileweb')) {
          // tslint:disable-next-line: max-line-length
          window.open('maps://?q=' + this.destination + '&saddr=' + this.locationTracker.lat + ',' + this.locationTracker.lng + '&daddr=' + lat + ',' + lng, '_system');
        }

      } else {
        this.pop.showPimp(this.lp.translate()[0].f1);
      }
    });

  }


  HideFunk() {
    this.canListen = true;
    this.c_dropped = true;
    this.c_picked = true;
    this.c_ended = true;
    this.c_added = true;

    console.log('hide funk called.........');

    this.ph.getUserAsClientInfo(this.notify_ID).off('child_removed');
    this.ph.getUserAsClientInfo(this.notify_ID).off('child_changed');
    this.ph.getUserAsClientInfo(this.notify_ID).off('child_added');
    this.ph.getUserAsClientInfo(this.notify_ID).off('value');

    this.c_complete = true;
    this.clearConnection();
    this.clearAllNow();
  }


  HideFunc() {
    this.canListen = true;
    this.c_dropped = true;
    this.c_picked = true;
    this.c_ended = true;
    this.c_added = true;
    this.c_complete = true;
  }



  clearAllNow() {
    this.hasArrived = true;


    this.locationTracker.ClearDetection = true;
    // this.pop.GoOffline2();
    this.locationTracker.isDestination = false;


    if (this.platform.is('cordova')) {
      this.locationTracker.map1.clear().then(() => {
        console.log('all markers cleared');
        // this.locationTracker.refreshForChangesRemove();
        // this.platform.registerBackButtonAction(()=>this.platform.pause)
        // this.platform.registerBackButtonAction(()=>this.platform.exitApp())
      });

    }
    // clearInterval(this.locationTracker.detectCarChange)
    console.log(this.name);
    this.hasPooled2 = true;
    this.hasPooled = true;
    this.clientClrCheck = false;
    this.PoolClrCheck = false;
    this.canEnd = true;
    this.canEnd2 = true;

    this.isInBooking = true;

    this.hasDone = true;
    this.hasEnded = true;
    this.canShowOther = false;
    this.itsOver = false;
    this.locationTracker.driver = false;
    this.OneSignal.isInDeepSh_t = false;

    if (this.platform.is('cordova')) {
      this.locationTracker.map1.setClickable(true);
    }
    this.hasNotPicked = true;

    clearTimeout(this.locationTracker.tracking_timeout);
    this.locationTracker.canTrack_ = false;
    this.locationTracker.hasTransactionEnded = false;

    this.pop.hasPicked = false;

    console.log('database has been wiped');

    // this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.ph.carType);

    this.ph.getUserProfile().once('value', userProfileSnapshot => {
      this.earnings = userProfileSnapshot.val().earnings;
    });


    this.locationTracker.hasCompleted = true;

    this.platform.ready().then(() => {
      console.log('called once.............');
      timer(1000).subscribe(() => {
        this.StartListeningForChanges(this.notify_ID);
        this.StartTracker();
        this.locationTracker.refreshForChangesRemove();
        this.isUser = true;
        this.isPassengerCleared = true;
      });


      this.platform.backButton.subscribe(() => {
        // tslint:disable-next-line: no-string-literal
        navigator['app'].exitApp();
      });
      this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.ph.carType);
    });



  }


  RejectJob() {
    this.canStart = false;
    this.hasEnded = true;
    this.isPassengerCleared = false;
    this.platform.ready().then(() => {

      timer(1200).subscribe(() => {
        //  this.StartListeningForChanges(this.notify_ID);
        this.canStart = true;

        console.log('called once.............');
      });
      this.platform.backButton.subscribe(() => {
        // tslint:disable-next-line: no-string-literal
        navigator['app'].exitApp();
      });
      this.OneSignal.UpdateInfo(this.locationTracker.lat, this.locationTracker.lng, this.ph.carType);
    });

    if (this.myAlert) {
      this.myAlert.dismiss();
    }
  }




  AcceptJob() {

    this.called = true;

    this.called_2 = true;
    this.watchPositionSubscription.clearWatch(this.mapTracker);
    this.dropped2 = true;
    this.done = true;
    this.connected = true;
    // console.log('couldnt pass through')

    // console.log('came through')
    // this.ph.getUserAsClientInfo(this.notify_ID).off('child_added')
    console.log('driver loc is empty');

    if (this.driverLoc != null) {
      //  console.log('passed through')
      console.log('driver loc is filled');

      this.locationTracker.hasTransactionEnded = true;
      this.locationTracker.canTrack_ = true;

      // this.locationTracker.watchPositionSubscription2.clearWatch(this.locationTracker.goto_destination_watcher)
      // this.locationTracker.watchPositionSubscription.clearWatch(this.locationTracker.goto_passenger_watcher)


      this.platform.ready().then(() => {
        this.platform.backButton.subscribe(() => this.pop.presentToast(this.lp.translate()[0].e4));
      });
      // console.log('Stopped Normal Movement Of Driver')
      this.OneSignal.isInDeepSh_t = true;
      // this.eventProvider.getCurrentDriver().remove().then(suc =>{
      //   console.log('removed now');
      if (!this.ph.rating) {
        this.ph.rateText = '';
        this.ph.rating = 0;
      }
      // console.log('Driver Location Name is :' + this.myGcode.locationName)
      if (!this.platform.is('cordova')) {
        // tslint:disable-next-line: max-line-length
        // console.log('removed now' + this.ph.name, this.ph.picture, this.notify_ID, 5.4975394, 7.5029374, this.myGcode.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.ph.rating, this.ph.number )
        // tslint:disable-next-line: max-line-length
        this.createUserInformation(this.ph.name, this.ph.picture, this.notify_ID, 5.4975394, 7.5029374, this.myGcode.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.rating_positive, this.rating_negative, this.ph.rateText, this.ph.number);
      } else {
        // tslint:disable-next-line: max-line-length
        this.createUserInformation(this.ph.name, this.ph.picture, this.notify_ID, this.locationTracker.lat, this.locationTracker.lng, this.myGcode.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.rating_positive, this.rating_negative, this.ph.rateText, this.ph.number);
      }
      console.log('shit done');


      // })
    }
  }




  createUserInformation(name: string, picture: any, id: any,
    // tslint:disable-next-line: max-line-length
    lat: number, lng: number, locationName: any, plate: any, seats: number, carType: any,
    // tslint:disable-next-line: variable-name
    positive: any, negative: any, rateText: any, number: number) {
    //   console.log(this.notify_ID)
    // tslint:disable-next-line: max-line-length
    this.eventProvider.PushUserDetails(name, picture, id, lat, lng, locationName, plate, seats, carType, positive, negative, rateText, number, this.notify_ID).then(suc => {
      this.locationTracker.map1.clear().then(() => {
        console.log('SetMarkers Called.............');
        this.showLoadRefresh();
        this.locationTracker.hasCompleted = false;
        this.locationTracker.setMarkers(this.notify_ID, this.passenger_Lat, this.passenger_Lng);
      });
    });



  }
















}
