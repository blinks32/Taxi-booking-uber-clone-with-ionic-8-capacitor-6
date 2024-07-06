import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { ModalOptions, ModalController, Platform, NavController, AlertController } from '@ionic/angular';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { OverlayService } from '../services/overlay.service';
import { GeocodeService } from '../services/geocode.service';
import { MapService } from '../services/map.service';
import { AvatarService } from '../services/avatar.service';
import { Drivers } from '../interfaces/drivers';
import { Observable, timer, interval, BehaviorSubject, throwError } from 'rxjs';
import { Firestore, onSnapshot, doc } from '@angular/fire/firestore';
import { Marker, Polyline } from '@capacitor/google-maps';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { EnrouteChatComponent } from '../enroute-chat/enroute-chat.component';
import { NetworkService } from '../services/network.service'
import { Network } from '@capacitor/network';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { PaymentService } from '../services/payment.service';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
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
  locationAddress: string = 'Loading...';
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
  driver_marker: any;
  drivers_Requested: any[];
  current_Request_Number: number = -1;
  Driver_Rejected: any;
  numCalls: any;
  currentDriver: any;
  unsubscribe: import("@angular/fire/firestore").Unsubscribe;
  driverInfo: import("@angular/fire/firestore").DocumentData;
  private RIDE_KEY = 'currentRide';
  duration: any;
  riderCleared: any;
  updateDriverSubcription: any;
  canCheck: boolean;
  rider_marker: any;
  marker1: any;
  marker2: any;
  actualLocation: string;
  LatLng: { lat: number; lng: number; };
  mapy: boolean;
  AllCarMarkers: Marker[];
  private _carmarkers: { id: string, marker: any }[] = [];
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
    private alert: AlertController,
    private payME: PaymentService
  
  ) {
    this.initializeApp();
  }

  async ngOnDestroy() {
    window.removeEventListener('resize', this.setMapHeight.bind(this));
  }

  async makePay()
  {
    try{
    await this.payME.payWithPaystack('playstudio86@gmail.com',  1000, "dollar")
    }catch(e){
       console.log(e)
    }
  }

  async ngAfterViewInit() {
   // await this.makePay();
    console.log('Map container height:', this.mapRef.nativeElement.offsetHeight);
    this.initializeBackButtonCustomHandler();

    this.setMapHeight();
    window.addEventListener('resize', this.setMapHeight.bind(this));

    try {
      this.EnterBookingStage();
      await this.initializeGeolocation();
      await this.initializeMap();
      this.initializeDatabaseSubscriptions();
      this.setupMapListeners();
      await this.map.newMap.enableCurrentLocation(true);
      this.price = null;

      if (this.LatLng && this.LatLng.lat && this.LatLng.lng) {
        const center: [number, number] = [this.LatLng.lat, this.LatLng.lng]; // Example center
        const radiusInM = 5000; // Example radius in meters
        await this.fetchAndDisplayDrivers(center, radiusInM);
      } else {
        console.error('LatLng is not properly initialized:', this.LatLng);
        this.overlay.showAlert('Error', 'Geolocation could not be initialized');
      }
    } catch (e) {
      this.overlay.showAlert('Error', e);
    }

    await this.monitorNetwork();
  }


  setMapHeight() {
    const topBarHeight = this.topBar.nativeElement.offsetHeight;
    const bottomBarHeight = this.bottomBar.nativeElement.offsetHeight;
    const availableHeight = window.innerHeight - topBarHeight - bottomBarHeight;
    this.mapRef.nativeElement.style.height = `${availableHeight}px`;
  }

  async monitorNetwork() {
    const status = await Network.getStatus();
    this.isConnected = status.connected;
    this.networkStatus$.next(this.isConnected);
    console.log("Monitor Network Called..");

    Network.addListener('networkStatusChange', async (status) => {
      console.log("Monitoring Network........");
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
        this.restoreRideState(rideData);
      }
    });
  }

  async saveRideState(rideData: any): Promise<void> {
    await Storage.set({
      key: this.RIDE_KEY,
      value: JSON.stringify(rideData)
    });
  }

  async getRideState(): Promise<any> {
    const { value } = await Storage.get({ key: this.RIDE_KEY });
    return value ? JSON.parse(value) : null;
  }

  async clearRideState(): Promise<void> {
    await Storage.remove({ key: this.RIDE_KEY });
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
      const permissionStatus = await Geolocation.checkPermissions();
      
      if (permissionStatus.location !== 'granted') {
        const permissionRequest = await Geolocation.requestPermissions();
        
        if (permissionRequest.location !== 'granted') {
          throw new Error('Geolocation permission not granted');
        }
      }
  
      const coordinates = await Geolocation.getCurrentPosition();
      this.coordinates = coordinates;
      this.LatLng = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      };
      console.log('Geolocation initialized:', this.LatLng);
  
      // Start watching the user's position
      this.startPollingPosition();
    } catch (error) {
      console.error('Error initializing geolocation:', error);
      throw new Error('Geolocation initialization failed');
    }
  }
  
  startPollingPosition() {
    this.pollingInterval = setInterval(async () => {
      try {
        const position = await Geolocation.getCurrentPosition();
        this.LatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log('Position updated:', this.LatLng);
  
        if (this.networkService.isConnected()) {
          const center: [number, number] = [this.LatLng.lat, this.LatLng.lng]; // Example center
          const radiusInM = 5000; // Example radius in meters
          await this.fetchAndDisplayDrivers(center, radiusInM);
        } else {
          this.overlay.showAlert('No Network', 'Please check your network connection.');
        }
      } catch (err) {
        console.error('Error getting position:', err);
      }
    }, 10000); // Poll every 10 seconds
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
      this.locationAddress = this.map.locationAddress;
     // console.log('Map initialized:', this.actualLocation, this.locationAddress);
    } catch (error) {
      //console.error('Error initializing map:', error);
      throw new Error('Map initialization failed');
    }
  }
  
  initializeDatabaseSubscriptions() {
    this.database.getCards().subscribe((d) => {
      console.log(d);
      this.cards = d;
      this.cards.forEach(element => {
        if (element.selected) {
          this.selected = element;
          this.selectedCard = element.name;
          if (this.selectedCard === 'cash') this.cash = true;
          console.log(this.selectedCard);
        }
      });
    });
  
    this.database.getKnownPlaces().subscribe((d) => {
      this.places = d.slice(0, 3);
      console.log(d);
    });
  }


  initializeBackButtonCustomHandler(): void {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Back button pressed');
    });
  
    App.addListener('backButton', ({ canGoBack }) => {
      if (!canGoBack) {
        // Show a confirmation dialog before exiting the app
        if (confirm('Are you sure you want to exit the app?')) {
          App.exitApp();
        }
      } else {
        console.log("back clicked");
        // Use Ionic's NavController to navigate back
        // Replace 'NavController' with your specific navigation method
        // this.navCtrl.pop();
        window.history.back();
      }
    });

    // App.addListener('appStateChange', (state) => {
    //   if (!state.isActive) {
    //     this.stopPollingPosition();
    //   } else {
    //     this.startPollingPosition();
    //   }
    // });
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
        await this.UpdateCarMarker(this.drivers_Requested);
        this.NoDrivers = false;
      } else {
        await this.UpdateCarMarker([]); // Clear all markers if no drivers are requested
        this.NoDrivers = true;
      }
    } catch (error) {
      console.error('Error fetching drivers:', error);
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
      console.log('Processing driver:', driver);
      if (driver.duration <= 1000 && driver.onlineState === true) {
        this.drivers_Requested.push(driver);
        this.updateDriverInfo(driver);
      }
  
      if (!this.closeDrivers || driver.duration < this.closeDrivers.duration) {
        this.closeDrivers = driver;
      }
    });
  
    if (this.drivers_Requested.length === 0) {
      this.NoDrivers = true;
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
  
async chooseCard(even) {
  console.log(even);
  this.overlay.showLoader('Please wait..');
  await this.database.updateCArd(this.selected.name, this.selected.number, this.selected.type, this.selected.id, false);
  this.cards.forEach(async element => {
      if (element.name == even.detail.value) {
          await this.database.updateCArd(element.name, element.number, element.type, element.id, true);
          this.overlay.hideLoader();
      }
  });
}

async StartRide() {
  try {
      await this.clearPrevMarkers();
      this.map.newMap.enableCurrentLocation(false);
      await this.BookRide();
  } catch (e) {
      this.overlay.showAlert('Marker Error', e);
  }
}

async clearMarkers() {
  if (this.marker1) {
    await this.map.newMap.removeMarker(this.marker1.toString());
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
  let driver = this.drivers_Requested[this.current_Request_Number];
  console.log(driver.Driver_id);
  const userDocRef = doc(this.firestore, `Request`, driver.Driver_id);

  const unsub = onSnapshot(doc(this.firestore, "Drivers", driver.Driver_id), async (doc) => {
      await this.handleDriverSnapshot(doc, driver, userDocRef, unsub);
  });
}

async handleDriverSnapshot(doc, driver, userDocRef, unsub) {
  if (this.price && doc.data().onlineState === true) {
      unsub();
      await this.database.RequestRideWithRiderDetails(
          this.LatLng, 
          this.destinationAddress, 
          this.locationAddress, 
          this.D_LatLng, 
          driver.Driver_id, 
          this.price, 
          this.cash
      );
      this.currentDriver = driver;
      await this.handleDriver(userDocRef);
  } else {
      await this.handleNoAvailableDriver(driver);
  }
}

async handleDriver(userDocRef) {
  this.DriverLatLng = {
      lat: this.currentDriver.Driver_lat,
      lng: this.currentDriver.Driver_lng
  };
  await this.createAndMoveMarkersOnRealtime(this.DriverLatLng, false, false);
  this.overlay.hideLoader();
  this.EnterSearchingStage();
  this.startTimer(this.currentDriver, 20);

  this.numCalls = timer(20000).subscribe(async () => {
      this.countDown.unsubscribe();
      await this.requestNextDriver();
  });

  this.unsubscribe = onSnapshot(userDocRef, async (doc) => {
      await this.handleRideUpdates(doc);
  });
}

async handleNoAvailableDriver(driver) {
  if (this.countDown) this.countDown.unsubscribe();
  if (this.drivers_Requested[this.current_Request_Number + 1] != null) {
      this.current_Request_Number++;
      await this.BookRide();
  } else {
      this.GoHome();
      this.overlay.showAlert('Busy', 'The Requested Driver is currently Busy, Please Try again');
  }
}

async requestNextDriver() {
  if (this.drivers_Requested[this.current_Request_Number + 1] != null) {
      this.current_Request_Number++;
      await this.BookRide();
  } else {
      this.GoHome();
      this.clearPrevMarkers();
  }
}

async handleRideUpdates(doc) {
  if (doc.data().cancel === true) {
      await this.handleRideCancellation();
  } else if (doc.data().start === true) {
      await this.handleRideStart(doc);
  } else if (doc.data().stop === true) {
      await this.handleRideStop(doc);
  } else if (!doc.data().cancel && !doc.data().start && !doc.data().stop && doc.data().Driver_name) {
      await this.handleDriverArrival(doc);
  }
}

async handleRideCancellation() {
  this.countDown.unsubscribe();
  this.numCalls.unsubscribe();
  if (this.drivers_Requested[this.current_Request_Number + 1]) {
      this.current_Request_Number++;
      await this.BookRide();
  } else {
      this.unsubscribe();
      this.GoHome();
  }
  await this.clearPrevMarkers();
}

async handleRideStart(doc) {
  this.driverInfo = doc.data();
  if (this.canCheck) {
      this.canCheck = false;
      this.clearPrevMarkers();
      this.updateDriverSubcription = timer(4000).subscribe(async () => {
          await this.createAndMoveMarkersOnRealtime(this.D_LatLng, true, true);
          this.canCheck = true;
      });
  }
  await this.saveRideState(this.driverInfo);
  this.EnterDrivingToDestinationStage();
}

async handleRideStop(doc) {
  this.unsubscribe();
  this.ClearRide();
  await this.database.createHistory(doc.data());
  if (this.countDown) this.countDown.unsubscribe();
}

async handleDriverArrival(doc) {
  this.driverInfo = doc.data();
  this.countDown.unsubscribe();
  this.numCalls.unsubscribe();
  this.DriverLatLng = {
      lat: doc.data().Driver_lat,
      lng: doc.data().Driver_lng
  };
  if (this.canCheck) {
      this.canCheck = false;
      this.clearPrevMarkers();
      this.updateDriverSubcription = timer(4000).subscribe(async () => {
          this.canCheck = true;
          await this.createAndMoveMarkersOnRealtime(this.DriverLatLng, true, false);
      });
  }
  this.EnterTrackingStage();
}

async EnterChat(): Promise<void> {
const options: ModalOptions = {
    component: EnrouteChatComponent,
    componentProps: {
        userId: this.driverInfo.Driver_id,
        message: ""
    },
    swipeToClose: true,
};

const modal = await this.modalCtrl.create(options);
return await modal.present();
}

startTimer(driver, sec) {
this.countDown = interval(1000).subscribe(async () => {
    await this.database.UpdateCountDown(sec, driver);
    sec--;
    if (sec == 0) {
        this.countDown.unsubscribe();
    }
});
}

async goBackToAutoComplete() {
  try {
    // Enable current location and set the camera to the initial position
    await this.map.newMap.enableCurrentLocation(true);
    await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
    });

    await this.ResetState();

    await this.showAutocompleteModal();

    console.log('Game state reset successfully');
  } catch (error) {
    console.error('Error resetting game state:', error);
  }
}

