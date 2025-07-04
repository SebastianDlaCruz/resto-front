import { Routes } from "@angular/router";
import { CategoryCreateComponent } from "./category-create/category-create.component";
import { CategoryListComponent } from "./category-list/category-list.component";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CategoryCreateComponent
      },
      {
        path: 'list',
        component: CategoryListComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'create '
  }]
