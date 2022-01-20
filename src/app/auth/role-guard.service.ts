import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from "@angular/router";
import jwt_decode from 'jwt-decode';
import {LoginService} from "../login.service";
import {AuthService} from "./auth-service";
import {LoginComponent} from "../moderator/login/login.component";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(public Auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let login : LoginComponent = new LoginComponent();
    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload: any = jwt_decode(token);
      let role = tokenPayload.role;


      if (!this.Auth.isAuthenticated() || role !== expectedRole) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }
    this.router.navigate(['login']);
    return false
  }
}
