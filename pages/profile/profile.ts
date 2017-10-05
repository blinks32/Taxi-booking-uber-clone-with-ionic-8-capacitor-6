import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userProfile:any;
  public birthDate:string;
  public phoneNumber: any;
  public work: any;
  public home: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
    public ph: ProfileProvider, public authProvider: AuthProvider) {}

  ionViewDidEnter() {
    this.ph.getUserProfile().on('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.phoneNumber = userProfileSnapshot.val().phoneNumber;
      this.home = userProfileSnapshot.val().home;
      this.work = userProfileSnapshot.val().work;
      
    });
  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

  updateNumber(){
    const alert = this.alertCtrl.create({
      message: "Your New Number",
      inputs: [
        {
         
          value: this.userProfile.phoneNumber
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data)
            this.ph.UpdateNumber(data);
          }
        }
      ]
    });
    alert.present();
  }



}
