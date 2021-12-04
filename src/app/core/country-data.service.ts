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
  _countryUrl: string = 'https://restcountries.com/v2/name';


  constructor(private _http: HttpClient) {}
  // All countries data
  getAllCountry(): Observable<CountryInterface[]> {
    return this._http.get<CountryInterface[]>(this._countriesUrl);
  }

  // single country data

  getCountry(name: string):Observable<CountryInterface[]> {
    return this._http.get<CountryInterface[]>(name);
  }

  
}
