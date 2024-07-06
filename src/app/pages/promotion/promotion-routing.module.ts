import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotionPage } from './promotion.page';

const routes: Routes = [
  {
    path: '',
    component: PromotionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionPageRoutingModule {}
