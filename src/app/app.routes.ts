import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { AboutComponent } from './components/about-component/about-component';

export const routes: Routes = [
    {
        component: HomeComponent,
        path: '',
    },
    {
        component: AboutComponent,
        path: 'about',
    }

];
