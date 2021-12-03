import { Component, OnChanges, OnInit } from '@angular/core';
import { CountryDataService } from 'src/app/core/country-data.service';
import { CountryInterface } from 'src/app/modules/country-interface';

import { Router } from '@angular/router';
// import { map } from 'rxjs/operators'
@Component({
  selector: 'wc-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit, OnChanges {
  countryList?: CountryInterface[] = [];
  filteredCountry: CountryInterface[] = []
  
  private _countryName: string = '';

  get countryName(): string {
    return this._countryName;
  }

  set countryName(value: string) {
    this._countryName = value;
    this.filteredCountry = this.countryName ? this.sortCountryByName(this.countryName) : this.countryList!;
  }

  private _regionName: string = 'Search by Region';

  set regionName(value: string) {
    this._regionName = value;
  
  }

  get regionName() {
    return this._regionName;
  }

  isShowRegion: boolean = false;
  constructor(private _countryService: CountryDataService, private router: Router) {}

  // perform initial set up value for all country data
  ngOnInit(): void {
    this._countryService.getAllCountry().subscribe(
      (res) => {
        this.countryList = res;
        this.filteredCountry = this.countryList
      
      },
      (err) => console.log(err)
    );

  }


  ngOnChanges() {

  }

  // toggle the region list
  showRegion(): void {
    this.isShowRegion = !this.isShowRegion;
  }

  // method to get a particular region
  setRegionName(region: string): CountryInterface[] {
    this.regionName = region;
    this.showRegion();
    return this.filteredCountry = this.countryList!.filter((country) => country.region === this.regionName);
    
  }

  sortCountryByName(sortBy: string): CountryInterface[] {
    sortBy = sortBy.toLocaleLowerCase();
    return this.countryList!.filter((country: CountryInterface) => country.name.toLocaleLowerCase().includes(sortBy))
  }

  onclick(){
    console.log('clicked')
   this.router.navigate(['/country'])
  }
  
}
