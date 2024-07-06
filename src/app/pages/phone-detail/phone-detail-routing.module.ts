import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneDetailPage } from './phone-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneDetailPageRoutingModule {}
