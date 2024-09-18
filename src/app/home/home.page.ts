import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { ModalOptions, ModalController, Platform, NavController, AlertController, ToastController, ActionSheetController } from '@ionic/angular';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { OverlayService } from '../services/overlay.service';
import { GeocodeService } from '../services/geocode.service';
import { MapService } from '../services/map.service';
import { AvatarService } from '../services/avatar.service';
import { Drivers } from '../interfaces/drivers';
import { Observable, timer, interval, BehaviorSubject, throwError, Subscription } from 'rxjs';
import { Firestore, onSnapshot, doc, updateDoc, getDoc, collection, setDoc, serverTimestamp } from '@angular/fire/firestore';
import { Marker, Polyline } from '@capacitor/google-maps';
import { AuthService } from '../services/auth.service';
import { EnrouteChatComponent } from '../enroute-chat/enroute-chat.component';
import { NetworkService } from '../services/network.service'
import { Network } from '@capacitor/network';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { PaymentService } from '../services/payment.service';
import { AddCardComponent } from '../add-card/add-card.component';
import { switchMap } from 'rxjs/operators';
import { LatLngLiteral } from '@googlemaps/google-maps-services-js';
import { LatLng } from '@capacitor/google-maps/dist/typings/definitions';
import { Preferences } from '@capacitor/preferences';
import { OnesignalService } from '../one-signal.service';
import OneSignal from 'onesignal-cordova-plugin';


declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  [x: string]: any;
  profile = null;
  @ViewChild('map',  { static: true }) mapRef: ElementRef<HTMLElement>;
  @ViewChild('topBar', { static: true }) topBar: ElementRef<HTMLElement>;
  @ViewChild('bottomBar', { static: true }) bottomBar: ElementRef<HTMLElement>;
  mappy;
  @ViewChild('mapElement') mapElement: ElementRef<HTMLElement>;
  coordinates: Position;
  address: any = 'Unknown';
  bookingStage: any;
  confirmStage: any;
  trackingStage: any;
  searchingStage: any;
  noDriverStage: any;
  autocompleteStage: any;
  drivingToDestinationStage: any;
  data: any;
  cash: any = false;
  state: any = [];
  mapPinStage: boolean;
  D_LatLng: { lat: any; lng: any; };
  mapPinDrag: any;
  showResetLocationButton: any = false;
  showloader: boolean;
  mapClass: any;
  destinationAddress: string = 'Drag To Pick Destination';
  locationAddress: string = null;
  distance: any;
  direction: any;
  actualDestination: any;
  markers: any;
  allDrivers: Observable<Drivers[]>;
  NoDrivers: boolean;
  driverMarker: string;
  driver_duration_apart: number;
  driver_number_of_seats: any;
  price: any = 0;
  carname: any;
  driver_ID: any;
  bounds: any;
  DriverLatLng: { lat: any; lng: any; };
  drivers_Requested: any[];
  current_Request_Number: number = -1;
  Driver_Rejected: any;
  numCalls: any;
  currentDriver: any;
  private countdownActive = false;

  unsubscribe: import("@angular/fire/firestore").Unsubscribe;
  driverInfo: import("@angular/fire/firestore").DocumentData;
  private RIDE_KEY = 'currentRide';
  duration: any = null;
  riderCleared: any;
  updateDriverSubcription: any;
  backButtonSubscription: any;
  canCheck: boolean;
  marker1: any;
  marker2: any;
  actualLocation: string;
  LatLng: { lat: number; lng: number; };
  mapy: boolean;
  AllCarMarkers: Marker[];
  private _carmarkers: { id: string, marker: any }[] = [];
  private rider_marker: any;
  private driver_marker: any;

  cards: import("@angular/fire/firestore").DocumentData[];
  selected: any;
  selectedCard: any;
  closeDrivers: any;
  countDown: any;
  places: import("@angular/fire/firestore").DocumentData[];
  newPoly: string[];
  isConnected: boolean;
  private watchId: any;
  private networkStatus$ = new BehaviorSubject<boolean>(true);
  pollingInterval: any;
  animatedMarker: any;
  driverImage: any;
  private permissionCheckInterval: any;
  savedPaymentMethods: any;
  requestID: string;
  rideHasStarted: boolean;
  driverLocation: { lat: number, lng: number } | null = null;
  stopPolling: boolean = false;
  riderMarker: string;
  routePath: google.maps.MVCArray<google.maps.LatLng> | (google.maps.LatLng | google.maps.LatLngLiteral)[];
  destinationMarker: any;
  D_duration: any;
  routePolyline: any;
  private routeUpdateSubscription: Subscription;

  topBarHeight: any;
  bottomBarHeight:any;



  constructor(
    private authService: AuthService,
    private router: Router,
    private networkService: NetworkService,
    public map: MapService,
    private nav: NavController,
    private platform: Platform,
    private firestore: Firestore,
    private readonly database: AvatarService,
    private ngZone: NgZone,
    private geocode: GeocodeService,
    private overlay: OverlayService,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private payME: PaymentService,
    private toastController: ToastController,
    private actionSheetController: ActionSheetController,
    private onesignal: OnesignalService
  
  ) {
    this.initializeApp();
  }

  async ngOnDestroy() {

    window.removeEventListener('resize', this.ResetMapHeight.bind(this));
    this.clearSubscriptions();
    this.unsubscribe();
    await this.clearPrevMarkers();
    await this.clearAllPolylines();
  }

  ionViewDidEnter(){
    this.EnterBookingStage();
  }


  ionViewWillLeave()
  {
    this.bookingStage = false;
  }


  async ngAfterViewInit() {
    try {
      //alert('Map container height:' + this.mapRef.nativeElement.offsetHeight);
      this.ResetMapHeight();
      window.addEventListener('resize', this.ResetMapHeight.bind(this));
      this.initializeBackButtonCustomHandler();
  
      await this.initializeNetworkMonitoring();
      await this.fetchSavedPaymentMethods();
      this.EnterBookingStage();
      await this.initializeGeolocation();
      await this.initializeMap();
      this.initializeDatabaseSubscriptions();
      this.setupMapListeners();
      await this.map.newMap.enableCurrentLocation(true);


  
      this.price = null;
  
      if (this.LatLng && this.LatLng.lat && this.LatLng.lng) {
        const center: [number, number] = [this.LatLng.lat, this.LatLng.lng];
        const radiusInM = 5000; // Example radius in meters
        await this.fetchAndDisplayDrivers(center, radiusInM);
      }
  
      
    } catch (e) {
      console.error('Error in ngAfterViewInit:', e);
      this.overlay.showAlert('Error in ngAfterViewInit:', 'An error occurred during initialization. Please try again.');
    }
  }
  
  
  async fetchSavedPaymentMethods() {
    try {
      this.savedPaymentMethods = await this.database.getSavedPaymentMethods();
      console.log('Saved Payment Methods:', this.savedPaymentMethods);
      
      // Set default payment method to cash if no cards are saved
      if (this.savedPaymentMethods.length === 0) {
        this.selectedCard = 'cash';
        this.cash = true;
      } else {
        this.selectedCard = this.savedPaymentMethods[0].cardId;
        this.cash = false;
      }
    } catch (error) {
      console.error('Error fetching saved payment methods:', error);
    }
  }

  chooseCard(event: any) {
    this.selectedCard = event.detail.value;
    this.cash = this.selectedCard === 'cash';
    if (!this.cash) {
     // this.processPayment(this.authService.user.email, this.defaultAmount, this.selectedCard);
    }
  }

  async processPayment(email: string, amount: number, cardId: any) {
    this.overlay.showLoader('');

    try {
      const paymentResult = await this.payME.processPaymentWithCardId(email, amount, cardId).toPromise();
      console.log('Payment successful:', paymentResult);
      await this.overlay.showAlert('Success', 'Payment successful!');
    } catch (error) {
      console.error('Error during payment:', error);
      const errorMessage = error.error ? error.error.error : 'An unexpected error occurred.';
      await this.showPaymentErrorModal(errorMessage);
    } finally {
      this.overlay.hideLoader();
    }
  }

  async showPaymentErrorModal(errorMessage: string) {
    const alert = await this.alert.create({
      header: 'Payment Error',
      message: errorMessage,
      buttons: [
        {
          text: 'Add New Card',
          handler: async () => {
            const modal = await this.modalCtrl.create({
              component: AddCardComponent, // Create this component to handle adding a new card
            });
            await modal.present();
            const { data } = await modal.onWillDismiss();
            if (data && data.newCardId) {
              this.selectedCard = data.newCardId;
              this.cash = false;
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }


  ResetMapHeight() {
    
    this.topBarHeight = 0; this.bottomBarHeight = 0;

    this.topBarHeight = this.topBar.nativeElement.offsetHeight - 40;
    this.bottomBarHeight = this.bottomBar.nativeElement.offsetHeight - 40;
    const availableHeight = window.innerHeight + this.bottomBarHeight + this.topBarHeight;
    this.mapRef.nativeElement.style.height = `${availableHeight}px`;
  }


  setMapHeight() {
    if (this.topBar && this.bottomBar) {
      this.topBarHeight = 0; this.bottomBarHeight = 0;
      this.topBarHeight = this.topBar.nativeElement.offsetHeight - 40;
      this.bottomBarHeight = this.bottomBar.nativeElement.offsetHeight - 40;
      const availableHeight = window.innerHeight - this.bottomBarHeight - this.topBarHeight;
      this.mapRef.nativeElement.style.height = `${availableHeight}px`;
     // alert('Map container height SetMap: ' + this.mapRef.nativeElement.style.height)
    }
  }

  setMapHeightCreateAndAddMarkers() {
    const bottomBarHeight = this.bottomBar ? this.bottomBar.nativeElement.offsetHeight : 0;
    const availableHeight = window.innerHeight - bottomBarHeight; // Full height minus bottom bar height
    this.mapRef.nativeElement.style.height = `${availableHeight}px`;
  }

  setMapHeightHandleDrivertoRider() {
      this.topBarHeight = 0; this.bottomBarHeight = 0;
      this.bottomBarHeight = this.bottomBar.nativeElement.offsetHeight;
      const availableHeight = window.innerHeight - this.bottomBarHeight - this.topBarHeight;
      //alert('rrerrerr: ' + availableHeight);
      this.mapRef.nativeElement.style.height = `${availableHeight}px`;
    
  }

  setMapHeightHandleDrivertoDestination() {
    if (this.bottomBar) {
      this.topBarHeight = 0; this.bottomBarHeight = 0;
      this.bottomBarHeight = this.bottomBar.nativeElement.offsetHeight - 40;
      const availableHeight = window.innerHeight - this.bottomBarHeight + 90;
      this.mapRef.nativeElement.style.height = `${availableHeight}px`;
    }
  }

  private async initializeNetworkMonitoring() {
    const status = await Network.getStatus();
    this.isConnected = status.connected;
    this.networkStatus$.next(this.isConnected);
    console.log('Network monitoring initialized. Initial status:', this.isConnected);

    Network.addListener('networkStatusChange', (status) => {
      console.log('Network status changed:', status);
      this.isConnected = status.connected;
      this.networkStatus$.next(this.isConnected);
    });

    this.networkStatus$.subscribe((isConnected) => {
      if (isConnected) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['network']);
      }
    });
  }


  initializeApp() {
    this.platform.ready().then(async () => {
      const rideData = await this.getRideState();
      if (rideData) {
        console.log("There is some ridedata in here....");
       //this.restoreRideState(rideData);
      }
    });
  }

  async saveRideState(rideData: any): Promise<void> {
    const RIDE_KEY = 'rideState';

    await Preferences.set({
      key: RIDE_KEY,
      value: JSON.stringify(rideData)
    });
  }
  
  async getRideState(): Promise<any> {
    const RIDE_KEY = 'rideState';

    const { value } = await Preferences.get({ key: RIDE_KEY });
    return value ? JSON.parse(value) : null;
  }
  
  async clearRideState(): Promise<void> {
    const RIDE_KEY = 'rideState';

    await Preferences.remove({ key: RIDE_KEY });
  }
  // Method to restore the ride state
  restoreRideState(rideData: any) {
    // Set necessary variables to restore the ride state
    this.current_Request_Number = rideData.current_Request_Number;
    this.price = rideData.price;
    this.actualDestination = rideData.actualDestination;
    this.D_LatLng = rideData.D_LatLng;
    this.destinationAddress = rideData.destinationAddress;
    this.LatLng = rideData.LatLng;
  
    // Restore map state and markers
    this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
    });
  
    this.createAndAddMarkers(this.LatLng, this.D_LatLng);
  
    // Navigate to the appropriate stage
    if (rideData.stage) {
      this.setStage(rideData.stage);
    }
  }

  
 
  async initializeGeolocation() {
    try {
      // Check existing permissions
      let permissionStatus = await Geolocation.checkPermissions();
  
      if (permissionStatus.location !== 'granted') {
        // Request permissions
        const permissionRequest = await Geolocation.requestPermissions();
        permissionStatus = permissionRequest;
  
        if (permissionRequest.location !== 'granted') {
          // If the user still hasn't granted permission, prompt them to enable location services
          await this.overlay.showLoader('Enable Device Location...');
          this.startPermissionPolling();
          return;
        }
      }
  
      // If permission is granted, dismiss any alert if shown
      this.overlay.hideLoader();
  
      // Try to get the current position
      const coordinates = await Geolocation.getCurrentPosition();
      this.coordinates = coordinates;
      this.LatLng = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      };
      this.database.updateLocation(this.LatLng);
      console.log('Geolocation initialized:', this.LatLng);
  
      // Start polling the user's position
      this.startPollingPosition();
    } catch (error) {
      console.error('Error initializing geolocation:', error);
      // If any error occurs, prompt the user to enable location services
      await this.overlay.showLoader('Enable Device Location...');
      this.startPermissionPolling();
    }
  }
  
  startPermissionPolling() {
    this.permissionCheckInterval = setInterval(async () => {
      const permissionStatus = await Geolocation.checkPermissions();
      if (permissionStatus.location === 'granted') {
        this.overlay.hideLoader();
        clearInterval(this.permissionCheckInterval);
        // Try to get the current position again if permissions are granted
        const coordinates = await Geolocation.getCurrentPosition();
        this.coordinates = coordinates;
        this.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        };
        console.log('Geolocation initialized:', this.LatLng);
  
        // Start polling the user's position
        this.startPollingPosition();
      }
    }, 1000); // Check every second
  }

  
  startPollingPosition() {
    let lastLatLng = { lat: null, lng: null };
    let lastAddress = null;
  
    this.pollingInterval = setInterval(async () => {
      try {
        const position = await Geolocation.getCurrentPosition();
        const newLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

  
        if (this.hasSignificantLocationChange(lastLatLng, newLatLng, 50)) { // Check if moved at least 50 meters
          lastLatLng = newLatLng;

          this.database.updateLocation(newLatLng);
  
          const address = await this.map.getAddress(newLatLng.lat, newLatLng.lng);
          
          if (address && address.results && address.results.length > 1) {
            const components = address.results[1].address_components;
            if (components.length >= 2) {
              this.locationAddress = components[0].long_name + ' ' + components[1].long_name;
              this.actualLocation = address.results[0].formatted_address;
              if (this.locationAddress !== lastAddress) {
                console.log('Updated Location Address:', this.locationAddress);
                lastAddress = this.locationAddress;
              }
            }
          } else {
            console.log('Unable to update location address');
          }
        }
  
        if (this.networkService.isConnected() && !this.stopPolling) {
          const center: [number, number] = [newLatLng.lat, newLatLng.lng];
          const radiusInM = 5000; // Example radius in meters
          await this.fetchAndDisplayDrivers(center, radiusInM);
        } else {
          console.log('No network connection.', this.stopPolling);
        }
      } catch (err) {
        console.error('Error getting position:', err);
        // Reduce error alerts by not showing specific errors repeatedly
      }
    }, 5000); // Poll every 10 seconds
  }
  
  hasSignificantLocationChange(oldLatLng, newLatLng, minDistance) {
    if (!oldLatLng.lat || !oldLatLng.lng) return true;
    
    const R = 6371e3; // Earth radius in meters
    const φ1 = oldLatLng.lat * Math.PI/180;
    const φ2 = newLatLng.lat * Math.PI/180;
    const Δφ = (newLatLng.lat - oldLatLng.lat) * Math.PI/180;
    const Δλ = (newLatLng.lng - oldLatLng.lng) * Math.PI/180;
  
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
    const distance = R * c; // Distance in meters
  
    return distance >= minDistance;
  }

  
  stopPollingPosition() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
      console.log('Stopped polling position.');
    } else {
      console.log('No polling to stop.');
    }
  }
  
  async initializeMap() {
    try {
      await this.map.createMap(this.mapRef.nativeElement, this.coordinates);
      this.mapy = true;
      this.actualLocation = this.map.actualLocation;
     // console.log('Map initialized:', this.actualLocation, this.locationAddress);
    } catch (error) {
      //console.error('Error initializing map:', error);
      throw new Error('Map initialization failed');
    }
  }
  
  initializeDatabaseSubscriptions() {
    this.database.getKnownPlaces().subscribe((d) => {
      console.log('Received data:', d);
      this.places = d.slice(0, 3);
    });
  }


  initializeBackButtonCustomHandler() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  async handleBackButton() {
    try {
      console.log('Current Stages:', {
        bookingStage: this.bookingStage,
        mapPinStage: this.mapPinStage,
        confirmStage: this.confirmStage,
        autocompleteStage: this.autocompleteStage,
        searchingStage: this.searchingStage,
        noDriverStage: this.noDriverStage,
        trackingStage: this.trackingStage,
        drivingToDestinationStage: this.drivingToDestinationStage,
      });
  
      if (this.bookingStage) {
        await this.showExitConfirmation();
      } else if (this.mapPinStage) {
        await this.goBackToAutoComplete();
        this.EnterBookingStage();
      } else if (this.confirmStage) {
        this.EnterBookingStage();
      } else if (this.autocompleteStage) {
        this.EnterBookingStage();
      } else if (this.searchingStage) {
        await this.showCancelSearchConfirmation();
      } else if (this.noDriverStage) {
        this.EnterBookingStage();
      } else if (this.trackingStage) {
        await this.showCancelRideConfirmation();
      } else if (this.drivingToDestinationStage) {
        await this.showCannotExitAlert();
      } else {
        await this.router.navigate(['..']); // Navigate to the previous route
      }
    } catch (error) {
      console.error('Error handling back button:', error);
    }
  }

  async showExitConfirmation() {
    const alert = await this.alertController.create({
      header: 'Exit App',
      message: 'Are you sure you want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Exit',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }

  async showCancelSearchConfirmation() {
    const alert = await this.alertController.create({
      header: 'Cancel Search',
      message: 'Are you sure you want to cancel the search?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            // Implement logic to cancel the search
            console.log('Search cancelled');
            this.presentCancelRideActionSheet();
          }
        }
      ]
    });
    await alert.present();
  }

  async showCancelRideConfirmation() {
    const alert = await this.alertController.create({
      header: 'Cancel Ride',
      message: 'Are you sure you want to cancel this ride?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            // Implement logic to cancel the ride
            console.log('Ride cancelled');
            this.presentCancelRideActionSheet();
          }
        }
      ]
    });
    await alert.present();
  }

  async showCannotExitAlert() {
    const alert = await this.alertController.create({
      header: 'Cannot Exit',
      message: 'You cannot exit the app during an active trip.',
      buttons: ['OK']
    });
    await alert.present();
  }
  


  
  setupMapListeners() {
    this.map.newMap.setOnCameraIdleListener(async (g) => {
      this.ngZone.run(async () => {
        this.showResetLocationButton = true;
        if (this.mapPinStage) {
          const addressResponse = await this.geocode.getAddress(g.latitude, g.longitude).toPromise();
          this.processAddressResponse(addressResponse);
        }
      });
    });
  }
  
  async logout() {
    await this.authService.logout();
  }
  
  async fetchAndDisplayDrivers(center: [number, number], radiusInM: number): Promise<void> {
    try {
      const drivers: Drivers[] = await this.database.checkDriversWithin(center, radiusInM);
      console.log('Fetched drivers:', drivers);
  
      await this.handleDrivers(drivers);
  
      if (this.drivers_Requested.length > 0) {
        this.current_Request_Number = 0; // Set to the first available driver
        await this.UpdateCarMarker(this.drivers_Requested);
        this.NoDrivers = false;
      } else {
        this.current_Request_Number = -1; // No valid driver
        await this.UpdateCarMarker([]); // Clear all markers if no drivers are requested
        this.NoDrivers = true;
      }
    } catch (error) {
      console.error('Error fetching drivers:', error);
      this.current_Request_Number = -1; // Reset the request number
      await this.UpdateCarMarker([]); // Clear all markers if there's an error
      this.NoDrivers = true;
    }
  }
  
  
  async handleDrivers(drivers: Drivers[]) {
    this.drivers_Requested = [];
    this.closeDrivers = null;
  
    console.log('Handling drivers:', drivers);
  
    if (drivers.length === 0) {
      this.NoDrivers = true;
      console.log('No drivers found.');
      return;
    }
  
    drivers.forEach((driver) => {
      if (driver) {
        console.log('Processing driver:', driver);
        if (driver.duration <= 1000 && driver.onlineState) {
          this.drivers_Requested.push(driver);
          this.updateDriverInfo(driver);
        }
  
        if (!this.closeDrivers || driver.duration < this.closeDrivers.duration) {
          this.closeDrivers = driver;
        }
      } else {
        console.error('Driver is null or undefined:', driver);
      }
    });
  
    if (this.drivers_Requested.length === 0) {
      this.NoDrivers = true;
    } else {
      // Ensuring current_Request_Number is within the bounds
      this.current_Request_Number = Math.min(this.current_Request_Number, this.drivers_Requested.length - 1);
    }
  
    console.log('Final requested drivers list:', this.drivers_Requested);
  }
  
   // Unsubscribe from all active listeners (for cleanup)
   cleanupListeners() {
    Object.values(this.database.activeListeners).forEach(unsubscribe => unsubscribe());
    this.database.activeListeners = {};
  }
 
  
  updateDriverInfo(driver) {
    console.log(this.drivers_Requested);
    this.carname = driver.Driver_car;
    this.driverImage = driver.Driver_imgUrl,
    this.driver_duration_apart = Math.ceil(driver.duration / 60000);
    this.driver_ID = driver.Driver_id;
    this.driver_number_of_seats = driver.seats;
    this.DriverLatLng = {
      lat: driver.Driver_lat,
      lng: driver.Driver_lng
    };
  }
  
  async StartRide() {
    try {
      this.overlay.showLoader('');
      await this.clearPrevMarkers();
      // Clear any existing polylines
    await this.clearAllPolylines();

    this.map.newMap.enableTouch();

    // Ensure the map respects the boundaries of the top and bottom bars
      this.map.newMap.enableCurrentLocation(false);
      await this.BookRide();
    } catch (e) {
      this.overlay.showAlert('Starting Ride Error', e);
    }
  }

