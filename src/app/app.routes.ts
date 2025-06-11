import { Routes } from '@angular/router';
import { RolEnum } from '@core/enums';
export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./feature/home/home.component').then(c => c.HomeComponent),
    data: [RolEnum.ADMIN, RolEnum.USER]
  }

];
