import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { AnimControlProvider } from '../../providers/anim-control/anim-control';
import { ProfileProvider } from '../../providers/profile/profile';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Geocoder,
  LatLngBounds,
  LatLng
 } from '@ionic-native/google-maps';
declare var google: any;
/*
  Generated class for the NativeMapContainerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NativeMapContainerProvider {
  public onLocationbarHide: boolean = true;
  public onDestinatiobarHide: boolean = false;
  public lat: any;
  public lng: any;
  public startPos: any;
  public client: any;
  public driver: any;
  public speed: number = 50; // km/h
  public marker: any;
  public cars: any = [];
  public car_location: any = [];
  public car_notificationIds: any = [];
  public delay: number = 100;
  public hasRequested: boolean = false;
  public isCarAvailable: boolean = false;
  public uid: any
  public onGpsEnabled: boolean = false;
  isNavigate: boolean =false;
  locations: any;
  location: any;
  timer1: any;
  map: GoogleMap;
  public onbar: boolean = false;
  public onbar1: boolean = false;
  public onbar2: boolean = false;
  public onbar3: boolean = false;
  public toggleBtn: boolean = false;
  public onPointerHide: boolean = false;
  mapElement: HTMLElement;
  public pan: number = 0;
  public detectCarChange: any;
  public hasDone: boolean = false;
  public hasStart: boolean = false;
  public hasShown: boolean = false;
  public D_lat: any;
  public D_lng: any;
  constructor( private googleMaps: GoogleMaps, public zone: NgZone, public myProf: ProfileProvider, public anim: AnimControlProvider, public gcode: GeocoderProvider, public platform: Platform) {
  }


  loadMap() {
    console.log('map called')
    
    
    let lat;
    let lng;
    let zoom;
      lat = 5.4982219
      lng = 7.5019607
      zoom = 6
      
    
    
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: lat,
          lng: lng
        },
        zoom: zoom,
        tilt: 10
      }
    };

    this.map = this.googleMaps.create(document.getElementById("map"), mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
        this.map.setCompassEnabled(false)
        this.map.setTrafficEnabled(false)
        this.map.setIndoorEnabled(false)

        this.hasStart = true;

        this.map.getMyLocation().then(location =>{
          console.log('sucess location found');
            
            this.AnimateToLoc(location);
            this.location = location;

            this.gcode.Reverse_Geocode(location.latLng.lat, location.latLng.lng, this.map, false)
        
         
        })

      });
  }



  checkGps(){
    let mapOptions: GoogleMapOptions = {
      camera: {
      }
    };
    this.map = this.googleMaps.create(document.getElementById("op"), mapOptions);
    this.map.getMyLocation().then(location =>{
      console.log('location now on')
    })
  }


  PumpControls(){

 
 this.map.on(GoogleMapsEvent.CAMERA_MOVE_START).subscribe(start =>{
   
 
 if (!this.hasRequested){
    this.map.refreshLayout();
    let centerBar = document.getElementById("onbar").style.display = 'none'

    let location = document.getElementById("location").style.marginTop = '-140px'
    
    this.onDestinatiobarHide = false

    clearTimeout(this.timer1);
    
    let bottomBar1 = document.getElementById("bar2").style.display = 'none'
   }
   
       
  });

  this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe(start =>{
    
   
  
   if (!this.hasRequested){
       this.map.refreshLayout();
        //this.onbar = true;
      //  this.onLocationbarHide = true

      let centerBar = document.getElementById("onbar").style.display = 'block'

      

      let location = document.getElementById("location").style.marginTop = '-50px'

      let center = this.map.getCameraPosition();
      this.lat = center.target.lat;
      this.lng = center.target.lng;

      // if (this.locations != null)
      // this.showCloseDrivers(this.lat, this.lng)
      console.log('should animate end')
      
      this.gcode.Reverse_Geocode(this.lat, this.lng, this.map, false)
      }
    
     
  });

  }




  AnimateToLoc(location){
  
    console.log('ani to loc')
   this.map.animateCamera({
    target: location.latLng,
    zoom: 17,
    tilt: 10,
    bearing: 0,
    duration: 1000
   }).then(suc =>{
    console.log('camera done')
     this.lat = location.latLng.lat
     this.lng = location.latLng.lng
      this.startChecking()
      console.log(this.lat, this.lng)
      this.PumpControls();
      this.showDriversOnMap();
     
       this.hasShown = true

      let centerBar = document.getElementById("onbar")
      centerBar.style.display = 'block'

      this.hasRequested = false;
    
    this.map.addMarker({
      title: '',
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEcUlEQVRIS7WVfUxVZRzHf7/nuQx8QZJLEC81MXpZsjSuZOrEc869CDhoZTW16GXiRXvbrCxa/lFuQdqLmE5mMuacq1Z3gxISHPc8B1dopGEMxlTYNZp6s4WUFl2unOdp5+DFc4GL9EdnO9vdOc/9fH+/7+/lIPzPF96Ej7mS5OCIRQIxi3OeZJynAL8iIe0c4BBj7BQAiEiciAK5suy8JsR7lJBsrutXgJB2iug3QBwgRej6A4TSWQjQhkKUNWva0YlExgk4HI6o2bGxOwQhLwEAQyHeHxZCbWlpGbYCJEmyEUJyAaAMAZYj5zuHAV4fey5MwIDfEhf3Jdf1FcRmK1VV9bPJ0r8uiE6n8xkQYi8ANMTb7Ws8Ho8eCiZMwCVJu3Uh1tkIWdGsaa1Tqf/iwicfjNYDF6MCA3dyxCYuRJWmaa+NEzA854heQCxWVfXTqcCz1m5Wfk5fVT3zSt+lub7aVbZ/fl8pEGsAMUdV1W8NRigDlCSpjRJyVWXMNQVbwID3pRXV9KflzDF6aM7pgydmnDuanxj0fU0QicrY0lGBXElayAk5gULkezXtiPEiLy8veZjSWPXw4bNjszHh6UU1/ckj8NB9T8dHx5PPNeyghHi4EAs0TeswM3DK8lbO+SaBaDe6YNHDa5Mu3P1o7bXouBm3d9cVn6zb2xUSMeFzi2r6U8LhMX/7A2m+r7bcdb5+T2Bw8DJSWsEYKzcFFEWpF0LM1DRNdjxRGjeQuqTZN//ZbCOytDP13Um+hjU/evZ1Zj29Wem744YtocgNeEZXdWXXwbffMniSJB0jhPgZY4+ZApIk/WAjpHeY83W/ZK4+4svemGNNPaX3m+64/tObfkvM3hfyfBT+lz+Q0XkDbjqiKB4ASDHqECbgZeypee6KD3uyN7wcjI6PsorEn2/TL6csouYzPuJ7TAh+YCTy0DVOwClJhwQhsxhjknEo012+qydr/fND0xNtVhHr75ir/kBGR3Vl1xh4yCJK6UVVVR83M3Apyju6rr8SKrLxbF5J+Z6ehe7S4PRbx4mY8FMTwwsKCqKDQ0MDgPiuqqoVpoAsyw6CeFIArGSMNYZSvW99eVWvw+22isT8GRlu+u90PgJC1CEh93u93s7RQXMpynEOEGCMydZByyzZWnU2+wV3cFqCLeYPfyDjp+rKrv3hnlvsNwa2FRF1TdOWWScZcmV5OUdsAcTnVFU9YC3avRu27bqULpeknmn6eBI4uGS5VCB+IgCWMsaOhQmYtZCkSkHIRiJE/tj9vrRg9UOtjV98H2lHKYqiCF1vpJRWehl7c8Jtaux4SsjnAFCIQrzo1bT9U9hL6JJlt875bkJpbbzdXhxxXV9vMRsibieIr3IhvgOADxISEpo8Hk/QGr3ZLcFgga7rb1BCFiPA9tl2+xYrfJxFYcPidC4DIbYBwBKu64MCsYMScsE4o3OeSglZAADTjCAQsSzk+VgLb/bRN1p4PiIWAkAWAtxmAka+ze2IWG+0YqS6TJrBZH/6L+/+BedwGDdvfYzpAAAAAElFTkSuQmCC",
      animation: 'DROP',
      position: location.latLng,
    })
    .then(marker => {
      this.marker = marker
      console.log('marker added')
     
      this.map.addCircle({
        'center': location.latLng,
        'radius': 300,
        'strokeColor' : '#A0BAE7',
        'strokeWidth': 5,
        'fillColor' : '#5992F5'
    }).then(circle=>{
      setTimeout(()=>{
        circle.setRadius(0)
          }, 1500)
    });
   })

  })

}



startChecking(){
 this.timer1 = setTimeout(() => {
  this.map.getMyLocation().then(location =>{
    this.location = location;
    this.map.moveCamera({
      target: location.latLng,
      zoom: 17,
      tilt: 10,
      bearing: 0,
     }).then(suc =>{
      this.marker.setPosition(location.latLng)
      this.startChecking();
     })
  })
 }, 5000);
}


RefreshMap(address){
  let centerBar = document.getElementById("onbar")
  centerBar.style.display = 'none'
  var geocode = new google.maps.Geocoder;
  geocode.geocode( { 'address': address}, (results, status) => {
   if (status == 'OK') {
    var position = results[0].geometry.location
    let matLatr = new LatLng(position.lat(), position.lng());
    this.map.animateCamera({
      target: matLatr,
      zoom: 17,
      tilt: 10,
      bearing: 0,
      duration: 1000
     }).then(suc =>{
    let centerBar = document.getElementById("onbar")
    centerBar.style.display = 'block'
    console.log(this.lat)
     })
   } else {
    // alert('Geocode was not successful for the following reason: ' + status);
   }
   
   })



  
}


Reset(){
  let centerBar = document.getElementById("onbar")
  centerBar.style.display = 'none'
  this.map.animateCamera({
    target: this.location.latLng,
    zoom: 17,
    tilt: 10,
    bearing: 0,
    duration: 1000
   }).then(suc =>{
    console.log('camera done')
     this.lat = this.location.latLng.lat
     this.lng = this.location.latLng.lng
     this.showDriversOnMap();
    
        this.startChecking()

     console.log(this.lat, this.lng)
     let centerBar = document.getElementById("onbar")
     centerBar.style.display = 'block'
     this.hasRequested = false;
    
    this.map.addMarker({
      title: '',
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEcUlEQVRIS7WVfUxVZRzHf7/nuQx8QZJLEC81MXpZsjSuZOrEc869CDhoZTW16GXiRXvbrCxa/lFuQdqLmE5mMuacq1Z3gxISHPc8B1dopGEMxlTYNZp6s4WUFl2unOdp5+DFc4GL9EdnO9vdOc/9fH+/7+/lIPzPF96Ej7mS5OCIRQIxi3OeZJynAL8iIe0c4BBj7BQAiEiciAK5suy8JsR7lJBsrutXgJB2iug3QBwgRej6A4TSWQjQhkKUNWva0YlExgk4HI6o2bGxOwQhLwEAQyHeHxZCbWlpGbYCJEmyEUJyAaAMAZYj5zuHAV4fey5MwIDfEhf3Jdf1FcRmK1VV9bPJ0r8uiE6n8xkQYi8ANMTb7Ws8Ho8eCiZMwCVJu3Uh1tkIWdGsaa1Tqf/iwicfjNYDF6MCA3dyxCYuRJWmaa+NEzA854heQCxWVfXTqcCz1m5Wfk5fVT3zSt+lub7aVbZ/fl8pEGsAMUdV1W8NRigDlCSpjRJyVWXMNQVbwID3pRXV9KflzDF6aM7pgydmnDuanxj0fU0QicrY0lGBXElayAk5gULkezXtiPEiLy8veZjSWPXw4bNjszHh6UU1/ckj8NB9T8dHx5PPNeyghHi4EAs0TeswM3DK8lbO+SaBaDe6YNHDa5Mu3P1o7bXouBm3d9cVn6zb2xUSMeFzi2r6U8LhMX/7A2m+r7bcdb5+T2Bw8DJSWsEYKzcFFEWpF0LM1DRNdjxRGjeQuqTZN//ZbCOytDP13Um+hjU/evZ1Zj29Wem744YtocgNeEZXdWXXwbffMniSJB0jhPgZY4+ZApIk/WAjpHeY83W/ZK4+4svemGNNPaX3m+64/tObfkvM3hfyfBT+lz+Q0XkDbjqiKB4ASDHqECbgZeypee6KD3uyN7wcjI6PsorEn2/TL6csouYzPuJ7TAh+YCTy0DVOwClJhwQhsxhjknEo012+qydr/fND0xNtVhHr75ir/kBGR3Vl1xh4yCJK6UVVVR83M3Apyju6rr8SKrLxbF5J+Z6ehe7S4PRbx4mY8FMTwwsKCqKDQ0MDgPiuqqoVpoAsyw6CeFIArGSMNYZSvW99eVWvw+22isT8GRlu+u90PgJC1CEh93u93s7RQXMpynEOEGCMydZByyzZWnU2+wV3cFqCLeYPfyDjp+rKrv3hnlvsNwa2FRF1TdOWWScZcmV5OUdsAcTnVFU9YC3avRu27bqULpeknmn6eBI4uGS5VCB+IgCWMsaOhQmYtZCkSkHIRiJE/tj9vrRg9UOtjV98H2lHKYqiCF1vpJRWehl7c8Jtaux4SsjnAFCIQrzo1bT9U9hL6JJlt875bkJpbbzdXhxxXV9vMRsibieIr3IhvgOADxISEpo8Hk/QGr3ZLcFgga7rb1BCFiPA9tl2+xYrfJxFYcPidC4DIbYBwBKu64MCsYMScsE4o3OeSglZAADTjCAQsSzk+VgLb/bRN1p4PiIWAkAWAtxmAka+ze2IWG+0YqS6TJrBZH/6L+/+BedwGDdvfYzpAAAAAElFTkSuQmCC",
      animation: 'DROP',
      position: this.location.latLng,
    })
    .then(marker => {
      this.marker = marker
      console.log('marker added')
     
      this.map.addCircle({
        'center': this.location.latLng,
        'radius': 900,
        'strokeColor' : '#A0BAE7',
        'strokeWidth': 5,
        'fillColor' : '#5992F5'
    }).then(circle=>{
      let y = setTimeout(()=>{
        circle.setRadius(0)
          }, 1500)
    });
   })

  })
}



showDriversOnMap()

 {
  this.platform.ready().then(() => {
  let allCars;
  let id
 
  this.myProf.getAllDrivers().on('child_added', driverSnapshot => {
 
  this.isCarAvailable = true;
  this.locations = [driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]];
  this.locations.push([driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]])
  
  id = [driverSnapshot.val().driver_details[2]];
  
  let marker, i;
  console.log(this.locations.length)



  var CARS = [
    {
      position: {lat: this.locations[0], lng: this.locations[1]},
      icon: 'data:image/png;base64,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'
    },
  ]

  if (CARS.length <= 3){
   
  CARS.forEach((markerOptions) => {
    this.map.addMarker(markerOptions).then(marker =>{
    //  marker.setIcon(icon);
    });
  });

      
        this.cars.push(allCars);
        console.log(this.cars)
}      
        

      console.log(this.locations[1])
      
      this.car_notificationIds.push(id)
    
      this.myProf.getAllDrivers().off('child_added');
    
      console.log(this.car_location);
     
      //console.log(driverSnapshot.val().driver_details[2], this.location.length, driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1])
    })

    this.myProf.getAllDrivers().on('child_changed', driverSnapshot => {
    
       this.locations = [driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]];
       this.locations.push([driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]])
       
       id = [driverSnapshot.val().driver_details[2]];
       
       let marker, i;
       console.log(this.locations.length)
     
     
     
       var CARS = [
         {
           position: {lat: this.locations[0], lng: this.locations[1]},
           icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAoCAYAAAC4h3lxAAAJUklEQVRYR+2XB3AU1xnH/7u3V3UFSdydkJB0SKeGkA6EEIhiDITQjBMHQhHggAMyeBKwwam4BANOwtgBmwkwmWAIg2MbgzHYEKxQTLUJCCGQQZRTRZauSHfSSVe3ZHZvpKAuepjhzezMzr5v3/t+7/9933uPwGPeiMfcfzwBeNQKPlHgsVaAOwYKT4MlCLCPCuSOQoi7ABNY/IjhMK6ugUq7VNo7tLgyjLM4Q3wur9wHgsbAKHNpWqLrTAjFHUuK9RwkMuF+kHA9AuDOYTpL4DWvlzRtO5yMc+YEEFQYxBQl+ObxOGCKvoGZT11HtNYjfHM2UqhrknuY0AVXlCLr2sihH+99ECBdAvAhwqqwlQSe33UiBvvzs6FQqFv88HoaMHHgOcwaXQqS4Fq+c5DArchBRWAe/n38CvSaeqQr3z6jkLKvGZ7xHrufIF0CMPnYQXKY996+FFyqyoZIJBLm5jgOavENrMo5DaWcbuUPzalRqz+Mzw7k44sDhyASkRhkSsG8IVugljXC7qLyjHr3S7IRMN8PkA4BzsfFaWIWWVdpxzcu4yfJfX8k/FwYFJImaFUNSI+twrCU2iAMAIWEQZg6CHLZuRDhKauwfsP7YJgA4kLPIGfE+ZZ+lgXKLTK/SMRtiIn1vU6kwn8vIB0CFIyM2hD6omVxr2haSgUXHSwH8JPzj9sngstNQSFjoQsNIMCI4GgQC3b1TRJ8XTYThO8y5ow8j1BVa4WaneVzxOYQ3zBEeGZJsnHhbiHaAXAAcXmFsjBsApUGKhygnQDjRJMH2HUiCvnmfghwalCUSAilQMCLCI0NU4aUYkKmAxanHL2UNMLVgU594p3f/GUSzt+MhFzi5pY9W7Qya279H+8Goh2Adb1ikjvKd5BSMgApBWTJgCgUX5+1YvshLXS6qA7nqbbYECKuxbLnbiLd6EEgQCKqt6+Vrb1ejHW701B8KxIUFVSMbzQdwOTBRWcWjy4bl7F8kKqgoICPzx7tLe0VyMevqixY12pmsR6QJcHhYvHB3kaYrbFQhoS0MrlZUoYIvQ4kSSArLh9LplbB5aEQrfXB6yex7tNU5JsNEImCpbdtY1kWiRFm5+nL1OkGt2hz0cX8Az1RpD3AOcyrsmFHu58JCjSpg4fRw+oQY9MeEowoGhKxWAilwu+uIjU5UdgbAgEaybp8vDy9HBfNGmz8IhMEqRCqGEmSwiMUAI4THoZhwAME5bCwY9Mqlv/y7Vvv3RXAL2ZFR74y+9Z5qZjrw1eYOheFMBUtnLtpBqAkakCWAoiUOPqNHbuOhQvvpeWVMA1IaZnT5/djYvopBFg5vi0ZBbFY3OJ4R47xEIFAAH6/H7TfincXfbPaMNn7RncQLQokJyeHEwSRQNN0+MKp9gEzxjnW/uGDGFGVKxVKiR25E4vRP9aFYFUiAElfQBoHnx/46IAV+0+FwGhMbDVfg6seq+ccxZ/2ToJaHd6dL0I/w7CodTiRqC3An3NLdhNizCdMaOrsZwEgOTk5kWGYhNuNcqfUZX91dejv0lL7k6mp/XHq1HFMz/gMA+NdLWaFJRqY+vcBLeoDe60Pm3b74fTGQiaTtthQTDGeTrfjdMn4LhUIJjON6horrHYbNrx0DaPS6vmyfZkk8GNiCEo6guhQgWbDpJT+n6anp8ufmTwJf9+2HYzbjNdnHIVMzGHFlnjB7N3FZuSbtRicqoTTrUZJFYmtXyohU0QJu7DH68XSyV9h27HhkCoMHS6k28NXLRq22jp43XasfaEEYwY6W2xZoI4kMYPIwJG2A7RL4ttDSapQvbjw5/OnDs7IgNVqw4WCAozQrUNavBeXSpTCWDvy9OA44C9LzCgs08OUGguGUGL7XjsOng2BRCxDcmQJXp5uw5rdz0KpVLXKE5u9FjTNwlHvxJj0Grz601vQhbbfnFmAJoFlRCY23Q7R6VmIBwGQqI8xfJ4UF6cbNnQIzp47h6zInfQ4UwO/jwkqPP9Di5Dc/zyib1GksDwaRRV67D8ZgKuRE3bvvW9dwaUyHXb/ZwxIgoDd4YDH44FSUo8RA6yYOdqO+MjgSbarVumbtj1mxJ4FzTbdHqeNRqNWrlJ9qNNFjLpVXWOjvU1rVs6xGAYnuXI0SjaWIoHlm+PxswmWFkWCoVWKwgoDTKnRuFnuBkmXYWCcDVanHNV1EsglLGJ0Xmh7db5jdwRy3JWHvpqrbxgzlq3m+7sFaB7k9tBq/vbbedbhmUmuHKWMNUjF/1OkObQEkCXlgNQAiKMA33WEK6ohk3S3zp337yhYi6R+WuewH+SG3hFAT0A0IayBV6Q5tJpB+EQHKQOkRhCcB1qFGeKON+QuyRwuCofLXsHI5BtcH+nneiIDth4r0HbkrhRpC5JqaAQPJjSRGiKxBlplFURkj447wm/f26VY+lcjXp1Dg/JfB81yc7Pn48O7BuhKkV/PsQ7PSnLN1qjYfrzjNAv4fCR9skhNRYTSMBkbIRZLodX4wJ8qOFIFhowAydaBZIP3jOZW10Bh13Ed/pGnx09G2jHOVIkqG4F0IzfFMBUH7xmgO5ChSa7ZIQq235qdMRynGk9IJTKwrmNYMe0aF6ZiCE2fp1DkfQc+P42LFy8ioa8fRtlGHDrtwfnrKuRfVyKhrwe5kyshE7lQaaEAiip6a5thWnFx8fX7BtAdyEcnkpbOX7BU6XA4UFNjQWPNHvxm+lXIpCRCImeiKfRNBDgNystLES67iaP7fg+vn8PgBAdC+KzX5qLaYkdDxScXjxb1nvy3neXVd5XEPa0fbXNEIpevzMoamr3ohQX47soV3DSXYEzf9RjQz4MwDSBXqOEXxYPxWtDoqkWtw4eaWoChopEw9jACfg/XWL7xE9P4rTkEIdxkhXbfFegs2VmWjX9qzNgdI7KzSf4uUVB4CRrPZuSMtUIhA0LVwL/OBP/mWOCWXYrva2XQ66J8Q0bPLkrVnnxOkZZX2Xb8Bw5we2iRpCR30OBBa7OyhhDFV6+hpmJfw5tzq+y91Uy/KB2I9R+HoMEjgYwi6Eh94EpmgndjSv/Ajq4u/g8NoBkkJT1zAMEy7/A3Rtrv2cJxXCA2gpGNGeSK7BNOq91+siLvW3Xe/iOlwa29m/bQATpLdoqiajmOu1FcXNy6jv6/AtwOwr/fqeMPLYm7C4F77X9kIXSvjj9R4H6t4L2O81/vrNxWUEL/kAAAAABJRU5ErkJggg=='
         },
       ]
        
       CARS.forEach((markerOptions) => {
         this.map.addMarker(markerOptions).then(marker =>{
          marker.setPosition(marker.position)
         });
       });
     
           
         
         })
  })
 }




  setMarkers(driverlocation, uid)
  {

    this.driver = this.map.addMarker({
      title: '',
      icon: 'data:image/png;base64,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',
      animation: 'DROP',
      position: {
        lat: driverlocation[0],
        lng: driverlocation[1]
      }
    }).then(marker =>{
      this.detectCarChange = setInterval(() => {
      this.moveDriver(marker);
    }, 4000);
    
    });

    

    this.client = this.map.addMarker({
      title: '',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE/0lEQVR4Xu2aZ+i3UxjHP4+9iYx4ISSREdlblJHx4OnJ5gXZJUKRUBQhygjJlpGV7K3M7C3Ze2Uke/bRuet0+41zj9+5X/zuU/83v/91zvle33Nd17mu69wzmPIxY8r1pyegt4ApZ6B3gSk3gD4I9i7Qu8CUM9ClC6wDbAMsDnwG3AW8m/s8uiBgSeBKYIeSsn8DlwJHAb/lIiI3AYsCTwGrjlDwHmBHQEImPnITcCFwWIJWhwCXJMg1FslJwILAN8B8CahfA9ZIkGsskpOAjYEnKiBeBPixgnwt0ZwEGPEfqIByaeCrCvK1RHMSsALwXiLK78P1+E+ifG2xnAQI8llg3QS0FwOHJsg1FslNwCbAo8BcI5AbKA2AXzTWLmGB3AQcCJwFLDYC2/uA1+D9Cfgbi+QiYE7gCmDfRMT6/nHA2YnytcVyEXA6cEINlLsBt9WYlzwlBwFG/7eD33uyKXsWcp8CKwK/J2tUUTAFTMUl/yd+CnAy8AdwE7B3woJXA/sFuV2B2xPm1BLJQYDJj0nQfcBzwIkJSPcEzgGWDXHg2IQ5tURyEPACsDZwEfBdBQIsmjYDromsoZaSoyblIOAlYC3AStAML9UCvAq3AK4D9mld87BgT8CkmI3W7S2gd4EpjwFegeb+7wCzKgTBzwEbqB+GKnIi3pojCMbAT6tAwA0T0bi06KQJmCdcZVsB64VeQFwJfgR8DawGzB9h8/TtHTwZukjmEhMZkyLAR4/Dgd0BW+HDxpHABUBxUwyT0w2uBWyUfNImE20TYOFyLrBzCaQKPA5sCKwU/W8YAY8AdpElMm6eWBRdBpwEfNsGEW0SYLZmL3+BAEzzvjwUQG+G3+4Ftk0gwFrAGGBnePtQQPmSZF/BYbfIourhpiS0RcDBwTwLcKa7VnR/lgBWJSCeruWcGlWTVpd7ATc3IaENAjTTZ4KpqqCgLHoGjSYEFOtpCdcH6/gV2AB4pS4JbRBwB7BTePQw2nsyw0YbBLi2VaJxQpfQDbbuggDL26WC8l53Xlv6fTG8843u8fDhc7uEGLAHcGNp7szS3F2AZYKMbTMfU22le60mjyYW8AGw/IidDF6eeDy8yuKO0LBbwBMtB7gzgOPHaGb7TVzJowkBVwE+X2mORn4jfWwBBsLnS0g2D6Y7R/h9EAFvhOKpHECPAA6I1vOJ3X09+eLJbX/gy2TtExuU49bzo4aDgJcBHz5+GjNBU7ZL7Gk5z4aH7TLnqoikjEt2tgQeDDHgzuCG43AO/H8TCygWXC5EYT91eRqYDXxcC03apDjf+Dmk10WekbZCJNUGAS6nG9wNLBSetH3QOH/EdVgZKLApYIe5iPh+RmN1qQXUHm0RIAD7fkbuVQKaX8Kjxi3AQ8APA1AeHfzYgGfhEw+xrR4+lzEzjD+YMND5mxbXaLRJgEDmBY4BbGPHVd9fwOvAi8BbocY3WN0aiiVTaE9SdzLjU/H1gSVK2vnBxHnAmQmxJomYtgkoNtUV9FX/NgKKqJ8EqiTkK5E5hleo6fUgS6qz7n9zJkVADMiujlHblHVNYOVw0nMPQG0WaS/A7tGrIcU245vYU3kOAgadjvsuHKpFewZ+OmeO7+lO/KuQcqCpbT4tTCwyw8eClbSwZLUlurKAAqW5uwmQ97jJUfbRNQHZFS5v2BPQ+RF0DKC3gI4PoPPtewvo/Ag6BtBbQMcH0Pn2/wLJ+fdBzNOruQAAAABJRU5ErkJggg==',
      animation: 'DROP',
      position: {
        lat: this.lat,
        lng: this.lng
      }
    })
  
    let arrayOfLatLng = [ new LatLng(driverlocation[0], driverlocation[1]), new LatLng(this.lat, this.lng)];

    let bounds = new LatLngBounds(arrayOfLatLng);

    let center = bounds.getCenter();

    var mapElement = document.getElementById('map');
    var mapDimensions = { 
        height: mapElement.offsetHeight,
        width: mapElement.offsetWidth
    };

   
    var zoom = this.getBoundsZoomLevel( bounds, mapDimensions );
      
    this.map.moveCamera({
            target: center,
            zoom: zoom
          }).then(suc=>{
            
           this.isNavigate = true;
         
          })
   
  }


  moveDriver(marker){
  
      console.log('This is the marker: '+  marker)
      let latLng = new LatLng(this.D_lat, this.D_lng)
      console.log('This is the latlng: '+  this.D_lat, this.D_lng)
      marker.setPosition(latLng);
   
  }



  getBoundsZoomLevel(bounds, mapDim) {
    
        var WORLD_DIM = { height: 256, width: 256 };
        var ZOOM_MAX = 21;
  
    
        var ne = bounds.northeast;
        var sw = bounds.southwest;
    
        var latFraction = (this.latRad(ne.lat) - this.latRad(sw.lat)) / Math.PI;
    
        var lngDiff = ne.lng - sw.lng;
        var lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;
    
        var latZoom = this.zoom(mapDim.height, WORLD_DIM.height, latFraction);
        var lngZoom = this.zoom(mapDim.width, WORLD_DIM.width, lngFraction);
    
        return Math.min(latZoom, lngZoom, ZOOM_MAX);
    }
    
    
     latRad(lat) {
    
      var sin = Math.sin(lat * Math.PI / 180);
      var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
      return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    }
    
     zoom(mapPx, worldPx, fraction) {
      return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
    }

  
  
}





