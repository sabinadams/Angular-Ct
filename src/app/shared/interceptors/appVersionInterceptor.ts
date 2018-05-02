import { Injectable } from '@angular/core';
import { HttpEvent, 
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppVersionInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, 
    next: HttpHandler): Observable<HttpEvent<any>> {
    
    // If you don't have an appVersion, don't add the appVersion header
    // if ( !localStorage.getItem('appVersion') ) return next.handle(req);
    
    // Clone the request to add the new header.
    const authReq = req.clone({
      setHeaders: {
        appVersion: `${localStorage.getItem('appVersion') || [[1,0,'00108']]}`
      }
    });

    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}