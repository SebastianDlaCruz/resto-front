import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

export const requestHttpInterceptor: HttpInterceptorFn = (req, next) => {

  const URL_BASE = environment.API

  req = req.clone({
    url: `${URL_BASE}${req.url}`,
    withCredentials: true
  });

  return next(req);
};
