import { Injectable, ElementRef } from '@angular/core';
import { from, Observable } from 'rxjs';

declare var Stripe: any;

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private stripe: any;
  private elements: any;
  private card: any;
  private cardInitialized: boolean = false;

  constructor() {}

  initializeStripe(publicKey: string): void {
    if (!this.stripe) {
      this.stripe = Stripe(publicKey);
      this.elements = this.stripe.elements();
    }
  }

  mountCardElement(cardElement: ElementRef): void {
    if (!this.cardInitialized && cardElement && cardElement.nativeElement) {
      this.card = this.elements.create('card');
      this.card.mount(cardElement.nativeElement);
      this.cardInitialized = true;
    }
  }

  confirmCardSetup(clientSecret: string, email: string): Observable<any> {
    return from(
      this.stripe.confirmCardSetup(clientSecret, {
        payment_method: {
          card: this.card,
          billing_details: {
            email: email
          }
        }
      })
    );
  }

  retrievePaymentMethod(paymentMethodId: string): Observable<any> {
    // Assume this method is implemented to interact with your backend to retrieve payment method
    // Replace the below line with the actual implementation
    return from(this.stripe.retrievePaymentMethod(paymentMethodId));
  }
}
