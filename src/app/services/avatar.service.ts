import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';
import { collection, collectionData, CollectionReference, doc, docData, DocumentData, endAt, Firestore, getDocs, DocumentChange, orderBy, query, setDoc, startAt, updateDoc, onSnapshot, deleteDoc, serverTimestamp, addDoc, limit, limitToLast, getDoc } from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { distanceBetween, geohashForLocation, geohashQueryBounds} from 'geofire-common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../interfaces/card';
import { Drivers } from '../interfaces/drivers';
import { Rider } from '../interfaces/rider';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  authStateSubscription: any;
  bookRide(data: any) {
    throw new Error('Method not implemented.');
  }
  
  directory: any;
  userUID: string;
  userName: string;
  userEmail: string;
  profile: DocumentData;
  pathM: string;
  countryCode: any;
  user: import("@angular/fire/auth").User;
  public driverCollection: CollectionReference<DocumentData>;
  private driversSubject = new BehaviorSubject<Drivers[]>([]);
  drivers$ = this.driversSubject.asObservable();
  public activeListeners: { [key: string]: () => void } = {};
  constructor(
    private auth: Auth,
    public firestore: Firestore,
    private storage: Storage,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.auth.onAuthStateChanged((user)=>{
      if (user){
        this.user = user;

        this.driverCollection = collection(this.firestore, 'Drivers');
     
        this.http.get("http://ip-api.com/json").subscribe((res: any) => {
          
        console.log('res ', res);


        this.countryCode = res.countryCode || 'NG';
     
     })

     this.getUserProfile(user).pipe(
      tap(data => {
        this.profile = data;
        console.log(this.profile.uid);
      })
    )
    
  
    }
 
  })
  }

   getUserProfile(user) {
    const userDocRef = doc(this.firestore, `Riders/${user.uid}`);
     return docData(userDocRef);
  }

  async getUserType(uid: string): Promise<string | null> {
    const userDocRef = doc(this.firestore, `Drivers/${uid}`);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      return 'driver';
    }
    return null;
  }

  async updateFirestoreAfterPayment(paymentResults: any) {
    try {
      const paymentInfo = {
        paymentResults,
        timestamp: serverTimestamp(),
        userId: this.user.uid,
        userName: this.user.displayName,
        userEmail: this.user.email,
      };

      await setDoc(doc(this.firestore, "Payments", this.user.uid), paymentInfo);
      console.log('Firestore updated with payment info');
    } catch (error) {
      console.error('Error updating Firestore after payment:', error);
      throw error;
    }
  }

  



 // Request a ride with your details and remove the driver from list of available drivers to avoid another request from someone else
async RequestRideWithRiderDetails(user_Loc_coord, des, loco, user_Des_coord, ID, price, cash) {
  try {
      const loc = {
          Loc_lat: user_Loc_coord.lat,
          Loc_lng: user_Loc_coord.lng,
          Rider_id: this.user.uid,
          Rider_name: this.user.displayName,
          Rider_phone: this.user.phoneNumber,
          Rider_imgUrl: this.user.photoURL,
          Rider_rating: this.profile.Rider_rating,
          Des_lat: user_Des_coord.lat,
          Des_lng: user_Des_coord.lng,
          Rider_Location: loco,
          Rider_Destination: des,
          Rider_email: this.user.email,
          countDown: 20,
          cancel: false,
          price: price,
          cash: cash
      };

      const userDocRef = doc(this.firestore, 'Drivers', ID);
      await updateDoc(userDocRef, { onlineState: false });
      await setDoc(doc(this.firestore, "Request", ID), { ...loc });
  } catch (e) {
      throw new Error(e);
  }
}

  async RestartRequestSinceReject(ID){
    const userDocRef = doc(this.firestore, 'Request', ID)
    await updateDoc(userDocRef, {cancel: false});
  }

