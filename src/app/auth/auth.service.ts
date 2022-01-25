import { Injectable } from '@angular/core';
import {HttpService} from "../http.service";
import {UsersModel} from "../admin/usersHelper/users.model";
import {AccountModel} from "../account.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor(private http: HttpService) { }


  isAuthenticated() {

  }

  login(formUser: any, implementation : (data : any) => void) {
    this.http.post('/authenticate', formUser, implementation)
  }

  isAuthorised(user: AccountModel) {

  }


}
