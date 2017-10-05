import { Component } from '@angular/core';
import {  NavParams, LoadingController, Loading,
  AlertController, NavController, Platform  } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileProvider } from '../../providers/profile/profile';
import { IonicPage } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
@IonicPage()
/**
 * Generated class for the CardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  public cardpaymentForm: FormGroup;
  loading: Loading;

  constructor(public prof: ProfileProvider, public eProvider: EventProvider, public platform: Platform, public nav: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, 
    public formBuilder: FormBuilder) {

      this.cardpaymentForm = formBuilder.group({
        card: ['', Validators.compose([Validators.maxLength(16), Validators.minLength(16), Validators.required])],
        cvc: ['', Validators.compose([Validators.maxLength(3), Validators.minLength(3), Validators.required])],
        mm: ['', Validators.compose([Validators.maxLength(2), Validators.minLength(2), Validators.required])],
        yy: ['', Validators.compose([Validators.maxLength(2), Validators.minLength(2), Validators.required])]
      });
  }


  AddCard(): void {
    this.RegisterCard(this.cardpaymentForm.value.card, this.cardpaymentForm.value.mm, 
      this.cardpaymentForm.value.yy, this.cardpaymentForm.value.cvc, 100, this.prof.user.email,
      2)
  }


  RegisterCard(card, month, year, cvc, amount, email, driverPay){
    
  this.platform.ready().then(() => {
    // Now safe to use device APIs
   (<any>window).window.PaystackPlugin.chargeCard(
      (resp) =>{
     
          this.eProvider.UpdateCard(card, month, year, cvc, amount, email, driverPay).then(success => {
            this.showPayMentAlert("Card Activation Was Successful", "Thank You.", true);
          }).catch(error =>{})
        
      },
      (resp) =>{
      
        this.showPayMentAlert("Card Activation Was Unsuccessful", "Please Input Your Details Correctly Or Try Another Card", false);
      },
      {
        cardNumber: card, 
        expiryMonth: month, 
        expiryYear: year, 
        cvc: cvc,
        email: email,
        amountInKobo: amount,
        transactionCharge : driverPay
    });

  })
}

  showPayMentAlert(title, subtitle, canLeave ){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: [ {
        text: "Okay",
        role: 'cancel',
        handler: () => {
         if (canLeave){
          this.nav.popToRoot();
         }
        }
      },],
      enableBackdropDismiss: false 
    });
    alert.present();
  }

}
