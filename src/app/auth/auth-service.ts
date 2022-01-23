import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public isAuthenticated() : boolean{
    let jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token') ;
    if (token) {
      //check if token is expired, returns true or false
      return !jwtHelper.isTokenExpired(token);
    }
    return false;
  }
}