async clearMarkers() {
  if (this.marker1) {
    await this.map.newMap.removeMarker(this.marker1);
    this.marker1 = null;
  }

  if (this.marker2) {
    await this.map.newMap.removeMarker(this.marker2.toString());
    this.marker2 = null;
  }

  if (this._carmarkers) {
    for (const { marker } of this._carmarkers) {
      await this.map.newMap.removeMarker(marker); // Assuming marker is the instance
    }
    this._carmarkers = []; // Clear the array after removing markers
  }
}

async BookRide() {
  try {
    if (this.hasValidDriver()) {
      const driver = this.drivers_Requested[this.current_Request_Number];
      const userDocRef = doc(this.firestore, `Drivers`, driver.Driver_id);
      
      // Fetch driver details once
      const docSnapshot = await getDoc(userDocRef);
      
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        console.log('Driver is offline', driver);
        if (data && data.onlineState) {
          this.driverInfo = data;
          // Call requestRideWithDriverDetails to generate requestID and handle ride request
          await this.requestRideWithDriverDetails(driver, userDocRef);
         
          this.updateDriverInfo(driver);
          
        } else {
          console.log('Driver is offline');
          await this.handleNoAvailableDriver();
        }
      } else {
        console.error('Document does not exist.');
        await this.handleNoAvailableDriver();
      }
    } else {
      this.showNoDriversAlert();
    }
  } catch (error) {
    console.error('Error in BookRide:', error);
    this.overlay.showAlert('Error in BookRide:', 'An error occurred while booking the ride.');
  }
}

