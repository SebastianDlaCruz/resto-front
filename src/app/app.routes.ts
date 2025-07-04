import { Routes } from '@angular/router';
import { RolEnum } from '@core/enums';

export const routes: Routes = [

  {
    path: '',
    title: 'Inicio',
    loadComponent: () => import('./feature/home/home.component').then(c => c.HomeComponent),
    data: [RolEnum.ADMIN, RolEnum.USER]
  },
  {
    path: 'letter',
    title: 'Carta',
    loadComponent: () => import('./feature/letter/letter.component').then(c => c.LetterComponent),
    data: [RolEnum.ADMIN, RolEnum.USER]
  },
  {
    path: 'admin',
    loadChildren: () => import('./feature/admin/admin.routes').then(r => r.routes)
  }
];
