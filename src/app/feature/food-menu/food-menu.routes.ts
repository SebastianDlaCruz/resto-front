import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    title: 'Inicio',
    loadComponent: () => import('./food-menu.component').then(c => c.FoodMenuComponent),
    children: [

      {
        path: '',
        loadComponent: () => import('./feature/home/home.component').then(c => c.HomeComponent),
      },

      {
        path: 'letter',
        title: 'Carta',
        loadChildren: () => import('./feature/letter/letter.routes').then(r => r.routes),

      }
    ]
  }

];
