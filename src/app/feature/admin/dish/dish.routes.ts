import { Routes } from "@angular/router";
import { DishAdminCreateComponent } from "./dish-admin-create/dish-admin-create.component";
import { DishAdminListComponent } from "./dish-admin-list/dish-admin-list.component";

export const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'create',
        component: DishAdminCreateComponent
      }, {
        path: 'list',
        component: DishAdminListComponent
      }
    ]

  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'create'
  }
];
