import { Injectable, Injector } from '@angular/core';
import { Platform } from 'ionic-angular';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { EventProvider } from '../../providers/event/event';
/*
  Generated class for the PaystackProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PaystackProvider {
  public isDone: boolean = false;
  public cardCharge: boolean = false;
  constructor(public eProvider: EventProvider, public platform: Platform, public pop: PopUpProvider) {
    
  }

  UpdateCard(card: string, month: any, year: any, cvc: any, amount: any, email: any, driverPay: any){
    this.eProvider.UpdateCard(card, month, year, cvc, amount, email, driverPay).then(success => {
    
    }).catch(error =>{})
  }

}
