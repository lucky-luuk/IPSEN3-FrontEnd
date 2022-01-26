import {Injectable} from '@angular/core';
import {Md5} from "ts-md5";
import {HttpService} from "../http.service";
import {AccountModel} from "../account.model";
import {JwtHelperService} from "@auth0/angular-jwt";
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private role = '';

  constructor(private http : HttpService) { }

  login(email: string, password: string, onSuccess: (data: {email: string, firstname: string, lastname: string, token: string, firstLogin: boolean}) => void ,onFailure: () => void) {
    let hash = this.getPasswordHash(password);
    this.http.postWithReturnType <{username: string, password: string}, {email: string, firstname: string, lastname: string, token: string, firstLogin: boolean}>(
      "/authenticate", {username: email, password: hash}, onSuccess, onFailure);


  }

  getAllAccounts(implementation : (data : AccountModel[]) => void) {
    let map = new Map<string, string>();
    this.http.get<AccountModel[]>("/account/mod", map, implementation);
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
    if (this.getToken() !== '') {
      //check if token is expired, returns true or false
      const token = this.getToken()
      this.handleLogin(token)
      return !jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  public resetPassword(changePasswordRequestBody : {newPassword: string}) {
    this.http.put<{newPassword: string}>("/account/mod/password", changePasswordRequestBody,(data) => {
    });
  }

  autoLogin() {
    const token = this.getToken();
    if (token !== '') {
      this.handleLogin(token);
    }
  }

  handleLogin(token: string) {
    const tokenPayload: any = jwt_decode(token);
    this.role = tokenPayload.role;
    localStorage.setItem('token', token)
  }

  getRole() {
    return this.role;
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return '';
  }

  deleteToken() {
    console.log('Token deleate');
    localStorage.clear();
  }
}
