import { Component, OnInit } from '@angular/core';
import { CountryDataService } from 'src/app/core/country-data.service';
import { CountryInterface } from 'src/app/modules/country-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  country?: CountryInterface[];
  borders: any;

  constructor(
    private _countryService: CountryDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    const resolvedCountry: CountryInterface[] =
      this.route.snapshot.data['countryResolved'];   

      this.country = resolvedCountry
      this.borders = this.country[0].borders.slice(0, 3);
    
  }
}
