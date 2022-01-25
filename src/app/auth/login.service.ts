import {Injectable} from '@angular/core';
import {Md5} from "ts-md5";
import {HttpService} from "../http.service";
import {AccountModel} from "../account.model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import {routes} from "../app-routing.module";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FirstLoginPopupComponent} from "./first-login-popup/first-login-popup.component";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private role = '';
  constructor(private http : HttpService, private router: Router, private modal: NgbModal) { }

  login(email: string, password: string, ) {
    let hash = this.getPasswordHash(password);
    this.http.postWithReturnType <{username: string, password: string}, {email: string, firstname: string, lastname: string, token: string, firstLogin: boolean}>(
      "/authenticate", {username: email, password: hash}, (data) => {
        console.log("bij if", data.firstLogin)
        if (data.firstLogin){
          console.log("in if")
          this.modal.open(FirstLoginPopupComponent);
          localStorage.setItem('userEmail', data.email);
        }
        this.handleLogin(data.token);
        if (this.role === 'ADMIN') {
          this.router.navigate(['admin/overzicht'])
        } else {
          this.router.navigate(['moderator/overzicht'])
        }
      }, () => {

      });
  }

  createAccount(account: AccountModel, onSuccess: (data: {id: string, firstName: string, lastName: string, email: string, roles: {name: string}[]}) => void, onFailure: () => void) {
    // create new account so we dont change the model
    let a = this.copyAccount(account);
    a.password = this.getPasswordHash(account.password);

    this.http.postWithReturnType<AccountModel, {id: string, firstName: string, lastName: string, email: string, roles: {name: string}[]}>(
      "/register", a, onSuccess, onFailure);
  }

  getPasswordHash(password : string) : string {
    return Md5.hashStr(password);
  }

  copyAccount(a : AccountModel) : AccountModel {
    let a2 = new AccountModel();
    a2.firstName = a.firstName;
    a2.password = a.password;
    a2.id = a.id;
    a2.email = a.email;
    a2.lastName = a.lastName;
    return a2;
  }

  public isAuthenticated() : boolean{
    let jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token') ;
    if (token) {
      //check if token is expired, returns true or false
      this.handleLogin(token)
      return !jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  public resetPassword(changePasswordRequestBody : {email: string, oldpassword: string, newpassword: string}) {
    this.http.put<{email: string, oldpassword: string, newpassword: string}>("/account/mod/password", changePasswordRequestBody, (data) => {
    });

  }

  private handleLogin(token: any) {
    const tokenPayload: any = jwt_decode(token);
    this.role = tokenPayload.role;
    localStorage.setItem('token', JSON.stringify(token))
  }

  getRole() {
    return this.role;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
}
