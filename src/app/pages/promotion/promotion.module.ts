import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotionPageRoutingModule } from './promotion-routing.module';

import { PromotionPage } from './promotion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromotionPageRoutingModule
  ],
  declarations: [PromotionPage]
})
export class PromotionPageModule {}
