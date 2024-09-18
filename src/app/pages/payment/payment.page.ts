import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { PaymentService } from '../../services/payment.service';
import { AvatarService } from '../../services/avatar.service';
import { Router } from '@angular/router';
import { Card } from 'src/app/interfaces/card';

declare var Stripe: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit, AfterViewInit {
  @ViewChild('cardElement', { static: false }) cardElement: ElementRef;
  paymentForm: FormGroup;
  loading: HTMLIonLoadingElement;
  stripe: any;
  elements: any;
  card: any;
  approve: boolean = false;
  cardInitialized: boolean = false;
  selectedProvider: string = '';
  savedPaymentMethods: Card[] = [];
  selectedCardId: string = '';
  defaultAmount: number = 1000;
  isCardComplete: boolean = false; // New state for card completion

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private paymentService: PaymentService,
    private avatarService: AvatarService  ) {
    this.paymentForm = this.fb.group({
      provider: ['', Validators.required],
      cardId: [''],
      authCode: ['']
    });
  }

  ngOnInit() {
    this.fetchSavedPaymentMethods();
    this.onPaymentProviderChange('stripe');
    this.getActiveCard();
  }

  ngAfterViewInit() {}

  // Ensure Stripe card is initialized
  initializeStripeCard() {
    if (this.cardElement && this.cardElement.nativeElement) {
      this.stripe = Stripe('pk_test_0t85o0Llo0MbBfC9imSzznam');
      this.elements = this.stripe.elements();
      if (!this.card) {
        this.card = this.elements.create('card');
        this.card.mount(this.cardElement.nativeElement);
        // Listen for changes on the card input
        this.card.on('change', event => {
          this.isCardComplete = event.complete;
        });
      }
      this.cardInitialized = true;
    }
  }

  onPaymentProviderChange(provider: string) {
    this.selectedProvider = provider;
    this.paymentForm.patchValue({ provider });

    if (provider === 'stripe') {
      setTimeout(() => {
        this.initializeStripeCard();
      }, 0);
    }
  }

  async fetchSavedPaymentMethods() {
    try {
      this.savedPaymentMethods = await this.avatarService.getSavedPaymentMethods();
      console.log('Saved Payment Methods:', this.savedPaymentMethods);
      if (this.savedPaymentMethods.length > 0) {
        this.selectedCardId = this.savedPaymentMethods[0].cardId; // Set default selected card
      }
    } catch (error) {
      console.error('Error fetching saved payment methods:', error);
    }
  }

  async getActiveCard() {
    const email = this.avatarService.user.email;
    this.avatarService.getActiveCard(email).subscribe((data: any) => {
      if (data && data.activeCardId) {
        this.selectedCardId = data.activeCardId;
      }
    });
  }

  async setActiveCard(event: any) {
    const cardId = event.detail.value;
    if (cardId) {
      try {
        const email = this.avatarService.user.email;
        await this.avatarService.setActiveCard(email, cardId);
        this.selectedCardId = cardId;
      } catch (error) {
        console.error('Error setting active card:', error);
      }
    }
  }

  async processPayment() {
    if (this.paymentForm.valid) {
      const formValues = this.paymentForm.value;
      formValues.email = this.avatarService.user.email; // Use email from avatarService
  
      this.showLoading();
  
      try {
        let paymentResult;
        paymentResult = await this.processStripePayment(formValues);

        console.log('Payment successful:', paymentResult);
        await this.showAlert('Success', 'Payment successful!');
        await this.avatarService.updateFirestoreAfterPayment(paymentResult);
  
      } catch (error) {
        console.error('Error during payment:', error);
        const errorMessage = error.error ? error.error.error : 'An unexpected error occurred.';
        await this.showAlert('Error', `Payment failed: ${errorMessage}`);
      } finally {
        this.hideLoading();
        this.approve = false;
      }
    } else {
      this.showAlert('Form Error', 'Please fill out all required fields.');
    }
  }

  async processStripePayment(formValues) {
    console.log('Starting processStripePayment with formValues:', formValues);
  
    try {
      const setupIntentResponse = await this.paymentService.createSetupIntent(formValues.email).toPromise();
      const clientSecret = setupIntentResponse.client_secret;
      console.log('Setup Intent created:', setupIntentResponse);
  
      const { setupIntent, error } = await this.stripe.confirmCardSetup(
        clientSecret,
        {
          payment_method: {
            card: this.card,
            billing_details: {
              email: formValues.email,
            },
          },
        }
      );
  
      if (error) {
        const errorElement = document.getElementById('card-errors');
        if (errorElement) {
          errorElement.textContent = error.message;
        }
        await this.showAlert('Payment Error', error.message);
        this.approve = false;
        console.error('Error confirming card setup:', error);
        throw new Error(error.message);
      }
  
      console.log('Card setup confirmed:', setupIntent);
  
      const paymentMethodId = setupIntent.payment_method;
  
      // Fetch the payment method details from your server (which will call Stripe)
      const paymentMethod = await this.paymentService.retrievePaymentMethod(paymentMethodId).toPromise();
      console.log('Payment method retrieved:', paymentMethod);
  
      const cardDetails = paymentMethod.card;
      const last4 = cardDetails.last4;
  
      console.log('Checking if card exists with email:', formValues.email, ' and last4:', last4);
      const cardExists = await this.avatarService.checkCardExistsStripe(formValues.email, last4);
      if (!cardExists) {
        await this.avatarService.addCardStripe(formValues.email, paymentMethodId, last4);
        await this.fetchSavedPaymentMethods();
      }
  
      return this.paymentService.savePaymentMethod(formValues.email, paymentMethodId).toPromise();
  
    } catch (error) {
      console.error('Error in processStripePayment:', error);
      throw error;
    }
  }
  
  async deletePaymentMethod(cardId: string) {
    await this.avatarService.deleteSavedPaymentMethod(cardId);
    this.fetchSavedPaymentMethods(); // Refresh the list of saved payment methods
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Processing payment...',
    });
    await this.loading.present();
  }

  async hideLoading() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
