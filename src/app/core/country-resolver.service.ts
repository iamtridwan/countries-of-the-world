import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CountryInterface } from '../modules/country-interface';
import { CountryDataService } from './country-data.service';
import { CountryError } from '../modules/country-error';

@Injectable({
  providedIn: 'root'
})
export class CountryResolverService implements Resolve<CountryInterface[] | CountryError>{
countryPath: string = 'https://restcountries.com/v2/name/';
  constructor(private countryData: CountryDataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryInterface[] | CountryError> {
    const name = route.paramMap.get("name")
    let countryUrl = `${this.countryPath}${name}?fields=flags,name,population,topLevelDomain,subregion,region,capital,currencies,languages,borders,nativeName`;
    return this.countryData.getCountry(countryUrl)
  }
}
