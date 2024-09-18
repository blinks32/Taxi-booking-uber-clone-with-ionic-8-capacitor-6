import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@capacitor/network';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {
  approve: boolean;
  isConnected: boolean;
  private networkStatus$ = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async CheckNetwork(){
    await this.monitorNetwork();
  }  


  async monitorNetwork() {
    this.approve = true;
    const status = await Network.getStatus();
    this.isConnected = status.connected;
    this.networkStatus$.next(this.isConnected);
    console.log("Monitor Network Called..");

    Network.addListener('networkStatusChange', async (status) => {
      console.log("Monitoring Network........");
      this.isConnected = status.connected;
      this.networkStatus$.next(this.isConnected);
    });

    this.networkStatus$.subscribe((isConnected) => {
      if (isConnected) {
        this.approve = false;
        this.router.navigate(['home']);
      } else {
        this.approve = false;
      }
    });
  }


}
