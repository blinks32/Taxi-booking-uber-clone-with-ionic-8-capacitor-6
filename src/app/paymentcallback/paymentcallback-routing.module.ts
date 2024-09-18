import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentcallbackPage } from './paymentcallback.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentcallbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentcallbackPageRoutingModule {}
