import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { OverlayService } from '../services/overlay.service';
import { NgOtpInputComponent } from 'ng-otp-input';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit, OnDestroy {
  @Input() defaultOtp: string = '';
  @Input() phone: string = '';
  @Input() countryCode: string = '';
  @Input() confirmationResult: any;

  @ViewChild('otpInput') otpInput: NgOtpInputComponent;

  otp: string = '';
  countdown: number = 60;
  private countdownInterval: any;
  approve2: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private auth: AuthService,
    private overlay: OverlayService
  ) {}

  ngOnInit() {
    this.startCountdown();
    if (this.defaultOtp) {
      setTimeout(() => {
        this.otpInput.setValue(this.defaultOtp);
        this.otp = this.defaultOtp;
      }, 0);
    }
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  startCountdown() {
    this.countdown = 60;
    this.stopCountdown(); // Clear any existing interval
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  onOtpChange(otp: string) {
    this.otp = otp;
  }

  async resend() {
    if (this.countdown <= 0) {
      try {
        this.overlay.showLoader('Resending OTP...');
        // Call your resend OTP method here
        // For example: await this.auth.resendOTP();
        this.overlay.hideLoader();
        this.overlay.showToast('OTP resent successfully');
        this.startCountdown(); // Restart the countdown
      } catch (error) {
        this.overlay.hideLoader();
        this.overlay.showAlert('Error', 'Failed to resend OTP. Please try again.');
      }
    }
  }

  async verifyOtp() {
    if (this.otp.length === 6) {
      this.approve2 = true;
      try {
        await this.confirmationResult.confirm(this.otp);
        this.modalCtrl.dismiss({ success: true });
      } catch (error) {
        console.error('OTP verification error:', error);
        this.overlay.showAlert('Error', 'Invalid OTP. Please try again.');
      } finally {
        this.approve2 = false;
      }
    } else {
      this.overlay.showAlert('Error', 'Please enter a valid 6-digit OTP.');
    }
  }

  closeModal() {
    this.modalCtrl.dismiss({ success: false });
  }
}
