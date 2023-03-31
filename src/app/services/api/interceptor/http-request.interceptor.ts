import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    (request);
    return next.handle(request);
  }
}

export const HttpRequestInterceptorProvider = {
  useClass: HttpRequestInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
