import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    title: 'Inicio',
    loadChildren: () => import('./feature/food-menu/food-menu.routes').then(r => r.routes)

  },

  {
    path: 'admin',
    loadChildren: () => import('./feature/admin/admin.routes').then(r => r.routes),

  }
];
