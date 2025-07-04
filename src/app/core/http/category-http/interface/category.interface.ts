import { Category, CategoryCreate, ResponseSuccess, ResponseSuccessData } from "@core/models";
import { Observable } from "rxjs";

/**
 * Interface servicios de categorías
*/

export interface CategoryHttp {
  create(category: CategoryCreate): Observable<ResponseSuccess>;
  getAll(): Observable<ResponseSuccessData<Category[]>>;
}