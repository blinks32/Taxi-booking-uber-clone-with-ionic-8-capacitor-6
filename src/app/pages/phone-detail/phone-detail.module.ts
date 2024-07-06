import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneDetailPageRoutingModule } from './phone-detail-routing.module';

import { PhoneDetailPage } from './phone-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PhoneDetailPageRoutingModule
  ],
  declarations: [PhoneDetailPage]
})
export class PhoneDetailPageModule {}
