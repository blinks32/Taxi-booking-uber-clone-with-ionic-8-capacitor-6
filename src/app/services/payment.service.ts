import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private serverUrl = environment.serverUrl;

  constructor(private http: HttpClient) {}

  createSetupIntent(email: string) {
    return this.http.post<{ client_secret: string }>(`${this.serverUrl}/setup-intent`, { email });
  }

  savePaymentMethod(email: string, paymentMethodId: string) {
    return this.http.post<{ paymentMethodId: string }>(`${this.serverUrl}/save-payment-method`, { email, paymentMethodId });
  }

  retrievePaymentMethod(paymentMethodId: string) {
    return this.http.post<any>(`${this.serverUrl}/retrieve-payment-method`, { paymentMethodId });
  }

  checkCardExistsStripe(email: string, last4: string) {
    return this.http.post<{ exists: boolean }>(`${this.serverUrl}/check-card-exists`, { email, last4 });
  }

  payWithStripe(amount: number, currency: string, paymentMethodId: string, customerId: string) {
    return this.http.post<{ paymentIntent: any }>(`${this.serverUrl}/pay/stripe`, { amount, currency, paymentMethodId, customerId });
  }

  processPaymentWithCardId(email: string, amount: number, cardId: string): Observable<any> {
    return this.http.post('/api/process-payment', { email, amount, cardId });
  }

}
