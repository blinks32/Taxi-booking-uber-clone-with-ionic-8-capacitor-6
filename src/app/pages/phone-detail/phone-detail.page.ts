import { Component, Input, OnInit } from '@angular/core';
import { Auth, linkWithCredential, PhoneAuthProvider } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController, ModalOptions } from '@ionic/angular';
import { OtpComponent } from 'src/app/otp/otp.component';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { OverlayService } from 'src/app/services/overlay.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.page.html',
  styleUrls: ['./phone-detail.page.scss'],
})
export class PhoneDetailPage implements OnInit {
  form: FormGroup;
  CountryCode: any = '+1';
  CountryJson = environment.CountryJson;
  flag: any = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
  user: any;
  approve: boolean;
  approve2: boolean;
  details: any;
  constructor(
    private modalCtrl: ModalController,
    private auth: AuthService,
    private authy: Auth,
    private router: Router,
    private nav: NavController,
    private authY: Auth,
    private avatar: AvatarService,
    private overlay: OverlayService,
    private route: ActivatedRoute,
  ) { 

    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.details = params["details"];
  });
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      }),
    });
  }


  countryCodeChange($event) {
    console.log($event.detail.value.toString());
    this.CountryCode = $event.detail.value.toString();
  }

  async signIn() {
    if (!this.approve2)
    try {
      if (!this.form.valid) {
        this.form.markAllAsTouched();
        return;
      }
      console.log(this.form.value);
      this.approve2 = true;

      console.log(this.details);
  
      const response = await this.auth.signInWithPhoneNumber(this.CountryCode + this.form.value.phone);
  
      this.approve2 = false;
      const options: ModalOptions = {
        component: OtpComponent,
        componentProps: {
          phone: this.form.value.phone,
          countryCode: this.CountryCode,
        },
        swipeToClose: true
      };
      const modal = this.modalCtrl.create(options);
      (await modal).present();
      const data: any = (await modal).onWillDismiss();
      this.authy.onAuthStateChanged(async (user)=>{
        if (user){
      const result = await this.avatar.createUser(this.details.user.displayName, this.details.user.email, this.details.user.photoURL || '', this.CountryCode + this.form.value.phone, user.uid)
      await this.avatar.createCard('Cash', 0, 'cash', 'None')
      this.router.navigateByUrl('home');
        }
        this.overlay.hideLoader();
      })
      
    } catch(e) {
      console.log(e);
      this.overlay.showAlert('Error', JSON.stringify(e));
      this.approve2 = false;
    }
  }

}
