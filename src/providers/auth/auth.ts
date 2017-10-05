import { Injectable } from '@angular/core';
import  firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { Platform } from 'ionic-angular';


@Injectable()
export class AuthProvider {
  public fireAuth:firebase.auth.Auth;
  public userProfileRef:firebase.database.Reference;
  private currentUser: firebase.User;
  //public provider = new firebase.auth.FacebookAuthProvider();
  
  constructor(public platform: Platform, public facebook: Facebook) {
     this.userProfileRef = firebase.database().ref('/userProfile');
     firebase.auth().onAuthStateChanged((user: firebase.User) => this.currentUser = user);
  }

  loginUser(email: string, password: string): firebase.Promise<any> {
    return  firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): firebase.Promise<any> {
    return  firebase.auth().createUserWithEmailAndPassword(email, password).then( newUser => {
      this.userProfileRef.child(newUser.uid).set({
        email: email
      });
    });
  }

  resetPassword(email: string): firebase.Promise<void> {
    return  firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<void> {
    this.userProfileRef.child( firebase.auth().currentUser.uid).off();
    return  firebase.auth().signOut();
  }


  get authenticated(): boolean {
    return this.currentUser !== null;
  }


  signInWithFacebook(): firebase.Promise<any> {
    if (this.platform.is('cordova')) {
      return this.facebook.login(['email'])
      .then( response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
  
        firebase.auth().signInWithCredential(facebookCredential)
          .then( success => { 
            console.log("Firebase success: " + JSON.stringify(success)); 
          }).catch((error) => {
            console.log("Firebase failure: " + JSON.stringify(error));
            alert('Network Error, Check Your Connection And Try Again')
        });
  
      }).catch((error) => { console.log(error) });
    } else {
      return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((success) => {
        console.log("Firebase success: " + JSON.stringify(success));
      })
      .catch((error) => {
        console.log("Firebase failure: " + JSON.stringify(error));
        alert('Network Error, Check Your Connection And Try Again')
    });

    }

  }

  signOut(): void {
    firebase.auth().signOut();
  }

  displayName(): string {
    if (this.currentUser !== null) {
      return this.currentUser.displayName;
    } else {
      return '';
    }
  }

  }

  