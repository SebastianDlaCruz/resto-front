import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseSuccess } from '@core/models/response-success.model';
import { environment } from '../../../../environments/environment.development';
import { SingIn } from './model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  private readonly API = `${environment.API}/auth`;
  private readonly http = inject(HttpClient);

  singIng(data: SingIn) {
    return this.http.post<ResponseSuccess<any>>(`${this.API}/singin`, data, {
      withCredentials: true
    })
  };


}
