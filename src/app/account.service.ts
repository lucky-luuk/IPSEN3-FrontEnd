import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {AccountModel} from "./account.model";

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



  getCurrentUserAccount() : AccountModel {
    return this.currentAccount;
  }
}
