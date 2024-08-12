import { Injectable } from '@angular/core';
import { Client } from '@googlemaps/google-maps-services-js';
import { environment } from 'src/environments/environment';
import { OverlayService } from './overlay.service';
import { Observable, of } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

declare let google;

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {
  service = new google.maps.DistanceMatrixService();
  directions = new google.maps.DirectionsService();
  private readonly apiUrl = 'https://maps.googleapis.com/maps/api';

  constructor(private client: Client, private overlay: OverlayService, private http: HttpClient) { }

  getAddress(lat: number, lng: number): Observable<any> {
    const url = `${this.apiUrl}/geocode/json`;
    const params = new HttpParams()
      .set('latlng', `${lat},${lng}`)
      .set('key', environment.apiKey);
  
    return this.http.get(url, { params }).pipe(
      map((response: any) => response),
      catchError((error) => {
        console.error('Error in reverse geocoding:', error);
        this.overlay.showAlert('GeoError', error.message);
        return of(null);
      })
    );
  }

  // Convert the address to lat and lng
  getLatLng(address: string): Observable<any> {
    const url = `${this.apiUrl}/geocode/json`;
    const params = new HttpParams()
      .set('address', address)
      .set('key', environment.apiKey);

    return this.http.get(url, { params }).pipe(
      map((response: any) => response),
      catchError((error) => {
        console.error('Error in geocoding:', error);
        this.overlay.showAlert('GeoError', error.message);
        return of(null);
      })
    );
  }

  

  // Get the distance between the origin and destination
  async getDirections(from: string, to: string): Promise<any> {
    try {
      // You can implement the directions request here using google.maps.DirectionsService
    } catch (e) {
      this.overlay.showAlert('GeoError', e);
      console.log(e);
    }
  }
}
