// country-search-modal.module.ts

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CountrySearchModalComponent } from './country-search-modal.component';

@NgModule({
  declarations: [CountrySearchModalComponent],
  imports: [CommonModule, IonicModule],
  exports: [CountrySearchModalComponent], // Export the component
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CountrySearchModalModule {}
