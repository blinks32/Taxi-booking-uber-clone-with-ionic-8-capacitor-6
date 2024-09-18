import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkPageRoutingModule } from './network-routing.module';

import { NetworkPage } from './network.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworkPageRoutingModule
  ],
  declarations: [NetworkPage]
})
export class NetworkPageModule {}
