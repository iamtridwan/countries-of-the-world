import { Component, OnChanges, OnInit } from '@angular/core';
import { CountryDataService } from 'src/app/core/country-data.service';
import { CountryInterface } from 'src/app/modules/country-interface';
import { map } from 'rxjs/operators'
@Component({
  selector: 'wc-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit, OnChanges {
  countryList?: CountryInterface[];
  private _countryName: string = '';

  get countryName(): string {
    return this._countryName;
  }

  set countryName(value: string) {
    this._countryName = value;
    this.countryList = this.sortCountryByName(value);
  }

  private _regionName: string = 'Search by Region';
  set regionName(value: string) {
    this._regionName = value;
  }

  get regionName() {
    return this._regionName;
  }

  isShowRegion: boolean = false;
  constructor(private _countryService: CountryDataService) {}

  // perform initial set up value for all country data
  ngOnInit(): void {
    this._countryService.getAllCountry().subscribe(
      (res) => {
        this.countryList = res;
        // console.log(this.countryList?.slice(0, 1));
      },
      (err) => console.log(err)
    );
  }
  ngOnChanges() {}

  // toggle the region list
  showRegion(): void {
    this.isShowRegion = !this.isShowRegion;
  }
  // method to get a particular region
  setRegionName(region: string): void {
    this.regionName = region;
    this.showRegion();
    this.countryList = this.countryList?.filter((country) => country.region === this.regionName);
    // console.log(this.countryList)
  }

  sortCountryByName(sortBy: string): CountryInterface[] {
    sortBy = sortBy.toLowerCase();
    if (sortBy) {
      return this.countryList!.filter((country: CountryInterface) =>
        country.name.toLowerCase().includes(sortBy)
      );
    } else {
      return this.countryList!;
    }
  }
}