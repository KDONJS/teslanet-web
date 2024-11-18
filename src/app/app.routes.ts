import { Routes, provideRouter, withViewTransitions } from '@angular/router';

export const routes: Routes = [];

export const appConfig = {
    providers: [
      provideRouter(routes, withViewTransitions())
    ],
  };