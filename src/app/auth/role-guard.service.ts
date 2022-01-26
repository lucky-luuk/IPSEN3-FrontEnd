import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from "@angular/router";
import jwt_decode from 'jwt-decode';
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(private auth: LoginService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    if (!this.auth.isAuthenticated() || this.auth.getRole() !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
