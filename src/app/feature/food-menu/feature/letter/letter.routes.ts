import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./letter.component').then(c => c.LetterComponent),
  },
  {
    path: 'category/:name',
    loadComponent: () => import('./components/category/category.component').then(c => c.CategoryComponent)
  }
]
