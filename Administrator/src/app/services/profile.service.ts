import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import *as firebase from 'firebase/app';

@Injectable()
export class ProfileService {

  public driverProfile: any;
  public userProfile: any;
  public activityProfile: any;
  public dashboardProfile: any;
  public ActiveDriverProfile: any;
  public ItemProfile: any;
  public userFeed: any;
  public driverFeed: any;
  // public driver_details:AngularFireList<any[]>
  // public user_details:AngularFireList<any[]>
  // public addeditem_details:AngularFireList<any[]>
  // public activedriver_details: AngularFireList<any[]>;
  public subitemProfile: any;
    constructor(public af: AngularFireDatabase) {
      this.dashboardProfile = firebase.database().ref(`DashboardSettings`);
      this.driverProfile = firebase.database().ref(`driverProfile`);
      this.userFeed = firebase.database().ref(`DashboardSettings/user/complains`);
      this.driverFeed = firebase.database().ref(`DashboardSettings/driver/complains`);
      this.userProfile = firebase.database().ref(`userProfile`);
      this.activityProfile = firebase.database().ref(`Customer`);
      this.ActiveDriverProfile = firebase.database().ref(`Drivers`);
      this.ItemProfile = firebase.database().ref(`ItemProfile`);
      // this.driver_details = af.list('https://taxi-59a68.firebaseio.com/driverProfile');
      // this.user_details = af.list('https://taxi-59a68.firebaseio.com/userProfile');
      // this.activedriver_details = af.list('https://taxi-59a68.firebaseio.com/Drivers');
      // this.addeditem_details = af.list('https://taxi-59a68.firebaseio.com/ItemProfile');
      this.subitemProfile = firebase.database().ref(`ItemProfile/Stuffs`);
     }

   
    getActivityProfile(): firebase.database.Reference {
      return this.activityProfile;
    }

    getItemProfile(id: any): firebase.database.Reference {
      return this.ItemProfile.child(id)
    }
    
    getDriverProfile(id: any): firebase.database.Reference {
      return this.driverProfile.child(id)
    }

    _getDriverProfile(): firebase.database.Reference {
      return this.driverProfile
    }

    getUserProfile(id: any): firebase.database.Reference {
      return this.userProfile.child(id)
    }
  
    _getUserProfile(): firebase.database.Reference {
      return this.userProfile
    }

    _getFeedUserProfile(): firebase.database.Reference {
      return this.userFeed
    }

    getFeedUserProfile(id: any): firebase.database.Reference {
      return this.userFeed.child(id)
    }

    getFeedDriverProfile(id: any): firebase.database.Reference {
      return this.driverFeed.child(id)
    }

    _getFeedDriverProfile(): firebase.database.Reference {
      return this.driverFeed
    }
  
  
    ChangeItem(id: any, idi: any): firebase.database.Reference {
      return firebase.database().ref(`ItemProfile/${id}/Stuffs/${idi}`);
    }

    ChangeMainItem(id: any): firebase.database.Reference {
      return firebase.database().ref(`ItemProfile/${id}/`);
    }

    getInnerItem(id: any): firebase.database.Reference {
      return firebase.database().ref(`ItemProfile/${id}/Stuffs`);
    }
    
    getSecondaryItem(id: any, subid: any): firebase.database.Reference {
      return firebase.database().ref(`ItemProfile/${id}/Stuffs/${subid}`);
    }

    getDashboardProfile(): firebase.database.Reference {
      return this.dashboardProfile;
    }

    getActiveDriverProfile(): firebase.database.Reference {
      return this.ActiveDriverProfile;
    }

    updateState(id): firebase.database.Reference {
      return this.driverProfile.child(id).update({
        active_state: true
      });
    }

}
