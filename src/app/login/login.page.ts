import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { isPlatform, ModalController, ModalOptions, NavController } from '@ionic/angular';
import { OtpComponent } from '../otp/otp.component';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';
import { OverlayService } from '../services/overlay.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { deleteUser, GoogleAuthProvider, signInWithCredential } from '@angular/fire/auth';
import { Auth } from '@angular/fire/auth';
import { StatusBar } from '@capacitor/status-bar';
import { AvatarService } from '../services/avatar.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { CountrySearchModalComponent } from '../country-search-modal/country-search-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  CountryCode: any;
  CountryJson = environment.CountryJson;
  flag: any = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
  filteredCountries = [];
  user: any;
  approve: boolean;
  approve2: boolean;

  slideOpts = {
    initialSlide: 0,
    speed: 300,
    autoplay: true
  };

  numberT: string;

  constructor(
    private modalCtrl: ModalController,
    private auth: AuthService,
    private router: Router,
    private nav: NavController,
    private authY: Auth,
    private avatar: AvatarService,
    private overlay: OverlayService,
  ) {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize();
    }
    this.CountryCode = '+234';
    this.numberT = '+234';
  }

  async ngOnInit() {
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      }),
    });

    this.filteredCountries = this.CountryJson;
  }

  async HideSplash() {
    await SplashScreen.hide();
  }

  async openCountrySearchModal() {
    const modal = await this.modalCtrl.create({
      component: CountrySearchModalComponent
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.CountryCode = data.dialCode;
      this.numberT = data.dialCode;
    }
  }

  filterCountries(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCountries = this.CountryJson.filter(country =>
      country.name.toLowerCase().includes(searchTerm) ||
      country.dialCode.includes(searchTerm)
    );
  }

  countryCodeChange($event) {
    this.CountryCode = '';
    this.numberT = $event.detail.value.toString();
  }

  async Show() {
    await StatusBar.setOverlaysWebView({ overlay: false });
  }

  async Hide() {
    await StatusBar.setOverlaysWebView({ overlay: true });
  }
  async signIn() {
    if (!this.approve2) {
      try {
        if (!this.form.valid) {
          this.form.markAllAsTouched();
          return;
        }
        console.log('Form Value:', this.form.value);
        this.approve2 = true;
        await this.auth.signInWithPhoneNumber(this.numberT + this.form.value.phone);
  
        const options: ModalOptions = {
          component: OtpComponent,
          componentProps: {
            phone: this.form.value.phone,
            countryCode: this.numberT,
          },
          swipeToClose: true
        };
  
        const modal = await this.modalCtrl.create(options);
        await modal.present();
        const data: any = await modal.onWillDismiss();
        console.log('OTP Modal Dismissed:', data);
  
        this.authY.onAuthStateChanged(async (user) => {
          if (user) {
            console.log('User Authenticated:', user);
            const isDriver = await this.avatar.getUserType(user.uid);
            console.log('User Type:', isDriver ? 'Driver' : 'Rider');
            if (isDriver) {
              this.overlay.showAlert('Error', 'Riders cannot log in as drivers.');
              await this.authY.signOut();
              this.approve2 = false;
            } else {
                console.log('User Profile Data:', data);
                this.approve2 = false;
                if (!user.email) {
                  console.log('Navigating to details page');
                  this.router.navigateByUrl('details');
                } else {
                  console.log('Navigating to home page');
                  this.router.navigateByUrl('home');
                }
                this.overlay.hideLoader();
            }
          }
        });
      } catch (e) {
        console.error('Error during signIn:', e);
        this.overlay.showAlert('Error', JSON.stringify(e));
        this.approve2 = false;
      }
    }
  }
  

  async loginWithGoogle() {
    try {
      this.approve = true;

      const googleUser = await GoogleAuth.signIn();
      const credential = GoogleAuthProvider.credential(googleUser.authentication.idToken);
      const sToken = await signInWithCredential(this.authY, credential);

      if (sToken.user.phoneNumber) {
        await this.avatar.createUser(
          sToken.user.displayName,
          sToken.user.email,
          sToken.user.photoURL || '',
          sToken.user.phoneNumber || '94909220',
          this.authY.currentUser.uid
        );
        await this.avatar.createCard('Cash', 0, 'cash', 'None');
        this.router.navigateByUrl('home');
      } else {
        await deleteUser(this.authY.currentUser);
        const navigationExtras: NavigationExtras = {
          queryParams: {
            details: sToken,
          }
        };
        this.nav.navigateForward('phone-detail', navigationExtras);
      }

      this.approve = false;

    } catch (e) {
      this.overlay.showAlert('Error', JSON.stringify(e));
      this.approve = false;
    }
  }
}
