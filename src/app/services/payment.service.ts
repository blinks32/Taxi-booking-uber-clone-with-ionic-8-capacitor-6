import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AvatarService } from './avatar.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private serverUrl = environment.serverUrl;


  constructor(private http: HttpClient, private avatar: AvatarService) {}

  payWithStripe(amount: any, currency: string, source: string) {
    console.log(amount, currency, source);
    return this.http.post(`${this.serverUrl}/pay/stripe`, { amount, currency, source });
  }

  payWithPaystack(email: string, amount: number, currency: string) {
    return this.http.post(`${this.serverUrl}/pay/paystack`, { email, amount, currency });
  }

  payWithFlutterwave(email: string, amount: number, currency: string) {
    return this.http.post(`${this.serverUrl}/pay/flutterwave`, { email, amount, currency });
  }

  payWithRazorpay(amount: number, currency: string, receipt: string) {
    return this.http.post(`${this.serverUrl}/pay/razorpay`, { amount, currency, receipt });
  }


  async splitPayment(totalAmount: number, currency: string, paymentMethods: { provider: string, amount: number, details: any }[]) {
    try {
      const paymentResults = [];

      for (const paymentMethod of paymentMethods) {
        let result;
        switch (paymentMethod.provider) {
          case 'stripe':
            result = await this.payWithStripe(paymentMethod.amount, currency, paymentMethod.details.source).toPromise();
            break;
          case 'paystack':
            result = await this.payWithPaystack(paymentMethod.details.email, paymentMethod.amount, currency).toPromise();
            break;
          case 'flutterwave':
            result = await this.payWithFlutterwave(paymentMethod.details.email, paymentMethod.amount, currency).toPromise();
            break;
          case 'razorpay':
            result = await this.payWithRazorpay(paymentMethod.amount, currency, paymentMethod.details.receipt).toPromise();
            break;
          default:
            throw new Error('Unsupported payment provider');
        }
        paymentResults.push(result);
      }

      await this.avatar.updateFirestoreAfterPayment(paymentResults);

      return paymentResults;
    } catch (error) {
      console.error('Error during split payment:', error);
      throw error;
    }
  }


  async initiateSplitPayment() {
    const totalAmount = 100; // Example total amount
    const currency = 'USD';  // Example currency

    const paymentMethods = [
      { provider: 'stripe', amount: 40, details: { source: 'stripe_source_id' } },
      { provider: 'paystack', amount: 30, details: { email: 'user@example.com' } },
      { provider: 'flutterwave', amount: 20, details: { email: 'user@example.com' } },
      { provider: 'razorpay', amount: 10, details: { receipt: 'razorpay_receipt_id' } },
    ];

    try {
      const paymentResults = await this.splitPayment(totalAmount, currency, paymentMethods);
      console.log('Payment results:', paymentResults);
    } catch (error) {
      console.error('Error initiating split payment:', error);
    }
  }
}