private async clearPrevMarkers() {
  try{
  for (const carMarker of this._carmarkers) {
    if (carMarker.marker) {
      await this.clearMarker(carMarker.marker);
      console.log("Car marker was cleared!!!!!!");
    }
  }
  this._carmarkers = [];

  if (this.driver_marker){
  await this.clearMarker(this.driver_marker);
  this.driver_marker = null;
  }

  if (this.rider_marker){
  await this.clearMarker(this.rider_marker);
  this.rider_marker = null;
  }

  if (this.marker1){
    await this.clearMarker(this.marker1);
    this.marker1 = null;
    }
  
    if (this.marker2){
    await this.clearMarker(this.marker2);
    this.marker2 = null;
    }

  if (this.animatedMarker) {
    await this.clearMarker(this.animatedMarker);
    this.animatedMarker = null;
  }

}catch(e){
  throwError(e);
}

}

private async clearMarker(marker) {
  if (marker) {
    await this.map.newMap.removeMarker(marker);
    console.log("Marker was cleared!!!!!!");
    marker = null;
  }
}

async clearPolyline(polyline) {
  if (polyline) {
    try {
      await this.map.newMap.removePolylines([polyline]);
      console.log('Polyline cleared:', polyline);
      this.newPoly = null;
    } catch (error) {
      console.error('Error clearing polyline:', error);
    }
  } else {
    console.warn('No polyline to clear');
  }
}

