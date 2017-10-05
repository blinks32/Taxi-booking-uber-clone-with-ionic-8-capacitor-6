import { Injectable } from '@angular/core';
import { OneSignal} from '@ionic-native/onesignal';
/*
  Generated class for the OnesignalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OnesignalProvider {

  constructor(public One: OneSignal) {
  
  }

  
 sendPush(id){
  this.One.getIds().then( success => {

    let notificationObj:any = {
      include_player_ids: id,
      contents: {en: "New Passenger To Pick Up"},
      };
  
  this.One.postNotification(notificationObj).then( good => {
      
      //alert("Notification Post Success:\n" + id);
    }, error => {
      console.log(error);
      // alert("Notification Post Failed:\n" + JSON.stringify(error));
     // alert("Notification Post Failed:\n" + id);
    });

  })
}
  
}
