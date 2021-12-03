import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './component/country-detail/country-detail.component';
import { CountryListComponent } from './component/country-list/country-list.component';

const routes: Routes = [
  { path: 'countries', component: CountryListComponent },
  { path: 'country', component: CountryDetailComponent },
  { path: '', component: CountryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
