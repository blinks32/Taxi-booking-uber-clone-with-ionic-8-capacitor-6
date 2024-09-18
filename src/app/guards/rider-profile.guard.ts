import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { from, Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AvatarService } from '../services/avatar.service';

@Injectable({
  providedIn: 'root',
})
export class RiderProfileGuard implements CanActivate {
  constructor(
    private auth: Auth,
    private router: Router,
    private avatar: AvatarService
  ) {}

  canActivate(): Observable<boolean> {
    return from(new Promise<User | null>((resolve) => {
      onAuthStateChanged(this.auth, (user) => {
        console.log('Auth state changed, user:', user);
        resolve(user);
      });
    })).pipe(
      switchMap((user) => {
        if (!user) {
          console.log('User not authenticated, redirecting to login.');
          this.router.navigate(['login']);
          return of(false);
        }
        console.log('Authenticated user found:', user);
        return from(this.avatar.getUserType(user.uid)).pipe(
          map((userType) => {
            if (userType === 'driver') {
              console.log('User is a driver, redirecting to driver profile.');
              this.router.navigate(['driver-profile']); // Redirect to driver profile instead of signing out
              return false;
            } else if (!user.displayName || !user.email || !user.photoURL) {
              console.log('User profile incomplete, redirecting to details.');
              this.router.navigate(['details']);
              return false;
            }
            console.log('User authenticated and profile complete, allowing access.');
            return true;
          }),
          catchError((error) => {
            console.error('Error fetching user type:', error);
            // Assume the user is a rider if there's an error fetching the user type
            console.log('Assuming user is a rider due to error, allowing access.');
            return of(true);
          })
        );
      })
    );
  }
}
