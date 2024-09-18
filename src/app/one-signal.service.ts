import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import OneSignal, { OSNotificationPermission } from 'onesignal-cordova-plugin';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OnesignalService {
  public playerID: any;
  constructor(private alertCtrl: AlertController, private http: HttpClient) {}

  async OneSignalInit() {
    // Uncomment to set OneSignal device logging to VERBOSE
    //OneSignal.Debug.setLogLevel(6);

    // Uncomment to set OneSignal visual logging to VERBOSE
    // OneSignal.Debug.setAlertLevel(6);

    // NOTE: Update the init value below with your OneSignal AppId.
    OneSignal.initialize(environment.onesignal.appId);

    this.playerID = await OneSignal.User.getExternalId();

    alert(this.playerID);
  
    let myClickListener = async (event: any) => {
      let notificationData = JSON.stringify(event);
      console.log('notification data: ', notificationData);
    };
    OneSignal.Notifications.addEventListener('click', myClickListener);
  }

  // onesignal notification permission
  async OneSignalIOSPermission() {
    try {
      if (Capacitor.getPlatform() == 'ios') {
        const ios_permission = await OneSignal.Notifications.permissionNative();
        if (ios_permission != OSNotificationPermission.Authorized) {
          this.OneSignalPermission();
        } else {
          this.requestPermission();
        }
      } else {
        // for android
        this.OneSignalPermission();
      }
    } catch (e) {
      console.log(e);
    }
  }

  // Call this function when your app starts
  async OneSignalPermission(msg: string = '') {
    try {
      const hasPermission = OneSignal.Notifications.hasPermission();
      console.log('hasPermission: ', hasPermission);
      if (!hasPermission) {
        // show prompt
        this.showAlert(msg);
      }
    } catch (e) {
      throw e;
    }
  }

  async requestPermission() {
    try {
      const permission = await OneSignal.Notifications.canRequestPermission();
      console.log('permission: ', permission);
      if (permission) {
        // Prompts the user for notification permissions.
        //    * Since this shows a generic native prompt,
        // we recommend instead using an In-App Message to prompt for notification
        // permission (See step 7) to better communicate to your users
        // what notifications they will get.
        const accepted = await OneSignal.Notifications.requestPermission(true);
        console.log('User accepted notifications: ' + accepted);
      } else {
        console.log('permission denied: ', permission);
        this.OneSignalPermission();
      }
    } catch (e) {
      throw e;
    }
  }

  showAlert(msg: string) {
    this.alertCtrl
      .create({
        header: `Allow Push Notifications${msg}`,
        message:
          'Please allow us to send you notifications to get latest offers and order updates...',
        buttons: [
          {
            text: "Don't Allow",
            role: 'cancel',
            handler: () => {
              console.log('Confirm Cancel');
              this.OneSignalPermission(" (It's mandatory)");
            },
          },
          {
            text: 'Allow',
            handler: () => {
              this.requestPermission();
            },
          },
        ],
      })
      .then((alertEl) => alertEl.present());
  }

  sendNotification(msg: string, title: string, data: any = null, external_id?: any) {
    // ... existing code ...

    let body: any = {
      app_id: environment.onesignal.appId,
      name: 'test',
      target_channel: "push",
      headings: { en: title },
      contents: { en: msg },
      android_channel_id: environment.onesignal.android_channel_id,
      // small_icon: 'mipmap/ic_launcher_round',
      // large_icon: 'mipmap/ic_launcher_round',
      small_icon: 'mipmap/ic_notification',
      large_icon: 'mipmap/ic_notification_large',
      ios_sound: 'sound.wav',
      // filters: [
      //   {
      //     field: 'tag',
      //     key: 'type',
      //     relation: '=',
      //     value: 'user'
      //   },
      // ],
      //data: { notification_info: 'testing notification' }, //pass any object
      data: data,
      // included_segments: ['Active Subscriptions', 'Total Subscriptions'],
    };

    if(external_id) {
      // specific device or deives
      body = {
        ...body,
        include_aliases: {
          external_id: external_id
        },
      };
    } else {
      body = {
        ...body,
        included_segments: ['Active Subscriptions', 'Total Subscriptions'],
      };
    }

    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Basic ${environment.onesignal.restApiKey}`);
    return this.http.post<any>(
      'https://onesignal.com/api/v1/notifications',
      body,
      { headers: headers }
    ).pipe(
      catchError((error) => {
        console.error('Error sending notification:', error);
        alert('Failed to send notification. Please try again later.');
        return of(null);
      })
    );
  }

  
}