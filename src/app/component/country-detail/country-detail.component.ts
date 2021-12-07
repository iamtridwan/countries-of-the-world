import { Component, OnInit } from '@angular/core';
import { CountryDataService } from 'src/app/core/country-data.service';
import { CountryInterface } from 'src/app/modules/country-interface';
import { ActivatedRoute } from '@angular/router';

import { CountryError } from 'src/app/modules/country-error';

@Component({
 
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  country?: CountryInterface[];
  borders: any;
  errorMessage: string = '';
 

  constructor( private _countryService: CountryDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
 let name = this.route.snapshot.paramMap.get('name')  
let url = `${this._countryService._countryUrl}/${name}?fields=flags,name,population,topLevelDomain,subregion,region,capital,currencies,languages,borders,nativeName`;
this._countryService.getCountry(url).subscribe(
 res => {
   this.country = <CountryInterface[]>res;
   this.borders = this.country[0].borders.slice(0, 3)
  


  },

  ((err: CountryError) => this.errorMessage = err.friendlyMessage))    
  }

}
