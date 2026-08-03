import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { AboutComponent } from './components/about-component/about-component';
import { StarTableViewComponent } from './components/star-table-view-component/star-table-view-component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: StarTableViewComponent,
    path: 'stars',
  },
  {
    component: AboutComponent,
    path: 'about',
  },
];
