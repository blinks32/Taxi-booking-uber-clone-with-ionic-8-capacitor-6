import {Component, NgZone} from '@angular/core';
import {ViewController} from 'ionic-angular';
declare let google;
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  templateUrl: 'autocomplete.html'
})

export class AutocompletePage {
  autocompleteItems;
  autocomplete;
  service = new google.maps.places.AutocompleteService();

  constructor (public viewCtrl: ViewController, private zone: NgZone) {
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
  }
  
  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: {country: 'NG'} }, (predictions, status) => {
      me.autocompleteItems = []; 
      me.zone.run( () => {
        predictions.forEach( (prediction) => {
          me.autocompleteItems.push(prediction.description);
        });
      });
    });
  }
}