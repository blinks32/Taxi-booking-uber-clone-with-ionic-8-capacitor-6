import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collection, collectionData, CollectionReference, doc, docData, DocumentData, endAt, Firestore, getDocs, orderBy, query, setDoc, startAt, updateDoc, onSnapshot, deleteDoc, serverTimestamp, addDoc, getDoc, where, writeBatch } from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { geohashForLocation, geohashQueryBounds} from 'geofire-common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../interfaces/card';
import { Drivers } from '../interfaces/drivers';
import { Rider } from '../interfaces/rider';
import { AuthService } from './auth.service';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  authStateSubscription: any;
  isRandom: boolean;
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
    this.auth.onAuthStateChanged(async (user)=>{
      if (user){
        this.user = user;

        this.driverCollection = collection(this.firestore, 'Drivers');
     
        this.http.get("http://ip-api.com/json").subscribe((res: any) => {
          
        console.log('res ', res);
       


        this.countryCode = res.countryCode || 'NG';
     
     })
     

     await this.loadUserProfile();
    
  
    }
 
  })
  
  }


  async loadUserProfile() {
    const profileDoc = await getDoc(doc(this.firestore, 'Riders', this.user.uid));
    if (profileDoc.exists()) {
        this.profile = profileDoc.data();
    } else {
        throw new Error('User profile not initialized');
    }
}


  getCards(): Observable<Card[]> {
    const userDocRef = collection(this.firestore, `Riders/${this.auth.currentUser.uid}/Cards`);
    return collectionData(userDocRef) as Observable<Card[]>;
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


  async RequestRideWithRiderDetails(requestDetails) {
    if (!this.profile) {
      throw new Error('Profile not initialized');
    }
    try {
      const driverDocRef = doc(this.firestore, 'Drivers', requestDetails.driverId);
      const driverDocSnap = await getDoc(driverDocRef);
  
      if (!driverDocSnap.exists()) {
        throw new Error('Driver does not exist');
      }
  
      const driverData = driverDocSnap.data();
      const requestRef = doc(collection(this.firestore, 'Request'));
  
      const loc = {
        Loc_lat: requestDetails.latLng.lat,
        Loc_lng: requestDetails.latLng.lng,
        Rider_id: this.user.uid,
        Rider_name: this.user.displayName,
        Rider_phone: this.user.phoneNumber,
        Rider_imgUrl: this.user.photoURL,
        Rider_rating: this.profile.Rider_rating || 0,
        Des_lat: requestDetails.dLatLng.lat,
        Des_lng: requestDetails.dLatLng.lng,
        Rider_Location: requestDetails.locationAddress,
        Rider_Destination: requestDetails.destinationAddress,
        Rider_email: this.user.email,
        countDown: 20,
        cancel: false,
        price: requestDetails.price,
        cash: requestDetails.cash,
        status: 'pending',
        driverDetails: {
          Driver_id: driverData.Driver_id,
          Driver_name: driverData.Driver_name,
          Driver_phone: driverData.Driver_phone,
          Driver_imgUrl: driverData.Driver_imgUrl,
          Driver_rating: driverData.Driver_rating,
          Driver_car: driverData.Driver_car,
          Driver_cartype: driverData.Driver_cartype,
          Driver_plate: driverData.Driver_plate,
          OneSignalId: driverData.OneSignalId // Add OneSignal ID here
        },
        requestId: requestRef.id,
        driverId: requestDetails.driverId
      };
  
      const batch = writeBatch(this.firestore);
      
      // Update driver document
      batch.update(driverDocRef, {
        onlineState: false,
        currentRequestId: requestRef.id
      });
      
      // Set request document
      batch.set(requestRef, loc);
      
      // Add initial message to messages subcollection
      const messagesRef = collection(requestRef, 'messages');
      const initialMessage = {
        msg: 'Ride request initiated',
        from: 'system',
        createdAt: serverTimestamp(),
        myMsg: false,
        fromName: 'System'
      };
      batch.set(doc(messagesRef), initialMessage);

  
      await batch.commit();
  
      return requestRef.id;
    } catch (e) {
      throw new Error(`Error in RequestRideWithRiderDetails: ${e.message}`);
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
    await updateDoc(userDocRef, {status: true});
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

  getDriverLocation(driverId: string): Promise<{ lat: number, lng: number } | null> {
    return new Promise((resolve, reject) => {
      const driverDocRef = doc(this.firestore, 'Drivers', driverId);
      onSnapshot(driverDocRef, (doc) => {
        const data = doc.data();
        if (data && data.Driver_lat) {
          const driverLocation = {
            lat: data.Driver_lat,
            lng: data.Driver_lng
          };
          resolve(driverLocation);
        } else {
          resolve(null);
        }
      }, (error) => {
        reject(error);
      });
    });
  }

  async updateLocation(coord: { lat: number, lng: number }): Promise<boolean> {
    try {
      const userDocRef = doc(this.firestore, `Riders/${this.auth.currentUser.uid}`);
      
      // First, set the document with initial data
      await setDoc(userDocRef, {
        geohash: geohashForLocation([coord.lat, coord.lng]),
        Loc_lat: coord.lat,
        Loc_lng: coord.lng,
      }, { merge: true });  // Use merge: true to avoid overwriting existing data
      
      // Then, update the document
      await updateDoc(userDocRef, {
        geohash: geohashForLocation([coord.lat, coord.lng]),
        Loc_lat: coord.lat,
        Loc_lng: coord.lng,
      });
      
      return true;
    } catch (e) {
      console.error('Error updating rider location:', e);
      return false;
    }
  }


  async createHistory(Driver) {
    try {
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
  
      const historyId = uuidv4(); // Generate a random ID
      await setDoc(doc(this.firestore, "Riders", `${this.auth.currentUser.uid}/History/${historyId}`), { ...loc });
  
      console.log('History created successfully');
    } catch (error) {
      console.error('Error creating history:', error.message);

    }
  }
  

  async UpdateCountDown(time, id){
    try {
      const userDocRef = doc(this.firestore, "Request",  id)
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


  async AddKnownPlace(place: any): Promise<boolean | null> {
    console.log(this.auth.currentUser.uid);
    console.log(place.full);
    try {
      const userDocRef = doc(this.firestore, 'Riders', `${this.auth.currentUser.uid}/KnownPlaces/${place.full}`);
      await setDoc(userDocRef, { place });
      return true;
    } catch (e) {
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
            unsubscribe(); // Unsubscribe once data is fetched
            delete this.activeListeners[index];
          }, (error) => {
            console.error('Error in onSnapshot:', error);
            reject(error);
            unsubscribe(); // Unsubscribe in case of error
            delete this.activeListeners[index];
          });
  
          // Store the unsubscribe function to manage listeners
          this.activeListeners[index] = unsubscribe;
        });
      });
      const results = await Promise.all(promises);
      const allDrivers = results.reduce((acc, curr) => acc.concat(curr), []);
      console.log("All drivers from queries:", allDrivers);
  
      const matchingDrivers = allDrivers.filter((driver) => {
        if (!driver || !driver.Driver_lat || !driver.Driver_lng) {
          console.error(`Driver ${driver?.Driver_id || 'unknown'} has missing coordinates:`, driver);
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
        // Upload the image as a base64 string
        await uploadString(storageRef, cameraFile.base64String, 'base64');
        // Get the download URL for the uploaded image
        const imageUrl = await getDownloadURL(storageRef);
        // Reference to the user's document in Firestore
        const userDocRef = doc(this.firestore, `Riders/${uid}`);
    
        // Check if the document exists
        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
          // If the document exists, update the photoURL field
          await updateDoc(userDocRef, { photoURL: imageUrl });
        } else {
          // If the document does not exist, create it with the photoURL field
          await setDoc(userDocRef, { photoURL: imageUrl }, { merge: true });
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

  getChatMessage(requestId: string) {
    const messagesRef = collection(this.firestore, `Request/${requestId}/messages`);
    return collectionData(messagesRef);
  }

  async addChatEnRouteMessage(msg: string, requestId: string) {
    const messagesRef = collection(this.firestore, `Request/${requestId}/messages`);
    return addDoc(messagesRef, {
      msg: msg,
      from: this.user.uid,
      createdAt: serverTimestamp(),
      myMsg: true,
      fromName: this.user.displayName
    });
  }
  
  
  async updatChatMessageInfo(requestId: string) {
    return await updateDoc(doc(this.firestore, `Request/${requestId}`),
    {
      name: this.user.displayName,
      id: this.user.uid,
      phone: this.user.phoneNumber,
      email: this.user.email,
      new: true
    });
  }
  

  getKnownPlaces(): Observable<any[]> {
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
  if (!this.profile || !this.profile.Rider_id || !this.profile.Rider_name) {
    console.error('Profile is not initialized or missing required fields.');
    throw new Error('Profile is not initialized.');
  }

  try {
    return await addDoc(collection(this.firestore, `Messages/${this.profile.Rider_id}/messages`), {
      msg: msg,
      from: this.auth.currentUser.uid,
      createdAt: serverTimestamp(),
      myMsg: true,
      fromName: this.profile.Rider_name
    });
  } catch (error) {
    console.error('Error adding chat message:', error);
    throw error;
  }
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

async checkCardExistsStripe(email: string, last4: string): Promise<boolean> {
  console.log('checkCardExistsStripe called with email:', email, 'and last4:', last4);

  const cardsCollectionRef = collection(this.firestore, `Riders/${this.user.uid}/cards`);
  console.log('cardsCollectionRef:', cardsCollectionRef);

  const cardQuery = query(cardsCollectionRef, where('last4', '==', last4));
  const cardDocs = await getDocs(cardQuery);

  console.log('Number of card documents found:', cardDocs.size);
  cardDocs.forEach(doc => {
    console.log('Found card:', doc.data());
  });

  return !cardDocs.empty;
}



async saveCard(cardDetails: { cardId: string; email: string, last4: string }) {
  console.log('Saving card with details:', cardDetails);

  const cardsCollectionRef = collection(this.firestore, `Riders/${this.user.uid}/cards`);
  const cardDocRef = doc(cardsCollectionRef, cardDetails.cardId);

  await setDoc(cardDocRef, cardDetails);
  console.log('Card saved successfully:', cardDetails);
}


async checkPaystackAuthCodeExists(authCode: string): Promise<boolean> {
  const authCodeCollectionRef = collection(this.firestore, 'paystackAuthCodes');
  const authCodeQuery = query(authCodeCollectionRef, where('authCode', '==', authCode));
  const authCodeDocs = await getDocs(authCodeQuery);

  return !authCodeDocs.empty;
}

async savePaystackAuthCode(authCode: string) {
  const authCodeDocRef = doc(this.firestore, `paystackAuthCodes/${authCode}`);
  await setDoc(authCodeDocRef, { authCode });
}

async updateFirestoreAfterPayment(paymentResult: any) {
  const paymentDocRef = doc(this.firestore, `Riders/${this.user.uid}/payments/lastpayment`);
  await setDoc(paymentDocRef, {
    paymentResult: paymentResult,
    paymentDate: new Date(),
  });
}


async getSavedPaymentMethods(): Promise<Card[]> {
  const paymentMethodsRef = collection(this.firestore, `Riders/${this.user.uid}/cards`);
  const snapshot = await getDocs(paymentMethodsRef);
  const methods: Card[] = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Card));
  return methods;
}

async deleteSavedPaymentMethod(methodId: string): Promise<void> {
  const paymentMethodDocRef = doc(this.firestore, `Riders/${this.user.uid}/cards/${methodId}`);
  await deleteDoc(paymentMethodDocRef);
}

async setActiveCard(email: string, cardId: string): Promise<void> {
  const userDocRef = doc(this.firestore, `Riders/${email}`);
  await setDoc(userDocRef, { activeCardId: cardId }, { merge: true });
}

getActiveCard(email: string): Observable<any> {
  const userDocRef = doc(this.firestore, `Riders/${email}`);
  return docData(userDocRef);
}

// Method to add a card for a user
async addCardStripe(email: string, cardId: string, last4: string): Promise<void> {
  const userDocRef = doc(this.firestore, `Riders/${email}`);
  const userDoc = await getDoc(userDocRef);
  const userData = userDoc.data();

  let cards = userData?.cards || [];
  cards.push({ cardId, last4 });

  await setDoc(userDocRef, { cards }, { merge: true });
}


}
