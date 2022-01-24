import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {AccountModel} from "./auth/login/account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  static readonly DEFAULT_ID = "8176a91b-1ba8-4398-9f26-06c93bbcc25d";
  private currentAccount : AccountModel;

  constructor(private http : HttpService) {
   this.currentAccount = new AccountModel();
   this.currentAccount.id = AccountService.DEFAULT_ID
  }

  getAccountDetailsFromId(id : string, implementation : (data : AccountModel) => void) {
    let map = new Map<string, string>();
    map.set("id", id);
    this.http.get<AccountModel>("/account", map, implementation);
  }

  getCurrentUserAccount() : AccountModel {
    return this.currentAccount;
  }
}
