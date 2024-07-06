import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PaymentService } from 'src/app/services/payment.service';
import { loadStripe, Stripe, StripeElements, StripeCardElement } from '@stripe/stripe-js';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit, AfterViewInit {
  paymentProvider: string;
  amount: number;
  currency: string;
  email: string;
  receipt: string;
  stripe: Stripe;
  elements: StripeElements;
  card: StripeCardElement;
  approve: boolean = false;

  constructor(
    private paymentService: PaymentService,
    private avatar: AvatarService,
    private alertController: AlertController
  ) {}

  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_0t85o0Llo0MbBfC9imSzznam');
    this.elements = this.stripe.elements();
  }

  ngAfterViewInit() {
    if (this.elements && this.paymentProvider === 'stripe') {
      this.card = this.elements.create('card');
      this.card.mount('#card-element');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async onSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission
    this.approve = true;

    try {
      let result;
      if (this.paymentProvider === 'stripe') {
        const { source, error } = await this.stripe.createSource(this.card, {
          type: 'card',
          currency: this.currency,
          amount: this.amount * 100 // Convert to the smallest currency unit
        });
        if (error) {
          throw error;
        }
        result = await this.paymentService.payWithStripe(this.amount, this.currency, source.id).toPromise();
      } else if (this.paymentProvider === 'paystack') {
        result = await this.paymentService.payWithPaystack(this.email, this.amount, this.currency).toPromise();
      } else if (this.paymentProvider === 'flutterwave') {
        result = await this.paymentService.payWithFlutterwave(this.email, this.amount, this.currency).toPromise();
      } else if (this.paymentProvider === 'razorpay') {
        result = await this.paymentService.payWithRazorpay(this.amount, this.currency, this.receipt).toPromise();
      } else {
        throw new Error('Unsupported payment provider');
      }
      await this.avatar.updateFirestoreAfterPayment(result);
      console.log('Payment successful:', result);
      await this.showAlert('Success', 'Payment successful!');
    } catch (error) {
      console.error('Error during payment:', error);
      await this.showAlert('Error', `Payment failed: ${error.message}`);
    } finally {
      this.approve = false;
    }
  }

  onPaymentProviderChange() {
    if (this.paymentProvider === 'stripe' && !this.card) {
      this.card = this.elements.create('card');
      this.card.mount('#card-element');
    }
  }
}
