import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ModalController, Platform, AlertController, LoadingController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  LatLngBounds,
  LatLng
} from '@ionic-native/google-maps';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';
import { Vibration } from '@ionic-native/vibration/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { timer } from 'rxjs';
import { interval } from 'rxjs';
import { StripeService } from 'src/app/services/stripe.service';
import { LanguageService } from 'src/app/services/language.service';
import { AuthService } from 'src/app/services/auth.service';
import { PaystackService } from 'src/app/services/paystack.service';
import { ActivityService } from 'src/app/services/activity.service';
import { SettingsService } from 'src/app/services/settings.service';
import { NativeMapContainerService } from 'src/app/services/native-map-container.service';
import { GeocoderService } from 'src/app/services/geocoder.service';
import { DirectionserviceService } from 'src/app/services/directionservice.service';
import { ProfileService } from 'src/app/services/profile.service';
import { OnesignalService } from 'src/app/services/onesignal.service';
import { PopUpService } from 'src/app/services/pop-up.service';
import { EventService } from 'src/app/services/event.service';
import { AutocompletePage } from 'src/app/pages/autocomplete/autocomplete.page';
import { ChatPage } from 'src/app/pages/chat/chat.page';
import { RatePage } from 'src/app/pages/rate/rate.page';
import { Router, NavigationExtras } from '@angular/router';
declare var google;
declare var geofire;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userProfile: any;
  // tslint:disable-next-line: variable-name
  notify_ID: string;
  showGps: boolean;
  toggleMore: boolean;
  type = 'arrow-up';
  cardnumber: string;
  hidelocator: boolean;
  lat: number;
  lng: number;
  picked: boolean;
  startedNavigation = false;
  // tslint:disable-next-line: variable-name
  destination_lat: any;
  // tslint:disable-next-line: variable-name
  destination_lng: any;
  bookStarted: boolean;
  returningUser: boolean;
  uid: any;
  hideNews: boolean;
  newPrice: number;
  canCancel: boolean;
  // tslint:disable-next-line: variable-name
  driver_connected: boolean;
  refreshedTimes: any = -1;
  notification: boolean;
  carType: any;
  plate: any;
  name: any;
  seat: any;
  rating: any;
  review: any;
  picture: any;
  location: any;
  canShowBars = true;
  // tslint:disable-next-line: new-parens
  public geocoder: any = new google.maps.Geocoder;
  price: number;
  userDestName: any;
  number: any;
  driverLocationName: any;
  // tslint:disable-next-line: variable-name
  connect_change = true;
  myTimer: any;
  referal: any;
  referalID: any;
  actualPrice: any;
  highPrice: any;
  driverHighestDrivingDistance: any;

  driverFound = true;
  pickedup = true;
  droppedoff = true;
  hasPaid = true;
  isChecking = true;
  tracker: any;
  mapTracker: any;
  watchPositionSubscription: Geolocation;
  isDriverEnded = true;
  canSwoop = true;
  canEnd = true;
  destiny: any;
  subscription: any;
  items: any;
  eventId: any;

  constructor(public storage: Storage, public stripe: StripeService, public lp: LanguageService,
    public authProvider: AuthService, public paystack: PaystackService, public One: OneSignal,
    public act: ActivityService, public settings: SettingsService, private backgroundMode: BackgroundMode,
    public statusBar: StatusBar, public loadingCtrl: LoadingController, private vibration: Vibration,
    public alert: AlertController, public cMap: NativeMapContainerService, private call: CallNumber,
    public myGcode: GeocoderService, public dProvider: DirectionserviceService, public platform: Platform,
    // tslint:disable-next-line: no-shadowed-variable
    public OneSignal: OnesignalService, public modalCtrl: ModalController, public menu: MenuController,
    public pop: PopUpService, public ph: ProfileService, public navCtrl: NavController, public router: Router,
    public eventProvider: EventService) {

    this.platform.ready().then(() => {
      if (!this.platform.is('cordova')) {

        this.notify_ID = '43cd6829-4651-4039-bbc3-aace7fbe7d72';

      } else {

        this.One.getIds().then(success => {
          this.notify_ID = success.userId;
        });

      }

      this.notify_ID = '43cd6829-4651-4039-bbc3-aace7fbe7d72';
    });
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      // tslint:disable-next-line: no-string-literal
      navigator['app'].exitApp();
    });

  }
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }


  async ngOnInit() {

    this.subscription = this.platform.backButton.subscribe(() => {
      // tslint:disable-next-line: no-string-literal
      navigator['app'].exitApp();
    });

    await this.cMap.loadMap();

    this.WaitForGeolocation();



    if (this.ph.card != null) {
      // tslint:disable-next-line: prefer-const
      let mainStr = this.ph.card || '2345678765445678',
        // tslint:disable-next-line: prefer-const
        vis = mainStr.slice(-4),
        countNum = '';

      for (let i = (mainStr.length) - 4; i > 0; i--) {
        countNum += '*';
      }
      this.cardnumber = countNum + vis;
    }

  }

  remove(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.navigateRoot('login');
    });
  }


  toggleMoreSection() {
    console.log('checked here');
    this.cMap.selected_destination_bar = true;
    this.canSwoop = false;
    this.doNow();
    if (this.platform.is('cordova')) {

    }
  }
  doNow() {
    console.log('checked here too');
    this.pop.presentLoader('');
    timer(1000).subscribe(() => {

      this.pop.hideLoader();
      document.getElementById('destination').innerText = this.lp.translate()[0].dest;
      this.cMap.map.setClickable(false);

      this.cMap.onDestinatiobarHide = true;
      this.cMap.onLocationbarHide = true;
      this.cMap.showDone = false;
      this.hidelocator = true;

      this.platform.backButton.subscribe(() => this.ReturnHome());
    });
  }



  ReturnHome() {
    this.cMap.selected_destination_bar = false;
    this.cMap.map.setClickable(true);
    this.cMap.showDone = false;
    this.hidelocator = false;
    this.canSwoop = true;
    this.cMap.shove = true;
    this.cMap.Reset();
    this.dProvider.isDriver = true;
    this.cMap.hasRequested = false;
    this.pop.onRequest = false;
    this.hidelocator = false;
    this.cMap.canShowchoiceTab = false;
    this.cMap.norideavailable = false;

    this.subscription = this.platform.backButton.subscribe(() => {
      // tslint:disable-next-line: no-string-literal
      navigator['app'].exitApp();
    });
  }




  StartTracker() {
    console.log('start tracking..........');
    this.watchPositionSubscription = navigator.geolocation;
    this.mapTracker = this.watchPositionSubscription.watchPosition((position) => {
      if (this.cMap.marker && this.canSwoop) {
        console.log('position callback', position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.cMap.lat = position.coords.latitude;
        this.cMap.lng = position.coords.longitude;
        // reset route points
        this.cMap.gcode.Reverse_Geocode(position.coords.latitude, position.coords.longitude, false);
        if (this.cMap.marker) {
          this.cMap.marker.setPosition(new LatLng(position.coords.latitude, position.coords.longitude));
        }

        this.cMap.map.animateCamera({
          target: new LatLng(position.coords.latitude, position.coords.longitude),
          zoom: 15,
          tilt: 0,
          bearing: 0,
          duration: 1000
        }).then(distanceApart => {
        });
        console.log('Updating Your Location ....');

      }
    }, (error) => {
      console.log(error);
    }, {
      enableHighAccuracy: true
    });
  }



  WaitForGeolocation() {

    // A timer to detect if the location has been found.
    // tslint:disable-next-line: variable-name
    const location_tracker_loop = timer(1000).subscribe(() => {
      if (this.cMap.hasShown) {
        location_tracker_loop.unsubscribe();
        this.StartTracker();
        this.showGps = false;
        this.cMap.mapLoadComplete = true;
        console.log('xfdwgvuhbeygvw');
      } else {
        this.WaitForGeolocation();
      }
    });
  }



  toggleMoreBtn() {
    // show or hide more button on connecting with driver.
    this.toggleMore = this.toggleMore ? false : true;
    if (this.toggleMore) {
      this.type = 'arrow-down';
    } else {
      this.type = 'arrow-up';
    }
  }





  async showAddressModal(selectedBar) {


    const modal = await this.modalCtrl.create({
      component: AutocompletePage,
      componentProps: { item: this.items }
    });
    modal.onDidDismiss()
      .then((data: any) => {
        // Open the address modal on location bar click to change location
        // tslint:disable-next-line: no-string-literal
        const item = data['data'];
        let myPos = new google.maps.LatLng(this.lat, this.lng);
        if (selectedBar === 1 && item != null) {
          if (!this.startedNavigation) {
            document.getElementById('location').innerText = item;
            this.myGcode.locationName = item;
            this.pop.presentLoader('');
            // tslint:disable-next-line: object-literal-key-quotes
            this.myGcode.geocoder.geocode({ 'address': item }, (results, status) => {
              if (status === 'OK') {
                this.pop.hideLoader();
                const position = results[0].geometry.location;
                this.cMap.lat = position.lat();
                this.cMap.lng = position.lng();
                myPos = new google.maps.LatLng(position.lat(), position.lng());
              } else {
                this.pop.hideLoader();
              }

            });
          }
        }
        // Open the address modal on destination bar click to change destination
        if (selectedBar === 2 && item != null) {
          document.getElementById('destination').innerText = item;
          this.myGcode.destinationSetName = item;

          this.pop.presentLoader('Checking....');
          /// After item input, check to see if user selected to add a destination or to calculate distance.
          // tslint:disable-next-line: object-literal-key-quotes
          this.myGcode.geocoder.geocode({ 'address': item }, (results, status) => {
            if (status === 'OK') {
              this.pop.hideLoader();
              const position = results[0].geometry.location;
              const calPos = new google.maps.LatLng(position.lat(), position.lng());
              this.destination_lat = position.lat();
              this.destination_lng = position.lng();
              this.pop.presentLoader('Loading...');
              const h = interval(2000).subscribe(() => {
                // If the estimated price has been calculated
                const loc1 = [this.cMap.lat, this.cMap.lng];
                const loc2 = [this.destination_lat, this.destination_lng];
                if (this.dProvider.price != null) {

                  this.pickLocation(loc1, loc2);
                  h.unsubscribe();
                  this.pop.hideLoader();
                }
              });

              document.getElementById('destination').innerText = item;
              this.myGcode.destinationSetName = item;
              this.dProvider.calcRoute(myPos, calPos, false, true, item);
              console.log('here-------------------------------------------------------');
              this.picked = true;
            } else {

            }
          });

        }
      });
    modal.present();
  }


  checkPrice(data) {
    const currentPrice = this.dProvider.price;
    const highPrice = this.dProvider.highPrice;

    this.actualPrice = currentPrice;
    this.highPrice = highPrice;
    console.log(this.cMap.car_notificationIds);
    if (this.cMap.car_notificationIds.length === 0) {
      this.cMap.isBooking = false;
      this.Close();

    } else {
      if (!data) {

        const exp = currentPrice * this.cMap.car_notificationIds[0][6];
        const expo = highPrice * this.cMap.car_notificationIds[0][6];
        this.actualPrice = Math.round(currentPrice - exp);
        this.highPrice = Math.round(highPrice - expo);

      } else {
        const exp = currentPrice * data;
        const expo = highPrice * data;
        this.actualPrice = Math.round(currentPrice - exp);
        this.highPrice = Math.round(highPrice - expo);
      }

    }

  }

  pickLocation(loc1, loc2) {
    // if there is a destination set.
    if (this.myGcode.destinationSetName !== null) {
      this.pop.onRequest = true;
      this.cMap.map.setClickable(true);

      console.log(loc1, loc2);


      const apart = (google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(loc1[0], loc1[1]),
        new google.maps.LatLng(loc2[0], loc2[1])) / 1000).toFixed(2);

      console.log(apart);

      // tslint:disable-next-line: radix
      if (parseInt(apart) <= this.settings.distanceDriving) {

        console.log(this.cMap.car_notificationIds);

        if (this.cMap.car_notificationIds.length !== 0) {
          // Is there a driver around.
          this.cMap.canShowchoiceTab = true;
          this.checkPrice(null);
          this.cMap.choseCar = false;
          this.cMap.showDone = false;
          this.hidelocator = true;
          console.log('check drivers Here');
        } else {
          // No driver around.
          this.cMap.canShowchoiceTab = false;
          this.cMap.norideavailable = true;
          this.cMap.choseCar = false;
          this.cMap.showDone = false;
          this.hidelocator = true;

        }

      } else {

        this.pop.showPimp('Destination Too Far.');
        this.ReturnToSelect();
      }


    } else {
      // There is no destination. Tell user to add location
      this.cMap.onDestinatiobarHide = true;
      this.cMap.onLocationbarHide = true;
      this.cMap.showDone = false;
    }


  }
  // This is the fuction for estimate btn.
  estimate() {
    this.router.navigate(['/estimate', { lat: this.cMap.lat, lng: this.cMap.lng }]);
    this.platform.backButton.subscribe(() => this.navCtrl.pop());
  }

  // goto payment page on cash or card click
  gotoPayment() {
    if (this.ph.card == null) {
      this.navCtrl.navigateRoot('payment');
      this.platform.backButton.subscribe(() => this.navCtrl.pop());
    }
  }



  GotoPlace(place) {
    this.lat = this.cMap.lat;
    this.lng = this.cMap.lng;

    this.platform.backButton.subscribe(() => this.ReturnHome());
    this.myGcode.destinationSetName = place;
    if (place != null) {
      const myPos = new google.maps.LatLng(this.cMap.lat, this.cMap.lng);
      this.pop.presentLoader('');
      // tslint:disable-next-line: object-literal-key-quotes
      this.myGcode.geocoder.geocode({ 'address': place }, (results, status) => {
        if (status === 'OK') {
          this.pop.hideLoader();
          const position = results[0].geometry.location;
          const calPos = new google.maps.LatLng(position.lat(), position.lng());
          console.log('here-------------------------------------------------------');
          this.dProvider.calcRoute(myPos, calPos, false, true, place);

          this.picked = false;

        } else {
          if (this.pop.presentLoader) {
            this.pop.hideLoader();
          }

          this.pop.presentToast(this.lp.translate()[0].retry);
        }
      });
    } else {
      this.navCtrl.navigateRoot('profile');
      this.platform.backButton.subscribe(() => this.navCtrl.pop());
      this.pop.presentToast(this.lp.translate()[0].home);
    }

  }



  Done() {
    this.lat = this.cMap.lat;
    this.lng = this.cMap.lng;
    if (this.myGcode.destinationSetName != null) {
      const myPos = new google.maps.LatLng(this.cMap.lat, this.cMap.lng);
      this.pop.presentLoader('');
      // tslint:disable-next-line: object-literal-key-quotes
      this.geocoder.geocode({ 'address': this.myGcode.destinationSetName }, (results, status) => {
        if (status === 'OK') {
          this.pop.hideLoader();
          const position = results[0].geometry.location;
          const calPos = new google.maps.LatLng(position.lat(), position.lng());
          this.myGcode.destinationSetName = this.myGcode.destinationSetName;
          this.dProvider.calcRoute(myPos, calPos, false, true, this.myGcode.destinationSetName);
          console.log('here-------------------------------------------------------');
          this.destination_lat = position.lat();
          this.destination_lng = position.lng();

          this.pop.presentLoader('Loading...');
          const h = interval(2000).subscribe(() => {
            // If the estimated price has been calculated
            const loc1 = [this.cMap.lat, this.cMap.lng];
            const loc2 = [this.destination_lat, this.destination_lng];
            if (this.dProvider.price != null) {

              this.pickLocation(loc1, loc2);
              h.unsubscribe();
              this.pop.hideLoader();
            }
          });

          document.getElementById('destination').innerText = this.myGcode.destinationSetName;
          this.myGcode.destinationSetName = this.myGcode.destinationSetName;
          this.picked = true;

        } else {
          this.pop.hideLoader();
          this.pop.presentToast(this.lp.translate()[0].retry);
        }
      });
    } else {
      this.cMap.onDestinatiobarHide = true;
      this.cMap.onLocationbarHide = true;
      this.cMap.showDone = false;
      this.hidelocator = true;
    }

  }



  ReturnToSelect() {
    this.cMap.selected_destination_bar = false;
    this.cMap.showDone = false;
    this.pop.onRequest = false;
    this.hidelocator = false;
    this.platform.backButton.subscribe(() => {
      // tslint:disable-next-line: no-string-literal
      navigator['app'].exitApp();
    });
    this.cMap.canShowchoiceTab = false;
    this.cMap.norideavailable = false;

    this.dProvider.price = null;
    this.cMap.hasRequested = false;
    this.cMap.hasShow = true;
  }



  Start() {
    this.RequestForRide();
    this.cMap.canShowchoiceTab = false;
    this.cMap.norideavailable = false;
    this.cMap.hasRequested = true;
    this.watchPositionSubscription.clearWatch(this.mapTracker);
    this.pop.driverEnded = true;
    this.cMap.isBooking = true;

    this.cLearMapActivity();
  }
  cLearMapActivity() {
    this.cMap.keyEntered.cancel();
    this.cMap.exited.cancel();
    this.cMap.moved.cancel();
  }


  /// The Book Now button onclick=>Create and push the users information to the database.
  RequestForRide() {
    this.bookStarted = true;
    this.hideFunctions();
    this.returningUser = false;
    this.cMap.hasCompleted = false;
    let image = this.ph.id.photoURL;
    let name = this.ph.id.displayName;
    let pay = this.ph.paymentType;
    this.pop.calculateBtn = false;

    console.log('RequestForRide Called');


    if (image == null) {
      if (this.ph.pic == null) {
        image = 'https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-10-128.png';
      } else {
        image = this.ph.pic;
      }

    }


    if (name == null) {
      if (this.ph.name != null) {
        name = this.ph.name;
      } else {
        name = this.ph.id.email;
      }

    }

    if (pay == null) {
      pay = 1;
    }

    if (this.lat == null && this.lng == null) {
      this.lat = this.lat;
      this.lng = this.lng;

    }

    let ratingText = this.ph.ratingText;
    let ratingValue = this.ph.ratingValue;
    if (ratingText == null && ratingValue == null) {
      ratingText = this.lp.translate()[0].notrate;
      ratingValue = 0;
    }

    this.refreshedTimes++;

    this.cMap.isBooking = true;
    console.log(this.cMap.car_notificationIds.length, this.refreshedTimes, this.cMap.car_notificationIds);

    if (this.cMap.car_notificationIds.length <= this.refreshedTimes) {
      console.log('No More Drivers Close To You At The Moment');
      this.cMap.isBooking = false;
      this.Close();
    } else {
      this.createUserInformation(name, image, this.lat, this.lng, this.myGcode.locationName, pay,
        ratingValue, ratingText, this.refreshedTimes);
    }

    this.startListeningForResponse();

  }

  createUserInformation(name: string, picture: any,
    lat: number, lng: number, locationName: any, payWith: any, ratingValue: any,
    ratingText: any, refreshedTimes: any) {

    this.platform.backButton.subscribe(() => this.pop.presentToast(this.lp.translate()[0].cantexit));

    //// Here we check if there are cars available, if none we return

    if (this.cMap.car_notificationIds[this.refreshedTimes] !== []) {

      console.log(this.cMap.car_notificationIds[this.refreshedTimes]);

      // This represents the drivers information for access to the driver node in the database
      // tslint:disable-next-line: variable-name
      const selected_driver = this.cMap.car_notificationIds[this.refreshedTimes][2];
      // tslint:disable-next-line: variable-name
      const selected_drivers_key = this.cMap.car_notificationIds[this.refreshedTimes][3];

      console.log(selected_driver, this.cMap.car_notificationIds[this.refreshedTimes][4], selected_drivers_key);
      console.log(this.cMap.car_notificationIds);
      // Registering selected variables to providers for later use

      this.pop.uid = selected_driver;
      this.dProvider.id = selected_driver;
      this.uid = selected_driver;

      const dest = this.myGcode.destinationSetName;
      //// console.log('Started the shit here riht now')

      // Get access to the drivers database node, remove the current driver from the node and push,
      // to avoid any other request on the same driver
      this.act.getCurrentDriver(selected_drivers_key).remove().then((id) => {

        console.log(name, locationName, selected_driver, selected_drivers_key, 'hereerdvdhjhfssfsfds');

        // Push the drivers information to the customer connection node in the database
        this.act.getActivityProfile(selected_driver).set({

          Client_username: this.ph.name,
          Client_Deleted: false,
          Client_location: [lat, lng],
          Client_locationName: locationName,
          Client_paymentForm: payWith,
          Client_picture: picture,
          Client_phoneNumber: this.ph.phone,
          Client_ID: this.ph.id,
          Client_destinationName: dest,
          Client_price: this.actualPrice,
          Client_CanChargeCard: false,
          Client_PickedUp: false,
          Client_Dropped: false,
          Client_HasRated: false,
          Client_Rating: ratingValue,
          Client_RatingText: ratingText,
          Client_hasPaid: false,
          Client_paidCash: false,
          Client_returnState: false,
          Client_ended: false,
          Client_Notif: this.notify_ID,
          Client_Arrived: false

        }).then(suc => {
          this.cMap.map.clear();
          this.CreatePushNotification(this.cMap.car_notificationIds[this.refreshedTimes]);

        });

      });



    }


  }


  CloseLooper() {
    this.PerformActionOnCancel();
  }


  Close() {
    this.pop.clearAll(this.uid, true);
    this.ReturnHome();
    this.cMap.hasCompleted = true;
    this.pop.hasCleared = true;
    this.cMap.onbar2 = false;
    this.refreshedTimes = -1;
    this.pop.presentToast('No Response From Drivers.');
    this.PerformActionOnCancel();
    this.StartTracker();
    this.eventProvider.getChatList(this.uid).off('child_added');
    this.act.getActiveProfile(this.uid).off('child_changed');
    this.act.getActiveProfile(this.uid).off('child_removed');
    this.platform.backButton.subscribe(() => {
      // tslint:disable-next-line: no-string-literal
      navigator['app'].exitApp();
    });
  }



  CreatePushNotification(id) {

    console.log('This id the notification' + id);
    // tslint:disable-next-line: variable-name
    const current_id = id[2];
    // this.poolState = true;
    console.log(current_id);
    if (this.platform.is('cordova') && !this.platform.is('desktop')) {
      this.OneSignal.sendPush(current_id);
    }

    console.log(this.cMap.car_notificationIds.length);


    this.myTimer = timer(20000).subscribe(() => {
      if (!this.driver_connected) {
        console.log('No Driver Found Yet');
        this.eventProvider.getChatList(this.uid).off('child_added');

        this.act.getActiveProfile(this.uid).off('child_changed');
        this.act.getActiveProfile(this.uid).off('child_removed');
        this.pop.driverEnded = false;
        this.act.getActivityProfile(id[2]).remove().then(() => {

          this.RequestForRide();

        });
      } else {
        this.cMap.marker = null;
        this.myTimer.unsubscribe();
        console.log('Driver Found');
        this.refreshedTimes = -1;
        this.cMap.isBooking = true;
        this.pop.driverEnded = true;
        this.CloseLooper();
      }
    });


    console.log('create push');
    this.canCancel = true;

  }


  // call the driver now
  callDriver() {
    this.call.callNumber(this.number, true);
  }
  // Send a message to the driver

  async Send() {
    const modal = await this.modalCtrl.create({
      component: ChatPage,
    });
    modal.present();
    modal.onDidDismiss()
      .then(() => {
        this.notification = false;
      });
  }




  // tslint:disable-next-line: align
  startListeningForResponse() {
    console.log(this.uid);

    this.platform.backButton.subscribe(() => this.pop.presentToast(this.lp.translate()[0].cantexit));



    this.eventProvider.getChatList(this.uid).on('child_added', snapshot => {
      this.eventProvider.getChatList(this.uid).on('child_added', fs => {
        if (snapshot.val().Driver_Message) {
          this.notification = true;
          this.pop.presentToast('New Message From Driver');
          this.vibration.vibrate(1000);
          this.eventProvider.getChatList(this.uid).off('child_added');
        }

      });
    });

    this.act.getActiveProfile(this.uid).on('child_changed', customerSnapshot => {




      // tslint:disable-next-line: no-shadowed-variable
      this.act.getActiveProfile(this.uid).once('value', customerSnapshot => {
        const activity = customerSnapshot.val().client;
        console.log('valeud');
        this.cMap.D_lat = customerSnapshot.val().client.Driver_location[0];
        this.cMap.D_lng = customerSnapshot.val().client.Driver_location[1];

        this.number = customerSnapshot.val().client.Driver_number;
        if (activity.Driver_location != null) {
          if (this.myTimer) {
            this.myTimer.unsubscribe();
          }
          this.driver_connected = true;
          this.PerformActionOnAdd(activity);
          console.log('children added child' + customerSnapshot.val());

        }
        this.act.getActiveProfile(this.uid).off('value');
      });

    });




    this.act.getActiveProfile(this.uid).on('child_removed', customerSnapshot => {
      // tslint:disable-next-line: no-shadowed-variable
      this.act.getActiveProfile(this.uid).once('value', customerSnapshot => {
        console.log('project to be cleared' + customerSnapshot.val());

        if (this.pop.driverEnded) {
          this.pop.showPimp('Driver Ended The Trip');
          this.pop.hasCleared = true;
          this.PerformActionOnCancel();
        } else {
          console.log('ended but not by the driver.');
        }

        this.act.getActiveProfile(this.uid).off('value');
      });
    });

  }
  PerformActionOnCancel() {
    console.log('Cancel everything called.................,,,./,/,/.,/');
    this.startedNavigation = false;
    this.driver_connected = false;
    this.canCancel = false;

    this.cMap.car_notificationIds.length = 0;


    this.dProvider.isDriver = false;
    this.isChecking = false;
    this.cMap.marker = null;
    if (this.platform.is('cordova')) {
      this.cMap.map.clear().then(() => {
        if (this.cMap.Line) {
          this.cMap.Line.remove();
        } else {
          console.log('restart called');
        }

        this.BeginTracker();
      });
    } else {
      this.cMap.Restart();
      this.cMap.map.setClickable(true);
    }

    this.cMap.hasRequested = false;
    this.cMap.onbar3 = false;
    this.cMap.toggleBtn = false;
    this.cMap.onPointerHide = false;
    this.cMap.isBooking = false;
    this.pop.allowed = true;
    this.pop.canDismiss = true;

    this.cMap.isDestination = false;
    this.cMap.selected_destination_bar = false;
    this.cMap.isLocationChange = false;

    this.dProvider.price = null;
    this.droppedoff = true;
    this.pickedup = true;
    this.hasPaid = true;
    this.driverFound = true;
    this.cMap.showDone = false;
    this.pop.onRequest = false;
    this.canShowBars = true;
    this.toggleMore = true;
    this.cMap.isNavigate = false;

    this.connect_change = true;

    this.hidelocator = false;

    this.bookStarted = false;

    this.platform.backButton.subscribe(() => {
      // tslint:disable-next-line: no-string-literal
      navigator['app'].exitApp();
    });
  }
  BeginTracker() {
    this.cMap.Restart();
    const m = timer(2000).subscribe(() => {
      if (this.cMap.hasShown) {
        this.StartTracker();
        this.canEnd = true;
      } else {
        this.BeginTracker();
      }

    });

    this.cMap.map.setClickable(true);
  }



  // clear the booking request
  cancelRequest() {

    this.ClosePoolRequest();

  }

  ClosePoolRequest() {
    this.showAlertComplex(this.lp.translate()[0].whycancel, this.lp.translate()[0].chose);
  }


  async showAlertComplex(title, message) {
    const alert = await this.alert.create({
      header: title,
      // tslint:disable-next-line: object-literal-shorthand
      message: message,
      inputs: [
        {
          name: 'long',
          label: this.lp.translate()[0].longpick,
          type: 'checkbox',
          value: 'true',
          checked: false
        },
        {
          name: 'incorrect',
          label: this.lp.translate()[0].incorrect,
          type: 'checkbox',
          value: 'false',
          checked: false
        }
      ],
      buttons: [
        {
          text: this.lp.translate()[0].reject,
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: this.lp.translate()[0].accept,
          handler: (data) => {
            this.Close();
            console.log(data[0]);
            let yu = 'none';
            if (data[0] === 'false') {
              yu = this.lp.translate()[0].incorrect;
            } else {
              yu = this.lp.translate()[0].longpick;
            }
            this.eventProvider.getChatList(this.uid).off('child_added');

            this.act.getActiveProfile(this.uid).off('child_changed');
            this.act.getActiveProfile(this.uid).off('child_removed');

            const currentdate = new Date();
            const datetime = currentdate.getDate() + '/'
              + (currentdate.getMonth() + 1) + '/'
              + currentdate.getFullYear() + ' @ '
              + currentdate.getHours() + ':'
              + currentdate.getMinutes() + ':'
              + currentdate.getSeconds();

            this.ph.Cancelled(this.name, datetime, this.myGcode.locationName, this.destiny, this.price, yu);

            this.pop.driverEnded = false;
            this.pop.hasCleared = true;
            this.myTimer.unsubscribe();
          }
        }

      ],
      backdropDismiss: false
    });
    alert.present();
  }



  PerformActionOnAdd(activity) {

    if (this.connect_change) {

      console.log('connect now');
      this.Onconnect(activity);
      this.connect_change = false;
    }

    this.destiny = activity.Client_destinationName;

    if (activity.Driver_location[0] != null && this.driverFound) {
      console.log('Called this area..');

      const driverPos = new google.maps.LatLng(activity.Driver_location[0], activity.Driver_location[1]);
      let userPos;
      userPos = new google.maps.LatLng(activity.Client_location[0], activity.Client_location[1]);
      console.log('here-------------------------------------------------------');
      this.dProvider.calcRoute(userPos, driverPos, true, false, activity.Client_destinationName);
      console.log('Called this area..');
      this.hidelocator = true;
      this.driverFound = false;


    }


    if (activity.Client_PickedUp && this.pickedup) {
      console.log('Picked user');
      this.cMap.isDestination = true;

      this.cMap.ClearDetection = true;
      this.canShowBars = false;
      this.toggleMore = false;

      this.cMap.toggleBtn = false;

      let lat;
      let lng;
      this.type = 'arrow-up';
      this.myGcode.Reverse_Geocode(this.cMap.lat, this.cMap.lng, false);

      this.pop.presentLoader('Ride Started');

      if (this.platform.is('cordova') && !this.platform.is('desktop')) {
        this.OneSignal.sendArrived(this.notify_ID);
      }

      console.log('now moving user to destination');

      console.log(activity.Client_destinationName);

      // tslint:disable-next-line: object-literal-key-quotes
      this.geocoder.geocode({ 'address': activity.Client_destinationName }, (results, status) => {
        console.log('Geocoding the destination called');
        this.pop.hideLoader();
        if (status === 'OK') {
          const position = results[0].geometry.location;
          lat = position.lat();
          lng = position.lng();
          const location = [
            lat,
            lng
          ];

        }

        if (this.platform.is('cordova')) {
          const urPos = new google.maps.LatLng(lat, lng);
          const loc1 = [lat, lng];

          const uLOC = new google.maps.LatLng(this.cMap.lat, this.cMap.lng);
          const loc2 = [this.cMap.lat, this.cMap.lng];



          this.cMap.map.clear().then(() => {
            this.driverFound = false;
            console.log('now moving user to destination');
            this.pop.SmartLoader('');
            this.cMap.setMarkersDestination(lat, lng, this.uid);
            this.cMap.isPickedUp = false;
            this.dProvider.calcDestRoute(this.name, uLOC, urPos, activity.Client_destinationName, this.uid);
          });
        } else {

          const urPos = new google.maps.LatLng(lat, lng);
          console.log('Calculate the route distance.');
          const uLOC = new google.maps.LatLng(this.cMap.lat, this.cMap.lng);
          this.dProvider.calcDestRoute(this.name, uLOC, urPos, activity.Client_destinationName, this.uid);
          this.pop.hideLoader();

        }





      });

      this.pickedup = false;

    }



    if (activity.Client_Dropped && this.droppedoff) {
      document.getElementById('header').innerHTML = this.lp.translate()[0].end;
      this.cMap.hasCompleted = true;
      this.pop.presentSimpleLoader(this.lp.translate()[0].waiting);
      this.ph.uid = this.uid;
      this.Charged(activity);
      console.log('Dropped user');
      if (this.platform.is('cordova')) {
        this.OneSignal.sendEnd(this.notify_ID);
      }
      this.droppedoff = false;
    }



    if (activity.Client_hasPaid && this.hasPaid || activity.Client_paidCash && this.hasPaid) {
      console.log('Stuff has been Completed');

      this.act.getActiveProfile(this.uid).off('child_changed');
      this.act.getActiveProfile(this.uid).off('child_added');
      this.act.getActiveProfile(this.uid).off('child_removed');
      let navigationExtrasHome: NavigationExtras = {
        queryParams: {
          special: JSON.stringify({ eventId: activity.Driver_ID })
        }
      };
      this.router.navigate(['rate'], navigationExtrasHome).then(() => {
        this.hasPaid = false;
        const currentdate = new Date();
        const datetime = currentdate.getDate() + '/'
          + (currentdate.getMonth() + 1) + '/'
          + currentdate.getFullYear() + ' @ '
          + currentdate.getHours() + ':'
          + currentdate.getMinutes() + ':'
          + currentdate.getSeconds();
        let destiny;

        destiny = activity.Client_destinationName;


        // tslint:disable-next-line: no-trailing-whitespace
        console.log(this.name, this.price, datetime, this.myGcode.locationName, activity.Client_destinationName,
          activity.Driver_RateValue, activity.Driver_RateText);
        this.ph.createHistory(this.name, this.price, datetime, this.myGcode.locationName, destiny).then(suc => {
          this.ph.Completed(this.name, datetime, this.myGcode.locationName, destiny, this.price);
          if (this.referal) {
            if (this.referalID.replace(/[^A-Z,0-9]/gi, '').length === 4) {
              console.log(this.price * 3 / 100);
              this.ph.UpdateRefEarnings(this.price * 3 / 100).then(() => { });
              console.log('Passenger Referal Paid' + this.referal);
            } else {
              this.ph.UpdateRefEarnings2(this.price * 3 / 100).then(() => { });
              console.log('Driver Referal Paid' + this.referal);
            }
          }


          console.log('cleared the db for client');
          if (this.canEnd) {
            this.CloseOnly();

            this.PerformActionOnCancel();
            this.canEnd = false;
          }


        });


      });

    }


  }

  CloseOnly() {
    this.pop.hasCleared = true;
    this.cMap.onbar2 = false;
    this.refreshedTimes = -1;
    this.platform.backButton.subscribe(() => {
      // tslint:disable-next-line: no-string-literal
      navigator['app'].exitApp();
    });
  }



  ToggleChange_1() {
    this.myGcode.locationChange = true;
    this.cMap.onDestinatiobarHide = false;
    this.cMap.map.setClickable(true);
    this.cMap.showDone = true;
    this.hidelocator = false;
    this.pop.SmartLoader('');
    this.cMap.isLocationChange = true;
  }

  ToggleChange_2() {
    this.myGcode.locationChange = false;
    this.cMap.onLocationbarHide = false;
    this.cMap.map.setClickable(true);
    this.cMap.showDone = true;
    this.hidelocator = false;
    this.pop.SmartLoader('');
    this.cMap.isLocationChange = false;
  }


  // tslint:disable-next-line: variable-name
  DriverFound(location, plate, carType, name, seat, locationName, rating, picture, number, userPos,
    // tslint:disable-next-line: variable-name
    client_lat, client_lng, review, driverID) {
    this.location = location; this.plate = plate; this.carType = carType; this.name = name;
    this.seat = seat; this.rating = rating; this.review = review; this.picture = picture;
    this.name = name;
    this.cMap.lat = client_lat;
    this.cMap.lng = client_lng;

    if (location) {
      this.cMap.D_lat = location[0];
      this.cMap.D_lng = location[1];
    } else {

      if (this.bookStarted) {
        this.bookStarted = false;
      }
      this.pop.presentToast(this.lp.translate()[0].nodriver);
    }


    console.log('Driver has been Found');

    if (this.platform.is('cordova')) {
      this.watchPositionSubscription.clearWatch(this.mapTracker);
      this.cMap.map.clear().then(() => {
        this.pop.SmartLoader('');
        this.cMap.setMarkers(location[0], location[1], this.uid);
        this.cMap.isPickedUp = true;
      });
    }

  }



  hideFunctionsOnDriverFound() {
    this.cMap.onbar2 = false;
    this.cMap.onbar3 = true;

    this.cMap.toggleBtn = true;
    this.cMap.onPointerHide = true;
  }





  hideFunctions() {
    this.hideNews = true;
    this.cMap.hasbooked = true;

    console.log('hidefuction Called');
    this.cMap.shove = false;
    /// hide and remove some properties on user request.
    this.cMap.onbar2 = true;

    this.cMap.norideavailable = false;
    this.cMap.canShowchoiceTab = false;

    this.cMap.map.setClickable(false);
    document.getElementById('destination').innerHTML = this.lp.translate()[0].dest;
    this.cMap.map.clear().then(() => {
      this.cMap.map.setCameraZoom(6);
    });
    this.startedNavigation = true;
    this.pop.onRequest = true;

    this.dProvider.calculateBtn = false;


    this.cMap.map.clear();
  }



  Onconnect(activity) {
    this.pop.presentSimpleLoader(this.lp.translate()[0].driverfound);

    if (this.platform.is('cordova')) {
      this.vibration.vibrate(1000);
    }

    this.hideFunctionsOnDriverFound();
    this.pop.uid = this.uid;
    this.cMap.map.setClickable(true);
    this.DriverFound(activity.Driver_location,
      activity.Driver_plate,
      activity.Driver_carType,
      activity.Driver_name,
      activity.Driver_seats,
      activity.Driver_locationName,
      activity.Driver_rating,
      activity.Driver_picture,
      activity.Driver_number,
      activity.Client_locationName,
      activity.Client_location[0],
      activity.Client_location[1],
      activity.Driver_rateText,
      activity.Driver_RegNum
    );
    document.getElementById('destination').innerHTML = this.lp.translate()[0].dest;
    this.storage.set(`currentUserId`, this.uid);


  }



  Charged(activity) {
    if (this.platform.is('cordova')) {
      this.cMap.map.setClickable(false);
    }

    this.price = activity.Client_price; // || activity.Pool_price;
    const location = activity.Client_locationName; // || activity.Pool_locationName;
    const destination = activity.Client_destinationName; // || activity.Pool_destinationName;

    if (this.ph.card != null) {

      if (this.settings.isStripe) {
        this.stripe.ChargeCard(this.price, this.uid);
      } else {
        this.paystack.ChargeCard(this.ph.card, this.ph.month, this.ph.cvc, this.ph.year, this.price * 100, this.ph.email, this.uid);
      }



    } else {
      this.act.getActivityProfile(this.uid).update({
        Client_paidCash: true,
      });
      console.log('cashed used');
    }

  }







}
