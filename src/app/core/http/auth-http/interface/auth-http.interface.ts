import { AuthRol, ResponseSuccess, ResponseSuccessData, SingIn, SingUp } from "@core/models"
import { Observable } from "rxjs"


/**
 * Interface servicios de autenticación
 */

export interface AuthHttp {

  singIng(data: SingIn): Observable<ResponseSuccessData<AuthRol>>

  singUp(data: SingUp): Observable<ResponseSuccessData<AuthRol>>

  singOut(): Observable<ResponseSuccess>

  refreshToken(): Observable<ResponseSuccess>;
}
