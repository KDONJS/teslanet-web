import { Routes, provideRouter, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

export const appConfig = {
    providers: [
      provideRouter(
        routes, 
        withViewTransitions(),
        withInMemoryScrolling({ anchorScrolling: 'enabled' })
      )
    ],
  };