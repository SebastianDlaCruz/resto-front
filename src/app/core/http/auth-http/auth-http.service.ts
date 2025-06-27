import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SingIn, SingUp } from '@core/models';
import { ResponseSuccess } from '@core/models/response-success.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  private readonly API = `${environment.API}/auth`;
  private readonly http = inject(HttpClient);

  singIng(data: SingIn) {
    return this.http.post<ResponseSuccess<unknown>>(`${this.API}/singin`, data, {
      withCredentials: true
    })

  };


  singUp(data: SingUp) {
    return this.http.post<ResponseSuccess<unknown>>(`${this.API}/singup`, data, {
      withCredentials: true
    })
  };


}
