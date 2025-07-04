import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthRol } from '@core/models';
import { Store } from '@ngrx/store';


/**
 * Permite acceso a operaciones o secciones especificas dependiendo del rol
 *  si el rol no es el adecuado se redirige a la pagina principal
 * @param route
 * @param segments
 * @returns boolean
 */

export const authAccessGuard: CanMatchFn = (route, segments) => {

  const rol = route.data?.['rol'] as string[];
  console.log('rol', rol);
  const store = inject<Store<AuthRol>>(Store);
  const router = inject(Router);

  const authRol$ = store.selectSignal(select => select.authRol);


  if (!rol.includes(authRol$())) {
    router.navigate(['']);
    return false;
  }


  return true;
};