hasValidDriver(): boolean {
  return this.drivers_Requested?.[this.current_Request_Number]?.Driver_id != null;
}

async requestRideWithDriverDetails(driver, userDocRef) {
  try {
    // Assume that this.database.RequestRideWithRiderDetails returns a Promise that resolves with the requestID
    const requestDetails = {
      latLng: this.LatLng,
      destinationAddress: this.destinationAddress,
      locationAddress: this.locationAddress,
      dLatLng: this.D_LatLng,
      driverId: driver.Driver_id,
      price: this.price,
      cash: this.cash
    };

    this.requestID = await this.database.RequestRideWithRiderDetails(requestDetails);

    // Assuming the request was successful and the requestID was generated
    if (this.requestID) {
      this.currentDriver = driver;
      this.handlePendingState();

      // Optionally listen for updates on the specific ride request document
      const rideRequestDocRef = doc(this.firestore, `Request`, this.requestID);
      const unsub = onSnapshot(rideRequestDocRef, async (doc) => {
        if (doc.exists()) {
          await this.handleRideUpdates(doc);
        } else {
          console.error('Ride request document does not exist.');
        }
      });

      // Store the unsubscribe function if you need to clear it later
      this.unsubscribe = unsub;
    } else {
      throw new Error('Failed to generate requestID');
    }
  } catch (error) {
    console.error('Error in requestRideWithDriverDetails:', error);
    this.overlay.showAlert(error, 'An error occurred while requesting the ride.');
  }
}

showNoDriversAlert() {
  console.error('No valid driver available to book a ride.');
  this.overlay.showAlert('No Drivers ', 'No available drivers found. Please try again later.');
}

async handleNoAvailableDriver() {
  console.log('Driver is not available, moving to next.');
  this.current_Request_Number++;
  if (this.hasValidDriver()) {
    await this.BookRide();
  } else {
    this.showNoDriversAlert();
  }
}

async requestNextDriver() {
  console.log("Requested Next Driver");
  this.current_Request_Number++;
  if (this.hasValidDriver()) {
    console.log("Continua");
    await this.BookRide();
  } else {
    await this.ReturnHome();
    this.showNoDriversAlert();
  }
}

// Make sure to clear the subscription when it's no longer needed
clearSubscriptions() {
  if (this.numCalls) {
    this.numCalls.unsubscribe();
  }
  if (this.countDown) {
    this.countDown.unsubscribe();
  }
  if (this.unsubscribe) {
    this.unsubscribe();
  }
  if (this.routeUpdateSubscription) {
    this.routeUpdateSubscription.unsubscribe();
  }
}

async handleRideUpdates(doc) {
  const data = doc.data();
  if (!data) {
    console.error('No data found in the document.');
    return;
  }
  
  switch (data.status) {
    case 'cancelled':
      await this.handleRideCancellation(data);
      break;
    case 'confirmed':
      await this.handleRideConfirmation(doc);
      break;
    case 'started':
      await this.handleRideStart(doc);
      break;
    case 'stopped':
      await this.handleRideStop(doc);
      break;
    default:
      console.error('Unknown ride status:', data.status);
      break;
  }
}


async handlePendingState() {
  console.log("now pending", );
  await this.getDriverLocation(this.currentDriver.Driver_id); // Fetch the latest driver location
  console.log("This is the driver location: " + this.DriverLatLng);

  await this.clearPrevMarkers();
  await this.clearPolyline(this.newPoly);

  await this.map.newMap.setCamera({
    animate: true,
    animationDuration: 500,
    zoom: 15,
    coordinate: this.DriverLatLng
  });
  this.ngZone.run(()=>{
    this.setMapHeightCreateAndAddMarkers()
  })
  // Driver coming to the rider
  await this.handleDriverToRider(this.DriverLatLng, this.LatLng);
  this.overlay.hideLoader();
  this.EnterSearchingStage();
  await this.startCountdown(20, this.requestID);
}


async presentCancelRideActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Cancel Ride',
    buttons: [
      {
        text: 'Changed my mind',
        handler: () => {
          this.cancelRide('Changed my mind');
        }
      },
      {
        text: 'Driver took too long',
        handler: () => {
          this.cancelRide('Driver took too long');
        }
      },
      {
        text: 'Found another ride',
        handler: () => {
          this.cancelRide('Found another ride');
        }
      },
      {
        text: 'Other',
        handler: () => {
          this.cancelRide('Other');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
  });
  await actionSheet.present();
}

async cancelRide(reason: string) {
  try {
    const rideRef = doc(this.firestore, 'Request', this.requestID);
    const rideSnapshot = await getDoc(rideRef);
    const rideData = rideSnapshot.data();

    if (!rideData) {
      throw new Error('Ride data not found');
    }

    // Update the existing request
    await updateDoc(rideRef, {
      status: 'cancelled',
      cancellationReason: reason,
      canceledBy: 'rider'
    });

    // Create a new document in the cancelledRides collection
    const cancelledRideRef = doc(collection(this.firestore, 'CancelledRides'));
    await setDoc(cancelledRideRef, {
      ...rideData,
      status: 'cancelled',
      cancellationReason: reason,
      canceledBy: 'rider',
      cancelledAt: serverTimestamp(),
      originalRequestId: this.requestID
    });

    const toast = await this.toastController.create({
      message: 'Ride has been cancelled.',
      duration: 2000
    });
    await toast.present();

    // Additional cleanup or state reset can be done here
    await this.ClearRide();
    this.EnterBookingStage();
  } catch (error) {
    console.error('Error cancelling ride:', error);
    const errorToast = await this.toastController.create({
      message: 'Error cancelling ride. Please try again.',
      duration: 3000,
      color: 'danger'
    });
    await errorToast.present();
  }
}



async handleRideCancellation(data) {
  this.stopCountdown();
  await this.clearPrevMarkers();
  this.unsubscribe();
  this.clearSubscriptions();
  if (this.drivers_Requested[this.current_Request_Number + 1] && !this.rideHasStarted) {
    this.current_Request_Number++;
    await this.BookRide();
  } else {
    if (data.canceledBy == 'driver') {
      this.overlay.showAlert('Cancelled', 'Driver cancelled');
    } 
    this.ClearRide();
      this.ReturnHome();
  }
}


