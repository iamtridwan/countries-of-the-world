import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryInterface } from '../modules/country-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  _countriesUrl: string =
    'https://restcountries.com/v2/all?fields=flags,name,population,topLevelDomain,subregion,region,capital,currencies,languages,borders,nativeName ';
  _countryUrl: string = 'https://restcountries.com/v2/name/';
  _region: string = 'https://restcountries.com/v2/region/{region}';

  constructor(private _http: HttpClient) {}
  // All countries data
  getAllCountry(): Observable<CountryInterface[]> {
    return this._http.get<CountryInterface[]>(this._countriesUrl);
  }

  // single country data

  getCountry(name: string) {
    return this._http.get(`${this._countryUrl}/${name}`);
  }

  // get countries based on region
  getCountryRegion(region: string) {
    return this._http.get(`${this._region}/${region}`);
  }
}