async ResetState(){
  try{
    // Clear previous markers
    await this.clearPrevMarkers();

    // Clear any existing polylines
    await this.clearPolyline(this.newPoly);

    const availableHeight = 1000;

    this.map.newMap.enableTouch();

    this.setMapHeight();
    window.addEventListener('resize', this.setMapHeight.bind(this));

    // Ensure the map respects the boundaries of the top and bottom bars
    this.mapRef.nativeElement.style.height = `${availableHeight}px`;

    // Start watching the user's position
    this.startPollingPosition();

    // Reset important variables
    this.current_Request_Number = 0;
    this.price = null;
    this.actualDestination = null;
    this.D_LatLng = { lat: null, lng: null };
    this.destinationAddress = 'Unknown location';
    
  }catch(e){
    throw new Error(e);
    
  }
}

async showAutocompleteModal(): Promise<void> {
  this.stopPollingPosition();
const options: ModalOptions = {
    component: AutocompleteComponent,
    componentProps: {
        LatLng: this.LatLng,
        locationAddress: this.locationAddress
    },
    swipeToClose: true,
};

const modal = await this.modalCtrl.create(options);
modal.present();

const { data } = await modal.onWillDismiss();
console.log(data);

this.data = data;

if (data.pinOnMap) {
    this.EnterMapPinStage();
    this.mapPinDrag = true;
}

if (data.home) {
  console.log("NORMAL!!!!!!!!!");
    this.EnterBookingStage();
    this.startPollingPosition();
}

if (data.searching) {
    this.database.AddKnownPlace(data);
    this.destinationAddress = data.full;
    this.actualDestination = data.whole.full;

    const latLng = await this.geocode.getLatLng(data.whole.description).toPromise();
    this.D_LatLng = {
        lat: latLng.results[0].geometry.location.lat,
        lng: latLng.results[0].geometry.location.lng,
    };
    console.log("i was called");
    this.getDistanceAndDirections();
}
}

