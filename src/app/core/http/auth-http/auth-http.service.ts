import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthRol, SingIn, SingUp } from '@core/models';
import { ResponseSuccess, ResponseSuccessData } from '@core/models/response-success.model';
import { Observable } from 'rxjs';
import { AuthHttp } from './interface/auth-http.interface';


/**
 * Servicios de autenticación
 * permite realizar operaciones de autenticación
 *
 */
@Injectable({
  providedIn: 'root'
})
export class AuthHttpService implements AuthHttp {


  private readonly http = inject(HttpClient);


  /**
   * Inicio de sesión
   *
   * @param data -  model/auth  {singIn}
   * @returns  retorna model/ {ResponseSuccessData<AuthRol>}  - devuelve el rol del usuario
   */

  singIng(data: SingIn) {
    return this.http.post<ResponseSuccessData<AuthRol>>(`/sing-in`, data)

  };


  /**
   * Crea un nuevo usuario
   * @param data  - model/auth {SingUp}
   * @returns  model/response-success {ResponseSuccessData<AuthRol>} - devuelve el rol del usuario
   */
  singUp(data: SingUp) {
    return this.http.post<ResponseSuccessData<AuthRol>>(`/sing-up`, data)
  };

  /**
   * cierra la sesion del usuario
   * @returns  model/response-success {ResponseSuccess} - devuelve la respues del api
   */

  singOut(): Observable<ResponseSuccess> {
    return this.http.get<ResponseSuccess>(`/sing-out`);
  }

  /**
   * refresca el token
   * @returns  model/response-success {ResponseSuccessData<AuthRol>} - devuelve rol
   */
  refreshToken(): Observable<ResponseSuccess> {
    return this.http.get<ResponseSuccess>(`/refresh-token`);
  }
}
