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
  { path: 'addphoto3', loadChildren: './pages/addphoto3/addphoto3.module#Addphoto3PageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule' },
  { path: 'accept', loadChildren: './pages/accept/accept.module#AcceptPageModule' },
  { path: 'addphoto2', loadChildren: './pages/addphoto2/addphoto2.module#Addphoto2PageModule' },
  { path: 'addphotoinfo', loadChildren: './pages/addphotoinfo/addphotoinfo.module#AddphotoinfoPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'documentdetail', loadChildren: './pages/documentdetail/documentdetail.module#DocumentdetailPageModule' },
  { path: 'documents', loadChildren: './pages/documents/documents.module#DocumentsPageModule' },
  { path: 'earnings', loadChildren: './pages/earnings/earnings.module#EarningsPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
  { path: 'history', loadChildren: './pages/history/history.module#HistoryPageModule' },
  { path: 'historydetail', loadChildren: './pages/historydetail/historydetail.module#HistorydetailPageModule' },
  { path: 'login-entrance', loadChildren: './pages/login-entrance/login-entrance.module#LoginEntrancePageModule' },
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'more-info', loadChildren: './pages/more-info/more-info.module#MoreInfoPageModule' },
  { path: 'paymentpage', loadChildren: './pages/paymentpage/paymentpage.module#PaymentpagePageModule' },
  { path: 'phone', loadChildren: './pages/phone/phone.module#PhonePageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'promo', loadChildren: './pages/promo/promo.module#PromoPageModule' },
  { path: 'rate', loadChildren: './pages/rate/rate.module#RatePageModule' },
  { path: 'rate-me', loadChildren: './pages/rate-me/rate-me.module#RateMePageModule' },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'schedule', loadChildren: './pages/schedule/schedule.module#SchedulePageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'splash', loadChildren: './pages/splash/splash.module#SplashPageModule' },
  { path: 'start', loadChildren: './pages/start/start.module#StartPageModule' },
  { path: 'waiting', loadChildren: './pages/waiting/waiting.module#WaitingPageModule' },
  { path: 'wallet', loadChildren: './pages/wallet/wallet.module#WalletPageModule' },
  { path: 'zone', loadChildren: './pages/zone/zone.module#ZonePageModule' },
  { path: 'support', loadChildren: './pages/support/support.module#SupportPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
