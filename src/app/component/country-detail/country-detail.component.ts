import { Component, OnInit } from '@angular/core';
import { CountryDataService } from 'src/app/core/country-data.service';
import { CountryInterface } from 'src/app/modules/country-interface';

@Component({
  selector: 'wc-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  // country: CountryInterface;

  constructor( private _countryService: CountryDataService) { }

  ngOnInit(): void {

// this._countryService.getCountry()    
  }

}
