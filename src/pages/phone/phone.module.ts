import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhonePage } from './phone';
@NgModule({
  declarations: [PhonePage],
  imports: [IonicPageModule.forChild(PhonePage)],
})
export class PhonePageModule { }