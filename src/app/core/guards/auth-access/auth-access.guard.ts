import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthRol } from '@core/models';
import { Store } from '@ngrx/store';

export const authAccessGuard: CanMatchFn = (route, segments) => {

  const rol = route.data?.['rol'] as string[];
  const store = inject<Store<AuthRol>>(Store);
  const router = inject(Router);

  const authRol$ = store.selectSignal(select => select.authRol);


  if (!rol.includes(authRol$())) {
    router.navigate(['']);
    return false;
  }


  return true;
};
