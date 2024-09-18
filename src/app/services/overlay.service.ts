import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private loader: HTMLIonLoadingElement | null = null;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  async showLoader(message: string): Promise<HTMLIonLoadingElement> {
    if (this.loader) {
      await this.loader.dismiss();
    }
    this.loader = await this.loadingCtrl.create({
      message: message,
      spinner: 'crescent'
    });
    await this.loader.present();
    return this.loader;
  }

  async hideLoader() {
    if (this.loader) {
      await this.loader.dismiss();
      this.loader = null;
    }
  }

  async showToast(message: string, duration: number = 2000) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'bottom'
    });
    await toast.present();
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
