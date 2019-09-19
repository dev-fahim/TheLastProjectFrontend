import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    let cloned_req = null;
    if(token != null){ cloned_req = req.clone({ setHeaders: { 'Content-Type': 'application/json', 'Authorization': 'JWT ' + token } }); }
    else { cloned_req = req.clone({ setHeaders: { 'Content-Type': 'application/json' } }); }
    return next.handle(cloned_req);
  }
} 


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];
