import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class ProfileProvider {
  public userProfile:firebase.database.Reference;
  public customer:firebase.database.Reference;
  public currentUser:firebase.User;
  public user: any;
  public phone: number;
  public drivers: any;
  public CustomerOwnPropertyRef: firebase.database.Reference;
  public driver: any;
  public userOtherProfile: any;
  public paymentType: any;
  public card: any;
  public email: any;
  public cvc: any;
  public year: any;
  public month: any;
  public id: any;
  public uid: any;
  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        console.log(user)
        this.user = user;
        console.log(this.user)
        this.id = this.user.uid
        this.userProfile = firebase.database().ref(`userProfile/${user.uid}`);
        this.userOtherProfile = firebase.database().ref(`driverProfile/${user.uid}`);

        this.getUserOtherProfile().on('value', userProfileSnapshot => {
          this.driver = userProfileSnapshot.val()
         })

        this.drivers = firebase.database().ref(`Drivers`);
        this.CustomerOwnPropertyRef = firebase.database().ref(`Customer/${user.uid}/client`);

        this.getUserProfile().on('value', userProfileSnapshot => {
          // this.userProfile = userProfileSnapshot.val();
         this.phone = userProfileSnapshot.val().phoneNumber;
         this.paymentType = userProfileSnapshot.val().payWith;
         this.card = userProfileSnapshot.val().Card_Number;
         this.email = userProfileSnapshot.val().Card_email;
         this.cvc = userProfileSnapshot.val().Card_Cvc;
         this.year = userProfileSnapshot.val().Card_Year;
         this.month = userProfileSnapshot.val().Card_month;
         console.log(this.phone)
        })
      }
    });
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfile;
  }

  getUserOtherProfile(): firebase.database.Reference {
    return this.userOtherProfile;
  }


  getUserAsClientInfo(): firebase.database.Reference {
    return this.customer;
  }

  getAllDrivers(): firebase.database.Reference {
    return this.drivers;
  }

  updateName(firstName: string, lastName: string): firebase.Promise<void> {
    return this.userProfile.update({
      firstName: firstName,
      lastName: lastName,
    });
  }

  UpdateNumber(
    number: number): firebase.Promise<any> {
    return this.userProfile.update({
      phoneNumber: number,
    });
  }


  RateDriver(id: any, value: boolean): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_HasRated: value
    });
  }

  ApprovePickup(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_PickedUp: value,
    });
  }

  ApproveDrop(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_Dropped: value,
    });
  }

  SendMessage(value: string, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_Message: value,
    });
  }

  CanCharge(value: boolean, id: any): firebase.Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_CanChargeCard: value,
    });
  }


  UpdatePaymentType(
    number: number): firebase.Promise<any> {
    return this.userProfile.update({
      payWith: number,
    });
  }

  
}