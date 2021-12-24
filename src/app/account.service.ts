import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {AccountModel} from "./account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpService) { }

  getAccountDetails(id : string, implementation : (data : AccountModel) => void) {
    let map = new Map<string, string>();
    map.set("id", id);
    this.http.get<AccountModel>("/account", map, implementation);
  }

  getCurrentUserAccount() : AccountModel {
    return new AccountModel();
  }
}
