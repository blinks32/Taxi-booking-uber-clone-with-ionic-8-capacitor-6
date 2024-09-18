import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { RiderProfileGuard } from './guards/rider-profile.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./pages/history/history.module').then((m) => m.HistoryPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./pages/details/details.module').then((m) => m.DetailsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./pages/payment/payment.module').then((m) => m.PaymentPageModule),
    ...canActivate(redirectUnauthorizedToLogin), // Added guard
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./pages/support/support.module').then((m) => m.SupportPageModule),
    ...canActivate(redirectUnauthorizedToLogin), // Added guard
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutPageModule),
    ...canActivate(redirectUnauthorizedToLogin), // Added guard
  },
  {
    path: 'promotion',
    loadChildren: () =>
      import('./pages/promotion/promotion.module').then((m) => m.PromotionPageModule),
    ...canActivate(redirectUnauthorizedToLogin), // Added guard
  },
  {
    path: 'rating',
    loadChildren: () =>
      import('./pages/rating/rating.module').then((m) => m.RatingPageModule),
    ...canActivate(redirectUnauthorizedToLogin), // Added guard
  },
  {
    path: 'network',
    loadChildren: () =>
      import('./pages/network/network.module').then((m) => m.NetworkPageModule),
    ...canActivate(redirectUnauthorizedToLogin), // Added guard
  },
  {
    path: 'paymentcallback',
    loadChildren: () => import('./paymentcallback/paymentcallback.module').then(m => m.PaymentcallbackPageModule)
  },
  {
    path: '**', // Catch-all route
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
