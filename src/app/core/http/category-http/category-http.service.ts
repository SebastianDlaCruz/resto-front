import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category, CategoryCreate, ResponseSuccess, ResponseSuccessData } from '@core/models';
import { Observable } from 'rxjs';
import { CategoryHttp } from './interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService implements CategoryHttp {

  private readonly http = inject(HttpClient);

  /**
   * crea categoría
   * @param category models/category - modelos para crear categoría
   * @returns|model/response-success - devuelve la respuesta 
   */

  create(category: CategoryCreate): Observable<ResponseSuccess> {
    return this.http.post<ResponseSuccess>(`/category`, category);
  }

  /**
   * Obtiene todas las categorías
   * @returns |model/response-success {ResponseSuccessData<Category[]>} - devuelve todas las categorías
   */

  getAll(): Observable<ResponseSuccessData<Category[]>> {
    return this.http.get<ResponseSuccessData<Category[]>>(`/category`);
  }


  /**
   * Busca categorías por nombre
   * @param name string - nombre de la categoría
   * @returns|model/response-success {ResponseSuccessData<Category[]>} - devuelve categorías que coinciden con el nombre
   */

  getFind(name: string): Observable<ResponseSuccessData<Category[]>> {
    return this.http.get<ResponseSuccessData<Category[]>>(`/category`, {
      params: { name }
    });
  }


}
