import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class EventProvider {
  public userProfileRef:firebase.database.Reference;
  public CustomerRef:firebase.database.Reference;
  public id: any;
  public customerId: any;
  public CustomerOwnPropertyRef: firebase.database.Reference;
  public selected_driver: any; 

  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.id = user.uid
        console.log()
        this.userProfileRef = firebase.database().ref(`userProfile/${user.uid}`);
       // this.CustomerRef = firebase.database().ref(`Customer/${this.selected_driver}`);
        this.CustomerOwnPropertyRef = firebase.database().ref(`Customer/${user.uid}/client`);
      }
    });
  }

  getEventList(): firebase.database.Reference {
    return this.userProfileRef.child('/eventList');
  }

  getEventDetail(eventId:string): firebase.database.Reference {
    return this.userProfileRef.child('/eventList').child(eventId);
  }


    createHistory(name: string, price: number, date: string, 
      location: number, destination: number): firebase.Promise<any> {
      return this.userProfileRef.child('/eventList').push({
        name: name, 
        price: price,
        date: date,
        location: location,
        destination: destination
      });

    }


  PushUserDetails(name: string, picture: any, 
    lat: number, lng: number, locationName: any, payWith: any): firebase.Promise<any> {
    return this.CustomerRef.child("/client").update({
      Client_username: name,
      Client_location: [lat, lng],
      Client_locationName: locationName,
      Client_paymentForm: payWith,
      Client_picture: picture,
      // Driver_location: [5.484261666666667, 7.481518333333335],
      Client_ID: this.id,
      Client_PickedUp: false,
      Client_Dropped: false,
      Client_HasRated: false
    });
  }


  UpdateDestination(
    destinationName: any, price: any, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_destinationName: destinationName, 
      Client_price: price,
    });
  }

  UpdateNetworkSate(
    state: any, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Network_state: state, 
    });
  }


  UpdateCard(card: string, month: any, year: any, cvc: any, amount: any, email: any, driverPay: any): firebase.Promise<any> {
    return this.userProfileRef.update({
      Card_Number: card, 
      Card_month: month,
      Card_Year: year,
      Card_Cvc: cvc,
      Card_Amount: amount,
      Card_email: email,
      Card_driverPay: driverPay
    });
  }


}