//delete the driver that has a request sent to him.
  async deleDriverFromRequest(ID){
    await deleteDoc(doc(this.firestore, "Request", ID))
  }

  async cancelRide(ID){
    const userDocRef = doc(this.firestore, 'Request', ID)
    await updateDoc(userDocRef, {cancel: true});
  }

  //Push driver info into the request database
  async PushDriverToRequest(Driver){
    try{
    const loc: Drivers = {
      geohash: Driver.geohash,
      Driver_lat: Driver.Driver_lat,
      Driver_lng: Driver.Driver_lng,
      Driver_id: Driver.Driver_id,
      Driver_name: Driver.Driver_name,
      Driver_car: Driver.Driver_car,
      Driver_imgUrl: Driver.Driver_imgUrl,
      Driver_rating: Driver.Driver_rating,
      distance: 0,
      duration: 0,
      seats: Driver.seats,
      start: false,
      stop: Driver.stop,
      intransit: Driver.intransit,
      cancel: Driver.cancel,
      Driver_cartype: Driver.Driver_cartype,
      Driver_plate: Driver.Driver_plate,
      time: '',
      onlineState: Driver.onlineState
    };
    await updateDoc(doc(this.firestore, "Request",  Driver.Driver_id), { ...loc});
  }catch(e){
    throw new Error(e);
    
  }
   
    console.log('done')
  }

  async getPriceEstimate(distance: number): Promise<number> {
    try {
      // Your pricing logic goes here
      // For example, a simple flat rate per kilometer
      const ratePerKm = 1.5; // Adjust this based on your pricing strategy
      const price = distance * ratePerKm;
      return price;
    } catch (error) {
      console.error('Error calculating price estimate:', error);
      throw error;
    }
  }


  async createHistory(Driver){
    try{
    const loc: Drivers = {
      geohash: Driver.geohash,
      Driver_lat: Driver.Driver_lat,
      Driver_lng: Driver.Driver_lng,
      Driver_id: Driver.Driver_id,
      Driver_name: Driver.Driver_name,
      Driver_car: Driver.Driver_car,
      Driver_imgUrl: Driver.Driver_imgUrl,
      Driver_rating: Driver.Driver_rating,
      distance: 0,
      duration: 0,
      seats: Driver.seats,
      start: true,
      stop: Driver.stop,
      intransit: Driver.intransit,
      cancel: Driver.cancel,
      Driver_cartype: Driver.Driver_cartype,
      Driver_plate: Driver.Driver_plate,
      time: serverTimestamp(),
      onlineState: Driver.onlineState
    };
    await setDoc(doc(this.firestore, "Riders",  `${this.auth.currentUser.uid}/History/${Driver.Driver_id}`), { ...loc});
  }catch(e){
    throw new Error(e);
    
  }
   
    console.log('done')
  }


  async UpdateCountDown(time, Driver){
    try {
      const userDocRef = doc(this.firestore, "Request",  Driver.Driver_id)
      await updateDoc(userDocRef, {
        countDown: time,
      });
      return true;
    } catch (e) {
     // alert(e)
      console.log(e);
      return null;
    }
  }


  async AddKnownPlace(place){
    console.log(this.auth.currentUser.uid);
    console.log(place.full);
    try {
      const userDocRef = doc(this.firestore, "Riders",  `${this.auth.currentUser.uid}/KnownPlaces/${place.full}`)
      await setDoc(userDocRef, {
        place,
      });
      return true;
    } catch (e) {
     // alert(e)
     console.log(e);
      return null;
    }
  }


  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      0.5 - Math.cos(dLat) / 2 +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      (1 - Math.cos(dLon)) / 2;
    return R * 2 * Math.asin(Math.sqrt(a));
  }
  
  async checkDriversWithin(center: [number, number], radiusInM: number): Promise<Drivers[]> {
    try {
      console.log("Center:", center);
      console.log("Radius in meters:", radiusInM);

      const bounds = geohashQueryBounds(center, radiusInM);
      const promises: Promise<Drivers[]>[] = bounds.map((b, index) => {
        const q = query(this.driverCollection, orderBy("geohash"), startAt(b[0]), endAt(b[1]));
        return new Promise<Drivers[]>((resolve, reject) => {
          const unsubscribe = onSnapshot(q, (snapshot) => {
            const drivers = snapshot.docs.map((doc) => {
              const data = doc.data() as Drivers;
              console.log("Driver data from snapshot:", data);
              return data;
            });
            console.log("Query results for bounds", b, drivers);
            resolve(drivers);
            // Unsubscribe once data is fetched
            unsubscribe();
            delete this.activeListeners[index];
          }, (error) => {
            console.error('Error in onSnapshot:', error);
            reject(error);
            // Unsubscribe in case of error
            unsubscribe();
            delete this.activeListeners[index];
          });

          // Store the unsubscribe function to manage listeners
          this.activeListeners[index] = unsubscribe;
        });
      });

      const results = await Promise.all(promises);
      const allDrivers = results.flat();
      console.log("All drivers from queries:", allDrivers);

      const matchingDrivers = allDrivers.filter((driver) => {
        if (!driver.Driver_lat || !driver.Driver_lng) {
          console.error(`Driver ${driver.Driver_id} has missing coordinates:`, driver);
          return false;
        }

        const distanceInKm = this.calculateDistance(center[0], center[1], driver.Driver_lat, driver.Driver_lng);
        const distanceInM = distanceInKm * 1000;
        console.log(`Driver ${driver.Driver_id} distance:`, distanceInM);

        if (distanceInM <= radiusInM) {
          driver.duration = distanceInM / (50 / 3.6); // duration in seconds, assuming 50 km/h speed
          return true;
        } else {
          return false;
        }
      });

      console.log("Matching drivers within radius:", matchingDrivers);
      return matchingDrivers;
    } catch (e) {
      console.error('Error in checkDriversWithin:', e);
      throw new Error(e);
    }
  }
  
  
  

   time_convert(num)
  { 
   var minutes = Math.floor(num / 60);  
   return minutes       
  }

     getDriver() {
      return collectionData(this.driverCollection, {
        idField: 'id',
      }) as Observable<Drivers[]>;
     }


    update(pokemon: Drivers) {
      const pokemonDocumentReference = doc(
        this.firestore,
        `pokemon/${pokemon.Driver_id}`
      );
      return updateDoc(pokemonDocumentReference, { ...pokemon });
    }
  

    async uploadImage(cameraFile: Photo, uid: string): Promise<string | null> {
      const storageRef = ref(this.storage, `avatars/${uid}`);
      try {
        await uploadString(storageRef, cameraFile.base64String, 'base64');
        const imageUrl = await getDownloadURL(storageRef);
        const userDocRef = doc(this.firestore, `Riders/${uid}`);
        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
        
        await updateDoc(userDocRef, { photoURL: imageUrl });
        }else{
          await setDoc(userDocRef, { photoURL: imageUrl });
          await updateDoc(userDocRef, { photoURL: imageUrl });
        }
        return imageUrl;
      } catch (e) {
        console.error('Error uploading image:', e);
        return null;
      }
    }
 

  async createUser(name, email, img, phone, uid) {
    try {
      const loc: Rider = {
        Loc_lat: 0,
        Loc_lng: 0,
        Rider_id: uid,
        Rider_name: name,
        Rider_phone: phone,
        Rider_imgUrl: img,
        Rider_rating: 0,
        Des_lat: 0,
        Des_lng: 0,
        Rider_Location: '',
        Rider_Destination: '',
        Rider_email: email,
        countDown: 0,
        cancel: false,
        price: 0,
        cash: true
      };
      await setDoc(doc(this.firestore, "Riders",  uid), { ...loc});
      return true;
    } catch (e) {
      return null;
    }
  }


   getMessage() {
    const userDocRef = collection(this.firestore, `Messages/${this.auth.currentUser.uid}/messages`);
    return collectionData(userDocRef);
  }

  getChatMessage(ID) {
    const userDocRef = collection(this.firestore, `Request/${ID}/messages`);
    return collectionData(userDocRef);
  }

  async addChatEnRouteMessage(msg, iD) {
    return await addDoc(collection(this.firestore, `Request/${iD}/messages`), {
      msg: msg,
      from: this.auth.currentUser.uid,
      createdAt: serverTimestamp(),
      myMsg: true,
      fromName: this.profile.Rider_name
    });
  }
  
  async updatChatMessageInfo(id){
    return await setDoc(doc(this.firestore, `Request/${id}/`),
    {
      name: this.profile.Rider_name,
      id: this.profile.Rider_id,
      phone: this.profile.Rider_phone,
      email: this.profile.Rider_email,
      new: true
    }
    )
  }
  

  getCards() {
    const userDocRef = collection(this.firestore, `Riders/${this.auth.currentUser.uid}/Cards`);
    return collectionData(userDocRef);
  }

  getKnownPlaces() {
    const userDocRef = collection(this.firestore, `Riders/${this.auth.currentUser.uid}/KnownPlaces`);
   
    return collectionData(userDocRef);
  }

  getAllBlogs() {
    const userDocRef = collection(this.firestore, `Blogs`);
   
    return collectionData(userDocRef);
  }


  getDrivers() {
    const userDocRef = collection(this.firestore, `Drivers`);
    return collectionData(userDocRef);
  }

