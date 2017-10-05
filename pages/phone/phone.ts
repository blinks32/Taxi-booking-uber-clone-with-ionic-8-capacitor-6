import { Component } from '@angular/core';
import { ProfileProvider } from '../../providers/profile/profile';
import { 
  NavController, 
  Loading,
  LoadingController,
  AlertController, MenuController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
@IonicPage()
/**
 * Generated class for the PhonePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-phone',
  templateUrl: 'phone.html',
})
export class PhonePage {
  public phoneForm: FormGroup;
  loading: Loading;
  constructor(public navCtrl: NavController, public stB: StatusBar, public menu: MenuController, public authProvider: AuthProvider, 
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public ph: ProfileProvider,
    public alertCtrl: AlertController) {
      menu.swipeEnable(false, 'menu1');
      this.phoneForm = formBuilder.group({
        phone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required])],
      });
    }

  ionViewDidEnter() {
  }


  UpdateNumber(){
    let loading = this.loadingCtrl.create({
      content: 'Finalizing..'
    });
  
    loading.present();
    this.ph.UpdateNumber(this.phoneForm.value.phone).then(success =>{
      loading.dismiss().then(suc =>{
      this.stB.show();
      this.navCtrl.setRoot('HomePage')
     })
    });
  }

}