// Modify your existing method to use fetchAndDisplayDrivers
async RequestRide(dat) {
  if (!this.NoDrivers) {
    this.destinationAddress = dat.place.full;
    this.actualDestination = dat.place.whole.full;

    const latLng = await this.geocode.getLatLng(dat.place.whole.description).toPromise();
    this.D_LatLng = {
      lat: latLng.results[0].geometry.location.lat,
      lng: latLng.results[0].geometry.location.lng,
    };
    console.log("i was called");
    this.getDistanceAndDirections();
  } else {
    this.EnterNoDriverStage();
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

async getDistanceAndDirections() {
 
  await this.clearMarkers();
  this.cleanupListeners();
  this.stopPollingPosition();

  if (this.D_LatLng && this.D_LatLng.lat) {
    console.log("This is DLAT: " + this.closeDrivers);

    if (!this.NoDrivers) {
      this.EnterConfirmStage();
    } else {
      this.EnterNoDriverStage();
      console.log("No drivers available");
      return
    }

    const origin1 = new google.maps.LatLng(this.LatLng.lat, this.LatLng.lng);
    const origin2 = new google.maps.LatLng(this.D_LatLng.lat, this.D_LatLng.lng);

    const request = {
      origin: origin1,
      destination: origin2,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    this.geocode.directions.route(request, async (response, status) => {
      if (status == 'OK') {
        this.direction = response;
        this.distance = response.routes[0].legs[0].distance.value;
        this.bounds = response.routes[0].bounds;
        this.price = await this.database.getPriceEstimate(this.distance);

        // if (this.closeDrivers && this.closeDrivers.length > 0) {
        //   console.log("closeDrivers:", this.closeDrivers);
          await this.createAndAddMarkers(this.LatLng, this.D_LatLng);
        // } else {
        //   console.error("closeDrivers is undefined or empty.");
        // }
      } else {
        this.overlay.showAlert('Direction ERROR', JSON.stringify(response));
      }
    });
  } else {
    this.overlay.showAlert('Drag Map', 'Drag the map and stop on your required destination');
    console.error('D_LatLng or D_LatLng.lat is undefined');
  }
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
      await this.map.newMap.removeMarker(marker); // Remove the marker from the map
    } else if (driver.Driver_lat !== undefined && driver.Driver_lng !== undefined) {
      const latlng = { lat: driver.Driver_lat, lng: driver.Driver_lng };
      // Remove old marker and add a new one with updated position
      await this.map.newMap.removeMarker(marker);
      const newMarker = await this.map.newMap.addMarker({
        coordinate: latlng,
        iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
        title: 'Driver',
        iconSize: { width: 30, height: 30 }
      });
      updatedMarkers.push({ id, marker: newMarker });
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
          const marker = await this.map.newMap.addMarker({
            coordinate: latlng,
            iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
            title: 'Driver',
            iconSize: { width: 30, height: 30 }
          });

          if (marker) {
            updatedMarkers.push({ id: element.Driver_id, marker });
            bounds.extend(latlng);
          }
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
  await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
  });
}

async CancelRide() {
  this.overlay.showLoader('Please Wait..');
  this.clearPrevMarkers();

  //await this.clearPolyline(this.newPoly);

  this.unsubscribe();
  this.numCalls.unsubscribe();
  this.riderCleared = true;
  await this.database.cancelRide(this.currentDriver.Driver_id);
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

async createAndMoveMarkersOnRealtime(otherLatLng, state, isDestination) {
  const origin1 = new google.maps.LatLng(this.LatLng.lat, this.LatLng.lng);
  const origin2 = new google.maps.LatLng(otherLatLng.lat, otherLatLng.lng);

  const request = {
    origin: origin2,
    destination: origin1,
    travelMode: google.maps.TravelMode.DRIVING,
  };

  this.geocode.directions.route(request, async (response, status) => {
    if (status == 'OK') {
      this.bounds = response.routes[0].bounds;
      this.duration = response.routes[0].legs[0].duration.text;

      const markerUrl = isDestination ? 'https://i.ibb.co/bWx9V64/favourite.png' : 'https://i.ibb.co/KDy365b/hatchback.png';
      const markerSize = { width: 30, height: 30 };

      try {
        // Add driver marker
        this.marker1 = await this.map.newMap.addMarker({
          coordinate: otherLatLng,
          iconUrl: markerUrl,
          title: 'Driver',
          iconSize: markerSize
        });

        // Add rider marker
        this.marker2 = await this.map.newMap.addMarker({
          coordinate: this.LatLng,
          iconUrl: "https://i.ibb.co/N9LXGk3/home-1.png",
          title: 'Rider',
          iconSize: markerSize
        });

        // Calculate the center point between the driver and rider
        const locs = [
          {
            geoCode: {
              latitude: this.LatLng.lat,
              longitude: this.LatLng.lng
            }
          },
          {
            geoCode: {
              latitude: otherLatLng.lat,
              longitude: otherLatLng.lng
            }
          }
        ];

        const center = this.map.calculateCenter(locs);

        // Set map padding if state is true
        if (state) {
          await this.map.newMap.setPadding({
            top: 0,
            left: 0,
            right: 0,
            bottom: 600
          });
        }

        // Prepare map dimensions for calculating zoom level
        const mapDim = {
          height: this.mapRef.nativeElement.offsetHeight / 2,
          width: this.mapRef.nativeElement.offsetWidth
        };

        // Set the camera to focus on the center point with appropriate zoom level
        await this.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: this.map.getBoundsZoomLevel(this.bounds, mapDim),
          coordinate: { lat: center.latitude, lng: center.longitude },
          bearing: 0
        });

        this.canCheck = true;
      } catch (error) {
        console.error('Error adding markers:', error);
      }
    } else {
      console.error('Direction ERROR:', response);
    }
  });
}


