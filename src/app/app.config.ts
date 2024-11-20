import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    importProvidersFrom(NgxSliderModule),
  ]
};
