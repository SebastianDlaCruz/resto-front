import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgIconsConfig } from '@ng-icons/core';

import { stateAuthReducer } from '@core/store';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [

    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideNgIconsConfig({
      size: '1.5em',
      color: "white",
    }),
    provideStore({ stateAuth: stateAuthReducer }),
    provideHttpClient(withFetch())
  ]
};
