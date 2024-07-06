import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  isLoading: any;

  constructor(private loadingCtrl: LoadingController,private toast: ToastController,  private alertController: AlertController) { }


  showLoader(msg) {
    if(!this.isLoading) this.isLoading = true;
    return this.loadingCtrl.create({
      message: msg,
      spinner: 'lines-sharp',
      cssClass: 'default-alert'
    }).then(res => {
      res.present().then(() => {
        if(!this.isLoading) {
          res.dismiss().then(() => {
            console.log('abort presenting');
          });
        }
      })
    })
    .catch(e => {
      this.isLoading = false;
      console.log(e);
    })
  }

  hideLoader() {
    if(this.isLoading) this.isLoading = false;
    return this.loadingCtrl.dismiss()
    .then(() => console.log('dismissed'))
    .catch(e => console.log(e));
  }

  async showToast(message) {
    const alert = await this.toast.create({
      message: message,
      position: 'top',
      duration: 500,
      cssClass: 'default-alert'
      
    });
    await alert.present();
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      cssClass: 'default-alert',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
