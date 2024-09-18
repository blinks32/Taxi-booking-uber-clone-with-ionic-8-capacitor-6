import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportPageRoutingModule } from './support-routing.module';

import { SupportPage } from './support.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportPageRoutingModule
  ],
  declarations: [SupportPage]
})
export class SupportPageModule {}
