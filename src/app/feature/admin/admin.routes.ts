import { Routes } from "@angular/router";
import { RolEnum } from "@core/enums";
import { authAccessGuard } from "@core/guards";
export const routes: Routes = [

  {
    path: 'sing-in',
    loadComponent: () => import('./auth/sing-in-admin/sing-in-admin.component').then(c => c.SingInAdminComponent)
  },

  {
    path: '',
    loadComponent: () => import('./admin.component').then(c => c.AdminComponent),
    data: { rol: [RolEnum.ADMIN] },
    canMatch: [authAccessGuard]
  },

  {
    path: 'admin',
    pathMatch: 'full',
    redirectTo: ''
  }
]
