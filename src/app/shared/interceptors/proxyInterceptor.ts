import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProxyInterceptor implements HttpInterceptor {
  
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let baseURL = 'http://ct.wwsires.com/api'
    if( window.location.hostname && ( window.location.hostname == 'localhost' || window.location.hostname == 'wws.test' ) ) {
        baseURL = 'http://wws.test/api'
    } else if( window.location.hostname && ( window.location.hostname == 'ctdev.wwsires.com' ) ) {
        baseURL = 'http://ctdev.wwsires.com/api'
    } else if( window.location.hostname && ( window.location.hostname == 'ct.wwsires.intranet' ) ) {
        baseURL = 'http://ct.wwsires.intranet/api'
    } 
    // Clone the request so we can modify the url to point to the correct server for our environment
    const proxyReq = req.clone({ url: `${baseURL}${req.url}` });

    // Pass on the cloned request instead of the original request.
    return next.handle(proxyReq);
  }
}