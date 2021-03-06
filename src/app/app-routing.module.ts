import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

//defined routing to redirect requests
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:-movie-search',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
