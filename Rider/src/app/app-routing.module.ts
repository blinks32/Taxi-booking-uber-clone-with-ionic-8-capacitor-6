import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'accountkit', loadChildren: './pages/accountkit/accountkit.module#AccountkitPageModule' },
  { path: 'autocomplete', loadChildren: './pages/autocomplete/autocomplete.module#AutocompletePageModule' },
  { path: 'booklater', loadChildren: './pages/booklater/booklater.module#BooklaterPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'documentdetail', loadChildren: './pages/documentdetail/documentdetail.module#DocumentdetailPageModule' },
  { path: 'documents', loadChildren: './pages/documents/documents.module#DocumentsPageModule' },
  { path: 'entrance', loadChildren: './pages/entrance/entrance.module#EntrancePageModule' },
  { path: 'estimate', loadChildren: './pages/estimate/estimate.module#EstimatePageModule' },
  { path: 'history', loadChildren: './pages/history/history.module#HistoryPageModule' },
  { path: 'history-details', loadChildren: './pages/history-details/history-details.module#HistoryDetailsPageModule' },
  { path: 'intro', loadChildren: './pages/intro/intro.module#IntroPageModule' },
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'login-entrance', loadChildren: './pages/login-entrance/login-entrance.module#LoginEntrancePageModule' },
  { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule' },
  { path: 'payment', loadChildren: './pages/payment/payment.module#PaymentPageModule' },
  { path: 'payment-approval', loadChildren: './pages/payment-approval/payment-approval.module#PaymentApprovalPageModule' },
  { path: 'phone', loadChildren: './pages/phone/phone.module#PhonePageModule' },
  { path: 'promo', loadChildren: './pages/promo/promo.module#PromoPageModule' },
  { path: 'rate', loadChildren: './pages/rate/rate.module#RatePageModule' },
  { path: 'referalcode', loadChildren: './pages/referalcode/referalcode.module#ReferalcodePageModule' },
  { path: 'referride', loadChildren: './pages/referride/referride.module#ReferridePageModule' },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'schedule', loadChildren: './pages/schedule/schedule.module#SchedulePageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'startup', loadChildren: './pages/startup/startup.module#StartupPageModule' },
  { path: 'support', loadChildren: './pages/support/support.module#SupportPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