async handleRideStart(doc) {
  // alert('handleRideStart');
  await this.clearPrevMarkers();
  await this.clearPolyline(this.newPoly);
  this.currentDriver = doc.data();
  this.rideHasStarted = true;
  this.setMapHeightHandleDrivertoDestination();
    window.addEventListener('resize', this.setMapHeightHandleDrivertoDestination.bind(this));
      await this.handleRiderToDestination(this.DriverLatLng, this.D_LatLng);
      this.canCheck = true;
  
 await this.saveRideState(this.currentDriver);
  this.EnterDrivingToDestinationStage();
}

async handleRideStop(doc) {
  this.clearSubscriptions();
  this.unsubscribe();
  await this.clearPrevMarkers();
  
   await this.clearPolyline(this.newPoly);
  await this.ReturnHome();
  await this.database.createHistory(this.driverInfo);

}


async handleRideConfirmation(doc) {
  this.stopCountdown();
  console.log("trtryyrry rettete");
  await this.clearPrevMarkers();
  await this.clearPolyline(this.newPoly);
 
  this.DriverLatLng = {
    lat: this.driverLocation.lat,
    lng: this.driverLocation.lng
  };
  console.log(this.DriverLatLng);
  
    // Set map height before calculating zoom level
    this.setMapHeightHandleDrivertoRider();
    window.addEventListener('resize', this.setMapHeightHandleDrivertoRider.bind(this));

    await this.handleDriverToRider(this.DriverLatLng, this.LatLng);
  
  this.EnterTrackingStage();
}


getDriverLocation(driverId: string): void {
  this.database.getDriverLocation(driverId)
  .then(location => {
    this.driverLocation = location;
    console.log(this.driverLocation); // For testing purposes
  })
  .catch(error => {
    console.error('Error fetching driver location:', error);
  });
}



async EnterChat(): Promise<void> {
  alert(this.requestID);
const options: ModalOptions = {
    component: EnrouteChatComponent,
    componentProps: {
        userId: this.requestID,
        message: ""
    },
    swipeToClose: true,
};

const modal = await this.modalCtrl.create(options);
return await modal.present();
}

async startCountdown(initialTime, requestId) {
  this.countdownActive = true;
  let timeRemaining = initialTime;

  const updateCountdown = async () => {
    if (!this.countdownActive) {
      console.log('Countdown stopped');
      return;
    }

    if (timeRemaining > 0) {
      try {
        await this.database.UpdateCountDown(timeRemaining, requestId);
        timeRemaining--;
        setTimeout(updateCountdown, 1000);
      } catch (error) {
        console.error('Error updating countdown:', error);
        // Retry after a short delay
        setTimeout(updateCountdown, 2000);
      }
    } else {
      await this.handleCountdownEnd(requestId);
      console.log('Countdown ended');
    }
  };

  updateCountdown();
}

async handleCountdownEnd(requestId) {
  try {
    // Implement a grace period to account for any delays
    setTimeout(async () => {
      await this.clearPrevMarkers();
      await this.requestNextDriver();
    }, 5000); // 5-second grace period
  } catch (error) {
    console.error('Error handling countdown end:', error);
    // Optionally, retry the operation or notify the user
  }
}


stopCountdown() {
  this.countdownActive = false;
}

async goBackToAutoComplete() {
  try {
    this.stopPolling = false;

    this.EnterAutoCompleteStage();
    // Enable current location and set the camera to the initial position
    await this.map.newMap.enableCurrentLocation(true);
 

    await this.ResetState();

    await this.showAutocompleteModal();
    

    console.log('Game state reset successfully');
  } catch (error) {
    console.error('Error resetting game state:', error);
  }
}

private async clearPrevMarkers() {
  try {
     // Clear other markers
     if (this.rider_marker) {
      await this.clearMarker(this.rider_marker);
      this.rider_marker = null;
    }

    // Clear other markers
    if (this.driver_marker) {
      await this.clearMarker(this.driver_marker);
      this.driver_marker = null;
    }

    // Clear other markers
    if (this.destinationMarker) {
      await this.clearMarker(this.destinationMarker);
      this.destinationMarker = null;
    }

    // Clear other markers
    if (this.marker1) {
      await this.clearMarker(this.marker1);
      this.marker1 = null;
    }

    if (this.marker2) {
      await this.clearMarker(this.marker2);
      this.marker2 = null;
    }

    // Clear animated marker
    if (this.animatedMarker) {
      await this.clearMarker(this.animatedMarker);
      this.animatedMarker = null;
    }

    if (this.routeUpdateSubscription) {
      this.routeUpdateSubscription.unsubscribe();
    }


  } catch (e) {
    console.error('Error clearing markers:', e);
  }
}


private async clearMarker(marker) {
  if (marker) {
    try {
      await this.map.newMap.removeMarker(marker);
      console.log("Marker was cleared!");
    } catch (error) {
      console.error('Error clearing marker:', error);
    }
  }
}



async clearPolyline(polyline) {
  if (polyline) {
    try {
      await this.map.newMap.removePolylines(polyline);
      
      console.log('Polyline cleared:', polyline);
      this.newPoly = null;
    } catch (error) {
      console.error('Error clearing polyline:', error);
    }
  } else {
    console.warn('No polyline to clear');
  }
}

async clearAllPolylines() {
  try {
    await this.map.newMap.removePolylines([]);
    console.log('All polylines cleared');
    this.newPoly = null;
  } catch (error) {
    console.error('Error clearing all polylines:', error);
  }
}

async ResetState(){
  try{
    // Clear previous markers
    await this.clearPrevMarkers();

    // Clear any existing polylines
    await this.clearPolyline(this.newPoly);

    await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
    });

    this.ResetMapHeight();
    //window.addEventListener('resize', this.ResetMapHeight.bind(this));
  
    this.map.newMap.enableTouch();
    // Ensure the map respects the boundaries of the top and bottom bars
    this.current_Request_Number = 0;
    this.price = null;
    this.actualDestination = null;
    this.D_LatLng = { lat: null, lng: null };
    this.destinationAddress = 'Unknown location';

    await this.map.newMap.enableCurrentLocation(true);
    
  }catch(e){
    throw new Error(e);
    
  }
}

async showAutocompleteModal(): Promise<void> {
  const options: ModalOptions = {
      component: AutocompleteComponent,
      componentProps: {
          LatLng: this.LatLng,
          locationAddress: this.locationAddress,
      },
      swipeToClose: true,
  };

  const modal = await this.modalCtrl.create(options);
  await modal.present();

  const { data } = await modal.onWillDismiss();
  console.log('Modal dismissed with data:', data);

  this.data = data;

  if (data.pinOnMap) {
      this.EnterMapPinStage();
      this.mapPinDrag = true;
      this.stopPolling = true;

  }

  if (data.home) {
      console.log("Entering Booking Stage...");
      this.EnterBookingStage();
      this.stopPolling = false;
  }

  if (data.searching) {
      this.database.AddKnownPlace(data);
      this.destinationAddress = data.full;
      this.actualDestination = data.whole.full;

      try {
          const latLng = await this.geocode.getLatLng(data.whole.description).toPromise();
          this.D_LatLng = {
              lat: latLng.results[0].geometry.location.lat,
              lng: latLng.results[0].geometry.location.lng,
          };
          console.log("Destination LatLng:", this.D_LatLng);

          await this.getDistanceAndDirections();
      } catch (error) {
          console.error("Error in geocoding:", error);
          this.overlay.showAlert('Error in geocoding:', error.message);
      }
  }
}


async RequestRide(dat) {
  if (!this.NoDrivers) {
    this.destinationAddress = dat.place.full;
    this.actualDestination = dat.place.whole.full;

    try {
      const latLng = await this.geocode.getLatLng(dat.place.whole.description).toPromise();
      this.D_LatLng = {
        lat: latLng.results[0].geometry.location.lat,
        lng: latLng.results[0].geometry.location.lng,
      };

      await this.getDistanceAndDirections();
    } catch (error) {
      console.error("Error in geocoding:", error);
      this.overlay.showAlert('Check Your Network', error.message);
    }
  } else {
    this.EnterNoDriverStage();
    console.log("No drivers available");
  }
}

async getDistanceAndDirections() {
  console.log("getDistanceAndDirections called");
  this.duration = null;
  await this.clearMarkers();
  this.cleanupListeners();
  this.stopPolling = true;

  if (this.D_LatLng && this.D_LatLng.lat) {
    console.log("D_LatLng is set:", this.D_LatLng);

    if (!this.NoDrivers) {
      this.EnterConfirmStage();
    } else {
      this.EnterNoDriverStage();
      console.log("No drivers available");
      return;
    }

    const origin1 = new google.maps.LatLng(this.LatLng.lat, this.LatLng.lng);
    const origin2 = new google.maps.LatLng(this.D_LatLng.lat, this.D_LatLng.lng);

    const request = {
      origin: origin1,
      destination: origin2,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    this.geocode.directions.route(request, async (response, status) => {
      if (status === 'OK') {
        this.direction = response;
        this.distance = response.routes[0].legs[0].distance.value;
        this.bounds = response.routes[0].bounds;
        this.price = await this.database.getPriceEstimate(this.distance);
        this.duration = response.routes[0].legs[0].duration.text;

        await this.createAndAddMarkers(this.LatLng, this.D_LatLng);

        // Call getDistanceAndDirectionsDriver after this part is successful
        await this.getDistanceAndDirectionsDriver();
      } else {
        console.error('Direction ERROR:', response);
        this.overlay.showAlert('Check Your Network', JSON.stringify(response));
      }
    });
  } else {
    this.overlay.showAlert('Drag Map', 'Drag the map and stop on your required destination');
    console.error('D_LatLng or D_LatLng.lat is undefined');
  }
}

async getDistanceAndDirectionsDriver() {
  console.log("getDistanceAndDirectionsDriver called");

  if (!this.NoDrivers) {
    console.log("Driver LatLng:", this.DriverLatLng);

    if (this.DriverLatLng) {
      const origin1 = new google.maps.LatLng(this.LatLng.lat, this.LatLng.lng);
      const origin2 = new google.maps.LatLng(this.DriverLatLng.lat, this.DriverLatLng.lng);

      const request = {
        origin: origin1,
        destination: origin2,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      this.geocode.directions.route(request, (response, status) => {
        if (status === 'OK') {
          this.D_duration = response.routes[0].legs[0].duration.text;
          console.log("Driver duration:", this.D_duration);
        } else {
          console.error('Direction ERROR:', response);
          this.overlay.showAlert('Direction ERROR:', JSON.stringify(response));
        }
      });
    } else {
      console.log("DriverLatLng is undefined");
    }
  } else {
    console.log("No drivers available");
  }
}




async resetLocation(): Promise<void> {
console.log(this.LatLng);
await this.map.newMap.setCamera({
    animate: true,
    animationDuration: 500,
    zoom: 15,
    coordinate: this.LatLng
});
this.showResetLocationButton = false;
}



processAddressResponse(addressResponse) {
  console.log("processAddressResponse : " + addressResponse);
  if (addressResponse) {
      console.log(addressResponse);
      this.actualDestination = this.map.actualLocation;
      const results = addressResponse.results;

      if (results && results.length > 1 && results[1].geometry && results[1].geometry.location) {
          this.D_LatLng = {
              lat: results[1].geometry.location.lat,
              lng: results[1].geometry.location.lng
          };

          const addressComponents = results[1].address_components;
          if (addressComponents && addressComponents.length > 1) {
              this.destinationAddress = `${addressComponents[0].long_name} ${addressComponents[1].long_name}`;
              console.log("this is it " + this.destinationAddress);
          } else {
              console.log('Address components are missing or incomplete.');
              this.destinationAddress = 'Unknown address';
          }
      } else {
          console.log('Results are missing or incomplete.');
          this.D_LatLng = { lat: null, lng: null };
          this.destinationAddress = 'Unknown location';
      }
  } else {
      console.log('Failed to fetch address.');
      this.D_LatLng = { lat: null, lng: null };
      this.destinationAddress = 'Failed to fetch address';
  }
}


async UpdateCarMarker(elements: Drivers[]) {
  console.log('Elements to update car markers:', elements);

  const bounds = new google.maps.LatLngBounds();

  // Create a map of driver IDs to driver elements for quick lookup
  const driverMap = new Map(elements.map(element => [element.Driver_id, element]));

  // Track markers to keep and update
  const updatedMarkers: { id: string, marker: any }[] = [];

  // Remove markers that are not needed and update positions
  for (const { id, marker } of this._carmarkers) {
    const driver = driverMap.get(id);
    if (!driver || !driver.onlineState) {
      console.log(`Removing marker for driver ID: ${id}`);
      //await this.map.newMap.removeMarker(marker); // Remove the marker from the map
    } else if (driver.Driver_lat !== undefined && driver.Driver_lng !== undefined) {
      const latlng = { lat: driver.Driver_lat, lng: driver.Driver_lng };
      // Remove old marker and add a new one with updated position
     // await this.map.newMap.removeMarker(marker);
      // const newMarker = await this.map.newMap.addMarker({
      //   coordinate: latlng,
      //   iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
      //   title: 'Driver',
      //   iconSize: { width: 30, height: 30 }
      // });
     // updatedMarkers.push({ id, marker: newMarker });
      bounds.extend(latlng);
      console.log(`Updated marker for driver ID: ${id}`);
    } else {
      console.error('Invalid driver coordinates:', driver);
    }
  }

  // Add new markers for drivers that are online and not in the existing markers
  for (const element of elements) {
    if (element.onlineState) {
      const existingMarkerIndex = updatedMarkers.findIndex(({ id }) => id === element.Driver_id);
      if (existingMarkerIndex === -1 && element.Driver_lat !== undefined && element.Driver_lng !== undefined) {
        const latlng = { lat: element.Driver_lat, lng: element.Driver_lng };
        console.log(`Adding new marker for driver ID: ${element.Driver_id} at`, latlng);
        try {
          // const marker = await this.map.newMap.addMarker({
          //   coordinate: latlng,
          //   iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
          //   title: 'Driver',
          //   iconSize: { width: 30, height: 30 }
          // });

          // if (marker) {
          //   updatedMarkers.push({ id: element.Driver_id, marker });
          //   bounds.extend(latlng);
          // }
        } catch (error) {
          console.error('Error adding marker:', error);
        }
      }
    }
  }

  // Update the _carmarkers array with the updated markers
  this._carmarkers = updatedMarkers;

  // Center the map around the car markers if there are any markers
  if (updatedMarkers.length > 0) {
    const mapDim = {
      height: this.mapRef.nativeElement.offsetHeight,
      width: this.mapRef.nativeElement.offsetWidth
    };

    const minZoom = 5; // Define your minimum zoom level
    const maxZoom = 18; // Define your maximum zoom level
    
    let zoomLevel = await this.map.getBoundsZoomLevel(bounds, mapDim);
    
    // Constrain the zoom level within the min and max range
    zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel));
    
    console.log('Setting camera with zoom level:', zoomLevel);
    
    await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: zoomLevel,
      coordinate: bounds.getCenter()
    });

    this.map.newMap.fitBounds(bounds);
  } else {
    console.log('No markers to display on the map.');
  }
}



