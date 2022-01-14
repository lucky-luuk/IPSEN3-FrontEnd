import {Injectable} from '@angular/core';
import {Md5} from "ts-md5";
import {HttpService} from "./http.service";
import {AccountModel} from "./account.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpService) { }

  login(email: string, password: string, onSuccess: (data: {email: string, firstname: string, lastname: string, token: string}) => void, onFailure: () => void) {
    let hash = this.getPasswordHash(password);
    this.http.postWithReturnType <{username: string, password: string}, {email: string, firstname: string, lastname: string, token: string}>(
      "/authenticate", {username: email, password: hash}, onSuccess, onFailure);
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
}
