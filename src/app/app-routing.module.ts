import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './component/country-detail/country-detail.component';
import { CountryListComponent } from './component/country-list/country-list.component';
import { CountryResolverService } from './core/country-resolver.service';

const routes: Routes = [
  { path: 'countries', component: CountryListComponent },
  {
    path: 'countries/:name',
    component: CountryDetailComponent,
    resolve: { countryResolved: CountryResolverService },
  },
  { path: '', component: CountryListComponent },
  { path: '**', redirectTo: 'countries', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