async addPolyline(loc: { lat: number, lng: number }, des: { lat: number, lng: number }) {
  const polylineColor = "#007bff";
  const polylines: Polyline[] = [
    {
      path: [
        { lat: loc.lat, lng: loc.lng },
        { lat: des.lat, lng: des.lng }
      ],
      strokeColor: polylineColor,
      strokeWeight: 10,
      geodesic: true
    }
  ];

  this.newPoly = await this.map.newMap.addPolylines(polylines);
  return polylines[0].path; // Return the path directly
}

async createAndAddMarkers(loc, des) {
  const markerSize = { width: 50, height: 50 };
  const iconAnchor = { x: 25, y: 50 }; // Center bottom of the icon

  try {
    this.map.newMap.disableTouch();

    // Add start marker
    this.marker1 = await this.map.newMap.addMarker({
      coordinate: loc,
      iconUrl: 'https://i.imgur.com/UyFqT7E.png',
      title: 'Start',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 0, y: 0 },
    });

    // Add destination marker
    this.marker2 = await this.map.newMap.addMarker({
      coordinate: des,
      iconUrl: 'https://i.imgur.com/csK5kcM.png',
      title: 'Destination',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 0, y: 0 },
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
    await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: adjustedZoomLevel,
      coordinate: { lat: center.latitude, lng: center.longitude },
      bearing: this.map.calculateBearing(loc, des),
    });

    // Add polyline between the start and destination
    const path = await this.addPolyline(loc, des);

    // Convert path to an array if necessary
    const plainPath = Array.isArray(path) ? path : path.getArray();

    // Ensure the path is in the correct order (from start to destination)
    const forwardPath = plainPath.slice(); // Create a copy of the path array

    // Create marker for animation with user photo URL starting from the start location
    this.animatedMarker = await this.map.newMap.addMarker({
      coordinate: loc, // Start from the start marker's position
      iconUrl: this.database.user.photoURL,
      title: 'Moving Marker',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 0, y: 0 },
    });

    const animateMarker = async (marker, path) => {
      for (let i = 0; i < path.length; i++) {
        await this.map.newMap.removeMarker(marker);
        const coordinate = path[i] instanceof google.maps.LatLng ? 
                           { lat: path[i].lat(), lng: path[i].lng() } : 
                           { lat: path[i].lat, lng: path[i].lng };
        marker = await this.map.newMap.addMarker({
          coordinate: coordinate,
          iconUrl: this.database.user.photoURL,
          title: 'Moving Marker',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: { x: 0, y: 0 },
        });
        await new Promise(resolve => setTimeout(resolve, 100)); // Adjust the interval as needed
      }
      // Store the last position of the animated marker
      this.animatedMarker = marker;
    };

    // Animate marker along the forward path (from start to destination)
    await animateMarker(this.animatedMarker, forwardPath);

  } catch (error) {
    console.error('Error adding markers and polyline:', error);
  }
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
        <p><strong>Driver ID:</strong> ${this.driver_ID}</p>
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
  this.drivingToDestinationStage = stages.drivingToDestinationStage;
}


}