async GoHome() {
  await this.map.newMap.enableCurrentLocation(true);
  this.current_Request_Number = 0;
  this.stopPolling = false;
  this.price = null;
  this.EnterBookingStage();
  await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
  });
}

async GotoSupport() {
  await this.nav.navigateForward('support');
}


async ReturnHome() {
  await this.ResetState();
  this.EnterBookingStage();
  this.stopPolling = false;
  await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
  });
}

async CancelRide() {
  this.overlay.showLoader('Please Wait..');
  await this.clearPrevMarkers();
  // Clear any existing polylines
   await this.clearPolyline(this.newPoly);

  this.unsubscribe();
  this.numCalls.unsubscribe();
  this.riderCleared = true;
  await this.database.cancelRide(this.requestID);
  await this.map.newMap.enableCurrentLocation(true);
  this.current_Request_Number = 0;
  this.price = null;
  this.EnterBookingStage();
  this.overlay.hideLoader();
  await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
  });
}

async ClearRide() {
  this.EnterBookingStage();
 this.clearPrevMarkers();

  // Ensure the polyline is cleared
  console.log("should clear");
  await this.clearPolyline(this.newPoly);
  this.newPoly = null; // Reset polyline reference

  await this.map.newMap.enableCurrentLocation(true);
  this.current_Request_Number = 0;
  this.price = null;
  await this.map.newMap.setCamera({
    animate: true,
    animationDuration: 500,
    zoom: 15,
    coordinate: this.LatLng,
    bearing: 0
  });
}

async CallDriver() {
  // Implement CallDriver logic
}


// Interval in milliseconds for updating the route
UPDATE_INTERVAL = 10000; // Update every 10 seconds

async handleDriverToRider(driverLatLng, riderLatLng) {
  const markerSize = { width: 30, height: 30 };
  const iconAnchor = { x: 10, y: 0 }; // Center bottom of the icon

  try {
    // Add driver marker at the starting position
    const driverMarker = await this.map.newMap.addMarker({
      coordinate: driverLatLng,
      iconUrl: 'assets/icon/car.png',
      title: 'Driver',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 2, y: 0 },
    });
    this.driver_marker = driverMarker;

    // Add rider marker at the destination position
    const riderMarker = await this.map.newMap.addMarker({
      coordinate: riderLatLng,
      iconUrl: this.database.user.photoURL, // Change this to your rider icon URL
      title: 'Rider',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 2, y: 0 },
    });
    this.rider_marker = riderMarker;

    // Function to update route, duration, and distance
    const updateRoute = async () => {
      const request = {
        origin: driverLatLng,
        destination: riderLatLng,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      this.geocode.directions.route(request, async (response, status) => {
        if (status === 'OK') {
          const path = response.routes[0].overview_path.map(latlng => ({
            lat: latlng.lat(),
            lng: latlng.lng()
          }));
          this.duration = response.routes[0].legs[0].duration.text;
          this.distance = response.routes[0].legs[0].distance.text;

          console.log(`Duration: ${this.duration}, Distance: ${this.distance}`);

          const locs = [
            { geoCode: { latitude: driverLatLng.lat, longitude: driverLatLng.lng } },
            { geoCode: { latitude: riderLatLng.lat, longitude: riderLatLng.lng } },
          ];

          const center = this.map.calculateCenter(locs);


          const bounds = new google.maps.LatLngBounds();
          bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
          bounds.extend(new google.maps.LatLng(riderLatLng.lat, riderLatLng.lng));
  
        
          const availableHeight = this.mapRef.nativeElement.offsetHeight;
  
          // Prepare map dimensions for calculating zoom level
          const mapDim = {
            height: availableHeight,
            width: this.mapRef.nativeElement.offsetWidth,
          };
  
          // Calculate zoom level
          const zoomLevel = this.map.getBoundsZoomLevel(bounds, mapDim);
  
          // Manually set zoom level if needed
          const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary

          await this.map.setCameraToLocation({ lat: center.latitude, lng: center.longitude }, adjustedZoomLevel, this.map.calculateBearing(driverLatLng, riderLatLng));
  

          // Update polyline for the route
           // Update polyline for the route
           if (this.newPoly) {
            await this.clearPolyline(this.newPoly);
           }
           await this.addPolyline(driverLatLng, riderLatLng);
          // Animate the driver marker along the path to the rider
          await this.animateMarker(this.driver_marker, path, 'assets/icon/car.png');
        } else {
          console.error('Direction ERROR:', response);
          this.overlay.showAlert('Direction ERROR', JSON.stringify(response));
        }
      });
    };

    // Start updating the route periodically
    const routeUpdate$ = interval(this.UPDATE_INTERVAL).pipe(
      switchMap(() => updateRoute())
    );

    // Subscribe to the interval observable to start updating
    this.routeUpdateSubscription = routeUpdate$.subscribe();

    // Cleanup subscription when the component or context is destroyed
    // Call routeUpdateSubscription.unsubscribe() when needed

  } catch (error) {
    console.error('Error handling driver to rider:', error);
  }
}

async handleRiderToDestination(driverLatLng, destinationLatLng) {
  const markerSize = { width: 30, height: 30 };
  const iconAnchor = { x: 10, y: 0 }; // Center bottom of the icon

  try {
    // Update driver marker to driver's current position
    const driverMarker = await this.map.newMap.addMarker({
      coordinate: driverLatLng,
      iconUrl: 'assets/icon/car.png',
      title: 'Driver',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 0, y: 0 },
    });
    this.driver_marker = driverMarker;

    // Add destination marker
    const destinationMarker = await this.map.newMap.addMarker({
      coordinate: destinationLatLng,
      iconUrl: 'assets/icon/flag.png',
      title: 'Destination',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 0, y: 0 },
    });
    this.destinationMarker = destinationMarker;

    // Function to update route, duration, and distance
    const updateRoute = async () => {
      const request = {
        origin: driverLatLng,
        destination: destinationLatLng,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      this.geocode.directions.route(request, async (response, status) => {
        if (status === 'OK') {
          const path = response.routes[0].overview_path.map(latlng => ({
            lat: latlng.lat(),
            lng: latlng.lng()
          }));
          this.duration = response.routes[0].legs[0].duration.text;
          this.distance = response.routes[0].legs[0].distance.text;

          console.log(`Duration: ${this.duration}, Distance: ${this.distance}`);

          const locs = [
            { geoCode: { latitude: driverLatLng.lat, longitude: driverLatLng.lng } },
            { geoCode: { latitude: destinationLatLng.lat, longitude: destinationLatLng.lng } },
          ];

          const center = this.map.calculateCenter(locs);


          const bounds = new google.maps.LatLngBounds();
          bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
          bounds.extend(new google.maps.LatLng(destinationLatLng.lat, destinationLatLng.lng));
  
        
          const availableHeight = this.mapRef.nativeElement.offsetHeight;
  
          // Prepare map dimensions for calculating zoom level
          const mapDim = {
            height: availableHeight,
            width: this.mapRef.nativeElement.offsetWidth,
          };
  
          // Calculate zoom level
          const zoomLevel = this.map.getBoundsZoomLevel(bounds, mapDim);
  
          // Manually set zoom level if needed
          const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
  
          // Set the camera to focus on the center point with appropriate zoom leve
          await this.map.setCameraToLocation({ lat: center.latitude, lng: center.longitude }, adjustedZoomLevel, this.map.calculateBearing(driverLatLng, destinationLatLng));
  


          // Update polyline for the route
          if (this.newPoly) {
           await this.clearPolyline(this.newPoly);
          }
          await this.addPolyline(driverLatLng, destinationLatLng);
          
          // Animate the driver marker along the path to the destination
          await this.animateMarker(this.driver_marker, path, 'assets/icon/car.png');
        } else {
          console.error('Direction ERROR:', response);
          this.overlay.showAlert('Direction ERROR', JSON.stringify(response));
        }
      });
    };

    // Start updating the route periodically
    const routeUpdate$ = interval(this.UPDATE_INTERVAL).pipe(
      switchMap(() => updateRoute())
    );

    // Subscribe to the interval observable to start updating
    this.routeUpdateSubscription = routeUpdate$.subscribe();

    // Cleanup subscription when the component or context is destroyed
    // Call routeUpdateSubscription.unsubscribe() when needed

  } catch (error) {
    console.error('Error handling rider to destination:', error);
  }
}

