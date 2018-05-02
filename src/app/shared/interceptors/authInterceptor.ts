import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // If you don't have a token, don't add the auth header
    // if ( !localStorage.getItem('userToken') ) return next.handle(req);
    
    // Clone the request to add the new header.
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('userToken') || ''}`
      }
    });

    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}