async addChatMessage(msg) {
  return await addDoc(collection(this.firestore, `Messages/${this.profile.Rider_id}/messages`), {
    msg: msg,
    from: this.auth.currentUser.uid,
    createdAt: serverTimestamp(),
    myMsg: true,
    fromName: this.profile.Rider_name
  });
}

async updateMessageInfo(){
  return await setDoc(doc(this.firestore, `Messages/${this.profile.Rider_id}`),
  {
    name: this.profile.Rider_name,
    id: this.profile.Rider_id,
    phone: this.profile.Rider_phone,
    email: this.profile.Rider_email,
    new: true
  }
  )
}


async createCard(name, number, type, id) {
  try {
    const loc: Card = {
      name: name,
      number: number,
      type: type,
      id: id,
      selected: true
    };
    await setDoc(doc(this.firestore, "Riders",  `${this.profile.Rider_id}/Cards/${name}`), { ...loc});
    return true;
  } catch (e) {
   // alert(e)
    console.log(e);
    return null;
  }

  
}



async updateDriverOnlineState(ID) {
  try {
    const userDocRef = doc(this.firestore, 'Drivers', ID)
    await updateDoc(userDocRef, {
      onlineState: true,
    });
    return true;
  } catch (e) {
    //alert(e)
    console.log(e);
    return null;
  }
}


async updateCArd(name, number, type, id, state) {
  try {
    const loc: Card = {
      name: name,
      number: number,
      type: type,
      id: id,
      selected: state
    };
    await updateDoc(doc(this.firestore, "Riders",  `${this.profile.Rider_id}/Cards/${name}`), { ...loc});
    return true;
  } catch (e) {
   // alert(e)
    console.log(e);
    return null;
  }

}


}