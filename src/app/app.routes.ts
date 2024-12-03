import { Routes, provideRouter, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlanesComponent } from './components/planes/planes.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { CoverturaComponent } from './components/covertura/covertura.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'planes', component: PlanesComponent},
  { path: 'beneficios', component: BeneficiosComponent},
  { path: 'cobertura', component: CoverturaComponent}
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