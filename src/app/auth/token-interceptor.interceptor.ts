import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from "./login.service";

@Injectable({providedIn: 'root'})
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private auth: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("HELLO");
    
    if (this.auth.isAuthenticated()) {
      if (this.auth.getToken()) {
        const modif = request.clone({headers: request.headers.set('Authorization', 'Bearer '+this.auth.getToken())})
        return next.handle(modif);
      }
    }
    return next.handle(request);
  }
}
