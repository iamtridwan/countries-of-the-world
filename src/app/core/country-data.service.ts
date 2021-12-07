import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CountryInterface } from '../modules/country-interface';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CountryError } from '../modules/country-error';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  _countriesUrl: string =
    'https://restcountries.com/v2/all?fields=flags,name,population,topLevelDomain,subregion,region,capital,currencies,languages,borders,nativeName ';
  _countryUrl: string = 'https://restcountries.com/v2/name';

 countryError : CountryError = {
     errorNumber: 0,
     message: '',
     friendlyMessage: ''
   }

  constructor(private _http: HttpClient) {}
  // All countries data
  getAllCountry(): Observable<CountryInterface[] | CountryError> {
    return this._http.get<CountryInterface[]>(this._countriesUrl)
    .pipe(
      catchError(error => this.handleError(error))
    );
  }

  // Method to handle error
 private handleError(error: HttpErrorResponse): Observable<CountryError>{
   
   this.countryError.errorNumber = error.status;
   this.countryError.message = error.message;
   this.countryError.friendlyMessage = 'An Error occurred while retrieving data';
   return throwError(this.countryError)
 }


  // single country data

  getCountry(name: string):Observable<CountryInterface[] | CountryError> {
    return this._http.get<CountryInterface[]>(name)
    .pipe(
      catchError(error => this.handleError(error))
    );
  }

  
  
}
