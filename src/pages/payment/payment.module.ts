import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPage } from './payment';
@NgModule({
  declarations: [PaymentPage],
  imports: [IonicPageModule.forChild(PaymentPage)],
})
export class PaymentPageModule { }