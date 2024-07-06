import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-country-search-modal',
  templateUrl: './country-search-modal.component.html',
  styleUrls: ['./country-search-modal.component.scss'],
})
export class CountrySearchModalComponent implements OnInit {
  CountryJson = environment.CountryJson;
  filteredCountries = [];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.filteredCountries = this.CountryJson;
  }

  filterCountries(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCountries = this.CountryJson.filter(country =>
      country.name.toLowerCase().includes(searchTerm) ||
      country.dialCode.includes(searchTerm)
    );
  }

  selectCountry(country) {
    this.modalCtrl.dismiss(country);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