async addPolyline(loc: { lat: number, lng: number }, des: { lat: number, lng: number }) {
  try {
    const polylineColor = "#007bff";
    const polylines: Polyline[] = [
      {
        path: [
          { lat: loc.lat, lng: loc.lng },
          { lat: des.lat, lng: des.lng }
        ],
        strokeColor: polylineColor,
        strokeWeight: 8,
        geodesic: true
      }
    ];
    const addedPolylines = await this.map.newMap.addPolylines(polylines);
    if (Array.isArray(addedPolylines) && addedPolylines.length > 0) {
      this.newPoly = addedPolylines; // Change to assign the entire array
      console.log('Polylines added:', this.newPoly);
      return this.newPoly;
    } else {
      throw new Error('Failed to add polyline: Unexpected response format');
    }
  } catch (e) {
    console.error('Error Adding Polyline: ', e);
    throw e; // Re-throw the error to be handled by the caller
  }
}

async createAndAddMarkers(loc, des) {
  const markerSize = { width: 30, height: 30 };
  const iconAnchor = { x: 10, y: 0 }; // Center bottom of the icon

  try {
    this.map.newMap.disableTouch();

    // Add start marker
    this.marker1 = await this.map.newMap.addMarker({
      coordinate: loc,
      iconUrl: 'assets/icon/point.png',
      title: 'Start',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 1, y: 0 },
    });

    // Add destination marker
    this.marker2 = await this.map.newMap.addMarker({
      coordinate: des,
      iconUrl: 'assets/icon/flag.png',
      title: 'Destination',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 1, y: 0 },
    });

    // Calculate the center point between the start and destination
    const locs = [
      { geoCode: { latitude: loc.lat, longitude: loc.lng } },
      { geoCode: { latitude: des.lat, longitude: des.lng } },
    ];

    const center = this.map.calculateCenter(locs);

    // Calculate the bounds
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(new google.maps.LatLng(loc.lat, loc.lng));
    bounds.extend(new google.maps.LatLng(des.lat, des.lng));

    // Set map height before calculating zoom level
    this.setMapHeight();
    const availableHeight = this.mapRef.nativeElement.offsetHeight;

    // Prepare map dimensions for calculating zoom level
    const mapDim = {
      height: availableHeight,
      width: this.mapRef.nativeElement.offsetWidth,
    };

    // Calculate zoom level
    const zoomLevel = this.map.getBoundsZoomLevel(bounds, mapDim);

    // Manually set zoom level if needed
    const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary

    // Set the camera to focus on the center point with appropriate zoom level
    await this.map.setCameraToLocation({ lat: center.latitude, lng: center.longitude }, adjustedZoomLevel, this.map.calculateBearing(loc, des));

    // Add polyline for the route
    const polylineColor = "#007bff";
    const polylines: Polyline[] = [
      {
        path: [
          { lat: loc.lat, lng: loc.lng },
          { lat: des.lat, lng: des.lng }
        ],
        strokeColor: polylineColor,
        strokeWeight: 8,
        geodesic: true
      }
    ];

    // Add polyline to the map
    this.newPoly = await this.map.newMap.addPolylines(polylines);
  } catch (error) {
    console.error('Error creating and adding markers:', error);
  }
}



async animateMarker(marker, path, iconUrl) {
  const markerSize = { width: 50, height: 50 };
  const iconAnchor = { x: 25, y: 50 }; // Center bottom of the icon

  for (let i = 0; i < path.length; i++) {
    await this.map.newMap.removeMarker(marker);
    const coordinate = path[i] instanceof google.maps.LatLng ? 
                       { lat: path[i].lat(), lng: path[i].lng() } : 
                       { lat: path[i].lat, lng: path[i].lng };
    marker = await this.map.newMap.addMarker({
      coordinate: coordinate,
      iconUrl: iconUrl,
      title: 'Moving Marker',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 0, y: 0 },
    });
    await new Promise(resolve => setTimeout(resolve, 100)); // Adjust the interval as needed
  }

  // Store the last position of the animated marker
  this.animatedMarker = marker;
}



async ShowDriverInfoPop() {
  const alert = await this.alert.create({
    header: 'Driver Information',
    message: `
      <div style="text-align: center;">
        <h2 style="font-size: 1.2em; margin-bottom: 0.5em;">Car Name: ${this.carname}</h2>
        <div style="margin: 10px 0;">
          <img src="${this.driverImage}" alt="Driver Image" style="width: 60px; height: 60px; border-radius: 50%;">
        </div>
        <p><strong>Duration Apart:</strong> ${this.driver_duration_apart} minutes</p>
       
        <p><strong>Number of Seats:</strong> ${this.driver_number_of_seats}</p>
        <p><strong>Driver Location:</strong> (${this.DriverLatLng.lat}, ${this.DriverLatLng.lng})</p>
      </div>
    `,
    buttons: ['OK']
  });

  await alert.present();
}


// State management methods
EnterBookingStage() {
  this.setStage('bookingStage');
  this.ResetState();
}

EnterMapPinStage() {
  this.setStage('mapPinStage');
}

EnterConfirmStage() {
  this.setStage('confirmStage');
}

EnterSearchingStage() {
  this.setStage('searchingStage');
}

EnterNoDriverStage() {
  this.setStage('noDriverStage');
}

EnterTrackingStage() {
  this.setStage('trackingStage');
}

EnterAutoCompleteStage() {
  this.setStage('autocompleteStage');
}

EnterDrivingToDestinationStage() {
  this.setStage('drivingToDestinationStage');
}

private setStage(activeStage: string) {
  const stages = {
    bookingStage: false,
    confirmStage: false,
    trackingStage: false,
    searchingStage: false,
    noDriverStage: false,
    autocompleteStage: false,
    mapPinStage: false,
    drivingToDestinationStage: false,
  };
  
  stages[activeStage] = true;
  this.updateStage(stages);
}

private updateStage(stages: { [key: string]: boolean }) {
  this.bookingStage = stages.bookingStage;
  this.confirmStage = stages.confirmStage;
  this.trackingStage = stages.trackingStage;
  this.searchingStage = stages.searchingStage;
  this.noDriverStage = stages.noDriverStage;
  this.mapPinStage = stages.mapPinStage;
  this.autocompleteStage = stages.autocompleteStage;
  this.drivingToDestinationStage = stages.drivingToDestinationStage;
}



async oneSignal() {
  try {
    await this.onesignal.OneSignalIOSPermission();
  } catch(e) {
    console.log(e);
  }
}

// async sendNotificationtoSpecificDevice() {
//   try {
//     const externalUserId = await OneSignal.User.getExternalId();
//     if (!externalUserId) {
//       throw new Error('External User ID is not available');
//     }

//     const notificationResult = await this.onesignal.sendNotification(
//       JSON.stringify({
//         contents: { en: 'This is a test message' },
//         headings: { en: 'Test message' },
//         include_external_user_ids: [externalUserId],
//         data: { type: 'user1' }
//       }),
//       'POST'
//     );

//     console.log('Notification sent successfully:', notificationResult);
//   } catch (e) {
//     console.error('Error sending notification:', e);
//     await this.overlay.showAlert('Notification Error', e.message || 'An error occurred while sending the notification');
//   }
// }




}