import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgIconsConfig } from '@ng-icons/core';


import { requestHttpInterceptor } from '@core/interceptors';
import { authRolReducer } from '@core/store';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [

    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideNgIconsConfig({
      size: '1.5em',
      color: "white",
    }),
    provideStore({ authRol: authRolReducer }),
    provideHttpClient(withInterceptors([requestHttpInterceptor]), withFetch())
  ]
};
