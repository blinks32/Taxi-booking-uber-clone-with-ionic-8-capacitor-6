import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../services/payment.service';
import { AvatarService } from '../services/avatar.service';
declare var Stripe;

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
})
export class AddCardComponent {
  @ViewChild('cardElement', { static: false }) cardElement: ElementRef;
  paymentForm: FormGroup;
  loading: HTMLIonLoadingElement;
  stripe: any;
  elements: any;
  card: any;
  approve: boolean = false;
  cardInitialized: boolean = false;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private paymentService: PaymentService,
    private avatarService: AvatarService,
    private modalController: ModalController,
    private navController: NavController
  ) {
    this.paymentForm = this.fb.group({
      provider: ['stripe', Validators.required],
      cardId: [''],
      authCode: ['']
    });
  }

  ngOnInit() {
    this.initializeBackButtonCustomHandler();
    // Initialize the form or any other needed data
  }

  ngAfterViewInit() {
    this.initializeStripeCard();
  }

  initializeStripeCard() {
    if (this.cardElement && this.cardElement.nativeElement) {
      this.stripe = Stripe('pk_test_0t85o0Llo0MbBfC9imSzznam');
      this.elements = this.stripe.elements();
      if (!this.card) {
        this.card = this.elements.create('card');
        this.card.mount(this.cardElement.nativeElement);
      }
      this.cardInitialized = true;
    }
  }

  initializeBackButtonCustomHandler() {
    this.navController.back();
  }

  async processPayment() {
    if (this.paymentForm.valid) {
      const formValues = this.paymentForm.value;
      formValues.email = this.avatarService.user.email; // Use email from avatarService

      this.showLoading();

      try {
        const setupIntentResponse = await this.paymentService.createSetupIntent(formValues.email).toPromise();
        const clientSecret = setupIntentResponse.client_secret;

        const { setupIntent, error } = await this.stripe.confirmCardSetup(clientSecret, {
          payment_method: {
            card: this.card,
            billing_details: { email: formValues.email },
          },
        });

        if (error) {
          await this.showAlert('Payment Error', error.message);
          throw new Error(error.message);
        }

        const paymentMethodId = setupIntent.payment_method;
        const paymentMethod = await this.paymentService.retrievePaymentMethod(paymentMethodId).toPromise();
        const cardDetails = paymentMethod.card;
        const last4 = cardDetails.last4;

        const cardExists = await this.avatarService.checkCardExistsStripe(formValues.email, last4);
        if (!cardExists) {
          await this.avatarService.addCardStripe(formValues.email, paymentMethodId, last4);
        }

        await this.modalController.dismiss({ success: true, paymentMethodId });
      } catch (error) {
        await this.showAlert('Error', error.message || 'An unexpected error occurred.');
      } finally {
        this.hideLoading();
      }
    } else {
      this.showAlert('Form Error', 'Please fill out all required fields.');
    }
  }

  async showLoading() {
    this.loading = await this.loadingController.create({ message: 'Processing payment...' });
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

  closeModal() {
    this.modalController.dismiss();
  }
}
