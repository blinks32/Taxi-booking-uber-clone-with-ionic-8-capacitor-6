import { Component, Input, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { OverlayService } from '../services/overlay.service';
import { AvatarService } from '../services/avatar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() phone: string;
  @Input() countryCode: string;
  @Input() defaultOtp: string;  // New input property for default OTP

  isLoading = false;
  approve: boolean;
  approve2: boolean;
  otp: string;
  config = {
    length: 6,
    allowNumbersOnly: true,
  };
  countdown: number;
  countdownInterval: any;
  @ViewChild('otpInput') otpInput;  // Get reference to the ng-otp-input component

  constructor(
    public modalCtrl: ModalController,
    public overlay: OverlayService,
    public toastCtrl: ToastController,
    private auth: AuthService,
    private router: Router,
    private avatar: AvatarService,
    private cdr: ChangeDetectorRef  // Inject ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log(this.phone);
    this.startCountdown(60);  // Start a 60-second countdown
  }

  ngAfterViewInit() {
    // Set the OTP input value after the view is initialized
    if (this.defaultOtp) {
      this.setOtp(this.defaultOtp);
      this.cdr.detectChanges();  // Manually trigger change detection
    }
  }

  ngOnDestroy() {
    clearInterval(this.countdownInterval);  // Clear the interval when the component is destroyed
  }

  onOtpChange(event) {
    this.otp = event;
    console.log(this.otp);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async resend(): Promise<void> {
    try {
      const response = await this.auth.signInWithPhoneNumber(this.countryCode + this.phone);
      console.log(response);
      this.startCountdown(60);  // Restart the countdown when resending the OTP
    } catch (e) {
      console.log(e);
    }
  }

  async verifyOtp(): Promise<void> {
    try {
      this.approve2 = true;
      const response = await this.auth.verifyOtp(this.otp);
      this.approve2 = false;
      this.modalCtrl.dismiss(response);
    } catch (e) {
      console.log(e);
      this.clearOtpInput();  // Clear the OTP input using the new method
      this.overlay.hideLoader();  // Stop the loader
      this.approve2 = false;
      this.showToast('Incorrect OTP. Please try again.');  // Show toast message
    }
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  startCountdown(seconds: number) {
    this.countdown = seconds;
    clearInterval(this.countdownInterval);  // Clear any existing intervals
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.countdownInterval);
      }
    }, 1000);
  }

  clearOtpInput() {
    this.otpInput.setValue('');  // Clear the value of ng-otp-input
    this.otp = '';  // Clear the OTP variable in the component
  }

  setOtp(otp: string) {
    this.otp = otp;
    this.otpInput.setValue(otp);  // Set the value in the ng-otp-input component
  }
}
