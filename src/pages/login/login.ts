import { Component } from '@angular/core';
import {
  Loading,
  Platform,
  LoadingController, 
  NavController,
  AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';
import { IonicPage } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { NativeMapContainerProvider } from '../../providers/native-map-container/native-map-container';
import { Diagnostic } from '@ionic-native/diagnostic';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  loading: Loading;
  public initState: boolean =  false;

  constructor(public navCtrl: NavController, public ntP: NativeMapContainerProvider,  public platform: Platform, public diagnostic: Diagnostic, public menu: MenuController, public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, public authProvider: AuthProvider, public ph: ProfileProvider,
    public formBuilder: FormBuilder) {
      menu.swipeEnable(false, 'menu1');
      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });

  }

  ionViewDidLoad(){
  this.checkForGPS()
 }

  checkForGPS(){
   this.ntP.checkGps();
  }

  loginUser(): void {
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then( authData => {
        this.loading.dismiss().then( () => {
          this.ph.getUserProfile().on('value', userProfileSnapshot => {
            let phone = userProfileSnapshot.val().phoneNumber
              if (phone == null)
              this.navCtrl.setRoot('StartupPage');
              else
              this.navCtrl.setRoot('HomePage');
          })
        });
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }


  loginViaFacebook(){
    this.authProvider.signInWithFacebook()
    .then( authData => {
      console.log(authData);
      this.loading.dismiss().then( () => {
        if (this.ph.phone == null)
        this.navCtrl.push('StartupPage');
        else
        this.navCtrl.setRoot('HomePage');
      });
    }, error => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });
    
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  
  }

  goToSignup(): void {
    this.navCtrl.push('EntrancePage');
  }

  goToResetPassword(): void {
    this.navCtrl.push('ResetPasswordPage');
  }

  

}
