/**
 * Modelo de respuesta de la api
 */

export interface ResponseSuccess {
  statusCode: number;
  message: string;
  success: boolean
};

/**
 * Modelo de respuesta de la api con data incluida
 */
export interface ResponseSuccessData<T> extends ResponseSuccess {
  data: T
}
