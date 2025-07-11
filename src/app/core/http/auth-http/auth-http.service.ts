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


  singIng(data: SingIn) {
    return this.http.post<ResponseSuccessData<AuthRol>>(`/sing-in`, data)

  };

  singUp(data: SingUp) {
    return this.http.post<ResponseSuccessData<AuthRol>>(`/sing-up`, data)
  };


  singOut(): Observable<ResponseSuccess> {
    return this.http.get<ResponseSuccess>(`/sing-out`);
  }

  refreshToken(): Observable<ResponseSuccess> {
    return this.http.get<ResponseSuccess>(`/refresh-token`);
  }
}
