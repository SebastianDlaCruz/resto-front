import { AuthRol, ResponseSuccess, ResponseSuccessData, SingIn, SingUp } from "@core/models"
import { Observable } from "rxjs"


export interface AuthHttp {

  /**
   * Devuelve el rol del usuario al loguearse
   * @param {SingIn} data
   * @returns admin o user
   */
  singIng(data: SingIn): Observable<ResponseSuccessData<AuthRol>>

  /**
   *  Devuelve el rol del usuario al registrarse
   * @param {SingUp} data
   * @returns admin o user
   */
  singUp(data: SingUp): Observable<ResponseSuccessData<AuthRol>>

  /**
   * Desloguea al usuario
   */
  singOut(): Observable<ResponseSuccess>

  /**
   * Actualiza el token
   */
  refreshToken(): Observable<ResponseSuccess>;
}
