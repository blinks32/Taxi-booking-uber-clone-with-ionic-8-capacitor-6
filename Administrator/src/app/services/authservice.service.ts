import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";

@Injectable()
export class AuthserviceService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
            (user) => {
              if (user) {
                this.userDetails = user;
                console.log(this.userDetails);
              }
              else {
                this.userDetails = null;
              }
            }
          );
      
}

  
signInWithGoogle() {
  return this._firebaseAuth.auth.signInWithPopup(
    new firebase.auth.GoogleAuthProvider()
  )
}

isLoggedIn() {
if (this.userDetails == null ) {
    return false;
  } else {
    return true;
  }
}
    logout() {
      return this._firebaseAuth.auth.signOut().then((suc)=>{
          this.router.navigateByUrl('login')
      });
    }
  
  

}
