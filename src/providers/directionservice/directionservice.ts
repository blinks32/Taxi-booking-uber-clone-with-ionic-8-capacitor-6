import { Injectable } from '@angular/core';
import { PopUpProvider } from '../../providers/pop-up/pop-up';
import { EventProvider } from '../../providers/event/event';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { Platform, LoadingController} from 'ionic-angular';
import { NativeMapContainerProvider } from '../../providers/native-map-container/native-map-container';
declare var google;
/*
  Generated class for the DirectionserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DirectionserviceProvider {
  public price: any;
  public time: any;
  public canDismiss: boolean = false;
  public name: string;
  public id : any;
  public locationName: any;
  public hasGottenTripDist: boolean = false;
  public calculateBtn: boolean = false;
  public  pricePerKm : any = 55;
  public  fare : any =  200;
  public canUpdateDestination: boolean = false;
  public isDriver: boolean = false;
  destinationName: any;
  public  service : any = new google.maps.DistanceMatrixService();

  constructor(public eProvider: EventProvider, public loadCtrl: LoadingController, public platform: Platform, public cMap: NativeMapContainerProvider, public gCode: GeocoderProvider, public popOp: PopUpProvider) {

  }

  calcRoute(start, stop, isDriver, canUpdateDestination, destinationName) {
     if (!this.platform.is('cordova')){
       start = new google.maps.LatLng(5.4966964, 7.5297323)
       this.gCode.locationName = 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria'
     }
       this.service.getDistanceMatrix(
         {
           origins: [start, this.gCode.locationName],
           destinations: [destinationName, stop],
           travelMode: 'DRIVING',
           unitSystem: google.maps.UnitSystem.METRIC,
           avoidHighways: false,
           avoidTolls: false,
         }, (response, status) => {
           this.callback(response, status)
         })
      
         this.isDriver = isDriver;
         this.canUpdateDestination = canUpdateDestination;
         this.destinationName = destinationName
   
  }

  callback(response, status) {
    // See Parsing the Results for
    // the basics of a callback function.
    console.log(response, status);
    let loading = this.loadCtrl.create({
      content: 'Calculating...'
    });
  
   
    if (status == 'OK'){
      loading.present();
    if (response.rows[0].elements[0].status == 'ZERO_RESULTS' || response.rows[0].elements[0].status == 'NOT_FOUND'){
      loading.dismiss()
      this.popOp.showPimp('Destination Not Yet Supported. Please Choose Another Destination')
      if (this.isDriver)
      this.popOp.showPomp('One Or More Destination(s) Is Not Yet Available On Google Platform, To Aviod Wrong Calculations And Loss Of Money, We Cannot Process It At This Time. Try Changing Your Location.', 'We Are Working With Google To Include More Routes For Easy Access, Thanks For Understanding.')
    }else{
     if (response.rows[0].elements[0].distance.value >= 1000){
      let fareTime = Math.floor(response.rows[0].elements[0].duration.value/60) * 5.5
      this.price = Math.floor(response.rows[0].elements[0].distance.value/1000) * this.pricePerKm + this.fare + fareTime;
      //this.popOp.price  = this.price;
      this.time = response.rows[0].elements[0].duration.text;

      
      if (this.calculateBtn){
      this.popOp.showEstimateAlert("Price Estimate is NGN " + this.price + ' At NGN 55/Km ', "However, this may vary due to Weather or Traffic conditions ")
      // console.log('Estimate Cal:' + start, stop);
      this.calculateBtn = false;
      loading.dismiss();
      } 

      if (this.isDriver){
       document.getElementById("header").innerText = "Driver Arrives In " + this.time;
       loading.dismiss()
     }

     if (this.canUpdateDestination){
       loading.dismiss()
      // console.log('Time To Arrive User Cal:' + start, stop);
       this.eProvider.createHistory(this.name, this.price, 2 + ":" + 40 + ":" + 12, this.destinationName, this.destinationName  );
       this.UpdateInformation(this.destinationName, this.price);
     }
      

     }else{
       loading.dismiss()
       this.popOp.showPimp('Route Locations Are Too Close. Please Choose A Farther Route')
     }

     console.log(response.rows[0].elements[0].distance.value/1000, response.rows[0].elements[0].duration.value, response.rows[0].elements[0].duration.text)
    }
    }else{
      loading.dismiss()
      this.popOp.showPimp('One or More Of The Adress Input Is Not On Google Maps. Please Change Location And Try Again.')
    }
  }


  UpdateInformation(destinationName: string, price: any){
    this.eProvider.UpdateDestination(destinationName, price, this.id).then(success => {
      this.popOp.showPimp('Destination Set');
    }).catch(error =>{})
  }


}
