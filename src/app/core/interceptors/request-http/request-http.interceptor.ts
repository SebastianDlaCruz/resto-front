import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';


/**
 * Intercepta las peticiones http - toma la url base de la api del enviroment y la concatena con la url de la request. withCredentials: true  para las cookies.
 * @param req
 * @param next
 * @returns
 */
export const requestHttpInterceptor: HttpInterceptorFn = (req, next) => {

  const URL_BASE = environment.API

  req = req.clone({
    url: `${URL_BASE}${req.url}`,
    withCredentials: true
  });

  return next(req);
};
