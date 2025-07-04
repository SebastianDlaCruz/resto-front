import { Routes } from "@angular/router";
import { RolEnum } from "@core/enums";
import { authAccessGuard } from "@core/guards";
export const routes: Routes = [

  {
    path: 'sing-in',
    loadComponent: () => import('./auth/sing-in-admin/sing-in-admin.component').then(c => c.SingInAdminComponent)
  },
  {
    path: 'category-admin',
    loadChildren: () => import('./category/category.routes').then(r => r.routes),
    data: [RolEnum.ADMIN],
    canMatch: [authAccessGuard]
  },
  {
    path: 'dish-admin',
    loadChildren: () => import('./dish/dish.routes').then(r => r.routes),
    data: [RolEnum.ADMIN],
    canMatch: [authAccessGuard]
  }
]
