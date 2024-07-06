// src/app/services/network.service.ts

import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private networkStatus = new BehaviorSubject<boolean>(true);
  networkStatus$ = this.networkStatus.asObservable();

  constructor() {
    this.initializeNetworkListener();
  }

  private initializeNetworkListener() {
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      this.networkStatus.next(status.connected);

      if (status.connected) {
        this.handleReconnect();
      } else {
        this.handleDisconnect();
      }
    });

    this.checkInitialNetworkStatus();
  }

  private async checkInitialNetworkStatus() {
    const status = await Network.getStatus();
    this.networkStatus.next(status.connected);
    if (!status.connected) {
      this.handleDisconnect();
    }
  }

  private handleDisconnect() {
    console.log('Disconnected from network');
    // Handle the UI or logic when the network is disconnected
  }

  private handleReconnect() {
    console.log('Reconnected to network');
    // Handle the UI or logic when the network is reconnected
  }

  isConnected(): boolean {
    return this.networkStatus.value;
  }
}
